import dotenv from 'dotenv'; // Using ES module import
import express from 'express'; // Using ES module import
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Load environment variables from .env file
dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN.split(','), // Handle multiple origins
    credentials: true,
}));

// Middleware setup
app.use(express.json({ limit: "16kb" })); // Limit request size to 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Handle URL-encoded data
app.use(express.static("public")); // Serve static files from the "public" directory
app.use(cookieParser()); // Parse cookies from requests

// Import routes
import authRouter from './routes/auth.js';

// Set up routes
app.use("/admin", authRouter);

// Export the app for use in other modules
export { app };
