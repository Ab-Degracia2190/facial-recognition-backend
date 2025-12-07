import { Response } from 'express';
import type { MulterRequest } from '../../types';
declare class Employees {
    /**
     * Calculate Euclidean distance between two face descriptors
     */
    private euclideanDistance;
    /**
     * Combine multiple face descriptors into a single representative descriptor
     * This averaging approach creates a more robust face profile
     */
    private combineDescriptors;
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
    register(req: MulterRequest & {
        body?: Record<string, any>;
    }, res: Response): Promise<void>;
    /**
     * Enhanced recognition using face-api.js descriptors
     * Uses Euclidean distance matching with configurable threshold
     */
    recognize(req: MulterRequest & {
        body?: Record<string, any>;
    }, res: Response): Promise<void>;
}
export default Employees;
