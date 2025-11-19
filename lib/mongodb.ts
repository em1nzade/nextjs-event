import mongoose from 'mongoose';

// Define the MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Validate that the MongoDB URI exists
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// Define types for the cached connection
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend the global object to include mongoose cache
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

// Initialize the cache object
// In development, Next.js hot reloads can create multiple connections
// By caching on the global object, we prevent connection leaks
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

/**
 * Establishes a connection to MongoDB using Mongoose
 * Reuses existing connections to prevent connection pool exhaustion
 * @returns Promise that resolves to the Mongoose instance
 */
async function connectDB(): Promise<typeof mongoose> {
  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // If no connection exists but a connection promise is in progress, wait for it
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Disable Mongoose buffering
    };

    // Create a new connection promise
    cached.promise = mongoose.connect(MONGODB_URI as string, opts).then((mongoose) => {
      console.log('MongoDB connected successfully');
      return mongoose;
    });
  }

  try {
    // Wait for the connection promise to resolve
    cached.conn = await cached.promise;
  } catch (e) {
    // If connection fails, reset the promise to allow retry
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
