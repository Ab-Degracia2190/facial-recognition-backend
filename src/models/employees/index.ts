import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    middle_name: {
        type: String,
    },
    last_name: {
        type: String,
        required: true,
    },
    address:{
        type: String,
    },
    contact_number: {
        type: String,
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

export default mongoose.model('_employees', employeeSchema);