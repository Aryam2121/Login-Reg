import { Router } from "express";
import {
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    changeCurrentPassword
} from "../controllers/user.controller.js";
import { verifyJWT, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = Router();

// Register a new user
router.post("/register", registerUser);

// Log in a user
router.post("/login", loginUser);

// Log out a user (requires JWT verification)
router.post("/logout", verifyJWT, logoutUser);

// Refresh access token (does not require verification)
router.post("/refresh-token", refreshAccessToken);

// Change user password (requires JWT verification)
router.post("/change-password", verifyJWT, changeCurrentPassword);

// Example: Route to get user details (requires JWT verification and specific role authorization)
// Uncomment and modify as needed
// router.get("/user/:id", verifyJWT, authorizeRoles('Admin'), getUserById);

export default router;
