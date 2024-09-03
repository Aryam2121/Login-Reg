import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME, // Set the database name here
            useNewUrlParser: true, // Optional: Use new URL parser
            useUnifiedTopology: true, // Optional: Use unified topology
        });
        console.log(`\nMongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection FAILED", error.message);
        process.exit(1);
    }
};

export default connectDB;
