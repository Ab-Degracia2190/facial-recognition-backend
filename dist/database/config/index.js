"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
exports.disconnectDB = disconnectDB;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoUri = process.env.APP_MONGO_URI;
if (!mongoUri) {
    throw new Error('APP_MONGO_URI environment variable is not set');
}
async function connectDB() {
    try {
        await mongoose_1.default.connect(mongoUri);
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
}
async function disconnectDB() {
    try {
        await mongoose_1.default.disconnect();
        console.log('MongoDB disconnected');
    }
    catch (err) {
        console.error('MongoDB disconnection error:', err);
        throw err;
    }
}
