import mongoose from 'mongoose';

const mongoUri = process.env.APP_MONGO_URI;
if (!mongoUri) {
  throw new Error('APP_MONGO_URI environment variable is not set');
}

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(mongoUri as string);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
}

export async function disconnectDB(): Promise<void> {
  try {
    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  } catch (err) {
    console.error('MongoDB disconnection error:', err);
    throw err;
  }
}