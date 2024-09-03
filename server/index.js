import dotenv from 'dotenv'; // Use ES Module import
import connectDB from './db/index.js';
import { app } from './app.js';

// Load environment variables
dotenv.config({ path: './.env' });

// Connect to the database and start the server
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8000; // Define the port
        app.listen(PORT, () => {
            console.log(`⚙️ Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('MONGO DB connection failed!', err);
    });
