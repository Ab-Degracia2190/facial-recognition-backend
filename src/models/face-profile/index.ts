import mongoose from 'mongoose';

const faceProfileSchema = new mongoose.Schema({
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
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

export default mongoose.model('_face_profiles', faceProfileSchema);