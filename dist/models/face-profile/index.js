"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const faceProfileSchema = new mongoose_1.default.Schema({
    employee_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: '_employees',
        required: true,
    },
    image_url: {
        type: String,
        default: null,
    },
    facial_embeddings: {
        type: [Number],
        required: true,
    },
    created_at: {
        type: Number,
    },
    updated_at: {
        type: Number,
    },
    deleted_at: {
        type: Number,
    },
});
exports.default = mongoose_1.default.model('_face_profiles', faceProfileSchema);
