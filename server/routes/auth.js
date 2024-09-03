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

// Route to register a new user
router.route("/register").post(registerUser);

// Route to log in a user
router.route("/login").post(loginUser);

// Route to log out a user (requires JWT verification)
router.route("/logout").post(verifyJWT, logoutUser);

// Route to refresh access token (does not require verification)
router.route("/refresh-token").post(refreshAccessToken);

// Route to change user password (requires JWT verification)
router.route("/change-password").post(verifyJWT, changeCurrentPassword);

// Example: Route to get user details (requires JWT verification and specific role authorization)
// Uncomment and modify as needed
// router.route("/user/:id").get(verifyJWT, authorizeRoles('Admin'), getUserById);

export default router;
