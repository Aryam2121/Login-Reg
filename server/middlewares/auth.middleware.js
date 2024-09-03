import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

// Middleware to verify JWT
export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        // Extract token from cookies or Authorization header
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        
        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        // Verify the token
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
        // Find the user associated with the token
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        
        if (!user) {
            throw new ApiError(401, "Invalid Access Token");
        }

        // Attach user to the request object
        req.user = user;
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});

// Middleware to authorize roles
export const authorizeRoles = (...roles) => {
    return asyncHandler(async (req, _, next) => {
        try {
            // Check if the user's role is authorized
            if (!roles.includes(req.user.role)) {
                throw new ApiError(403, "Access denied. Insufficient privileges");
            }
            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            throw new ApiError(403, error?.message || "Access denied");
        }
    });
};
