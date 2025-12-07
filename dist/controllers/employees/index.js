"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const face_profile_1 = __importDefault(require("../../models/face-profile"));
const employees_1 = __importDefault(require("../../models/employees"));
class Employees {
    /**
     * Calculate Euclidean distance between two face descriptors
     */
    euclideanDistance(a, b) {
        if (a.length !== b.length) {
            throw new Error('Descriptor dimensions must match');
        }
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            const diff = a[i] - b[i];
            sum += diff * diff;
        }
        return Math.sqrt(sum);
    }
    /**
     * Combine multiple face descriptors into a single representative descriptor
     * This averaging approach creates a more robust face profile
     */
    combineDescriptors(descriptors) {
        if (descriptors.length === 0)
            return [];
        if (descriptors.length === 1)
            return descriptors[0];
        const length = descriptors[0].length;
        const combined = new Array(length).fill(0);
        // Average all descriptors
        for (const desc of descriptors) {
            if (desc.length !== length) {
                throw new Error('All descriptors must have the same length');
            }
            for (let i = 0; i < length; i++) {
                combined[i] += desc[i];
            }
        }
        // Normalize
        for (let i = 0; i < length; i++) {
            combined[i] /= descriptors.length;
        }
        return combined;
    }
    /**
     * Enhanced registration using face-api.js descriptors
     * Accepts form data with:
     * - embeddings (JSON string of number[][]) - face descriptors from face-api.js
     * - poses (JSON array) - optional, describes each descriptor angle
     * - first_name (required)
     * - middle_name (optional)
     * - last_name (required)
     * - address (optional)
     * - contact_number (optional)
     */
    async register(req, res) {
        try {
            const body = req.body || {};
            // Parse embeddings from request
            let descriptors = [];
            if (body.embeddings) {
                try {
                    descriptors = JSON.parse(body.embeddings);
                    if (!Array.isArray(descriptors) || descriptors.length === 0) {
                        res.status(400).json({ message: 'Invalid embeddings format' });
                        return;
                    }
                }
                catch (e) {
                    res.status(400).json({ message: 'Failed to parse embeddings' });
                    return;
                }
            }
            else {
                res.status(400).json({ message: 'No embeddings provided' });
                return;
            }
            const firstName = (body.first_name ?? '').toString().trim();
            const lastName = (body.last_name ?? '').toString().trim();
            if (!firstName || !lastName) {
                res.status(400).json({ message: 'first_name and last_name are required' });
                return;
            }
            // Create employee record
            const employee = await employees_1.default.create({
                first_name: firstName,
                middle_name: (body.middle_name ?? null),
                last_name: lastName,
                address: (body.address ?? null),
                contact_number: (body.contact_number ?? null),
                created_at: Date.now()
            });
            // Combine all descriptors into a single profile
            const combinedDescriptor = this.combineDescriptors(descriptors);
            // Store face profile referencing employee._id
            const profile = await face_profile_1.default.create({
                employee_id: employee._id,
                image_url: null,
                facial_embeddings: combinedDescriptor,
                created_at: Date.now()
            });
            res.status(201).json({
                message: `Employee registered with ${descriptors.length} face angle(s)`,
                employee: {
                    id: employee._id,
                    first_name: employee.first_name,
                    last_name: employee.last_name
                },
                profile: {
                    id: profile._id,
                    employee_id: profile.employee_id,
                    angles_captured: descriptors.length
                }
            });
        }
        catch (err) {
            console.error('Register error', err);
            res.status(500).json({ message: 'Registration failed', error: String(err) });
        }
    }
    /**
     * Enhanced recognition using face-api.js descriptors
     * Uses Euclidean distance matching with configurable threshold
     */
    async recognize(req, res) {
        try {
            const body = req.body || {};
            // Parse descriptor from request
            let descriptor = [];
            if (body.descriptor) {
                try {
                    descriptor = JSON.parse(body.descriptor);
                    if (!Array.isArray(descriptor) || descriptor.length === 0) {
                        res.status(400).json({ message: 'Invalid descriptor format' });
                        return;
                    }
                }
                catch (e) {
                    res.status(400).json({ message: 'Failed to parse descriptor' });
                    return;
                }
            }
            else {
                res.status(400).json({ message: 'No descriptor provided' });
                return;
            }
            // Fetch stored profiles
            const profiles = await face_profile_1.default.find({}).lean().exec();
            if (profiles.length === 0) {
                res.json({
                    matched: false,
                    distance: null,
                    message: 'No profiles registered in the system',
                });
                return;
            }
            let best = {
                profile: null,
                distance: Number.POSITIVE_INFINITY,
                employee: null
            };
            // Find best match
            for (const p of profiles) {
                if (!p.facial_embeddings || !Array.isArray(p.facial_embeddings))
                    continue;
                try {
                    const dist = this.euclideanDistance(descriptor, p.facial_embeddings);
                    if (dist < best.distance) {
                        best.profile = p;
                        best.distance = dist;
                    }
                }
                catch (err) {
                    console.error('Distance calculation error:', err);
                    continue;
                }
            }
            // face-api.js typically uses 0.6 as threshold for face recognition
            // Lower values = stricter matching, Higher values = more lenient
            const THRESHOLD = 0.6;
            if (best.profile && best.distance <= THRESHOLD) {
                // Fetch employee details
                const employee = await employees_1.default.findById(best.profile.employee_id).lean().exec();
                // Calculate confidence percentage (inverse of distance, normalized)
                const confidence = Math.max(0, Math.min(100, (1 - (best.distance / THRESHOLD)) * 100));
                res.json({
                    matched: true,
                    distance: best.distance,
                    confidence: confidence.toFixed(2) + '%',
                    profile: {
                        id: best.profile._id,
                        employee_id: best.profile.employee_id,
                        image_url: best.profile.image_url,
                    },
                    employee: employee ? {
                        id: employee._id,
                        first_name: employee.first_name,
                        middle_name: employee.middle_name,
                        last_name: employee.last_name,
                        full_name: `${employee.first_name} ${employee.middle_name ? employee.middle_name + ' ' : ''}${employee.last_name}`,
                        contact_number: employee.contact_number,
                        address: employee.address
                    } : null,
                    message: 'Employee matched successfully',
                });
            }
            else {
                res.json({
                    matched: false,
                    distance: best.distance === Number.POSITIVE_INFINITY ? null : best.distance,
                    message: best.distance === Number.POSITIVE_INFINITY
                        ? 'No face profiles found to compare'
                        : `No matching face found (closest distance: ${best.distance.toFixed(4)}, threshold: ${THRESHOLD})`,
                    debug: {
                        closest_distance: best.distance === Number.POSITIVE_INFINITY ? null : best.distance,
                        threshold: THRESHOLD,
                        profiles_checked: profiles.length
                    }
                });
            }
        }
        catch (err) {
            console.error('Recognition error', err);
            res.status(500).json({ message: 'Recognition failed', error: String(err) });
        }
    }
}
exports.default = Employees;
