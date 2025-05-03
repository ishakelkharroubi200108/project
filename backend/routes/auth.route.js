import express from "express";
import
{
	login,
	logout,
	signup,
	signupPartner,
	verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
	google,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";


const router = express.Router();

router.get( "/check-auth", verifyToken, checkAuth );

router.post( "/signup", signup );
router.post( "/signup-partner", signupPartner );
router.post( "/login", login );
router.post( "/logout", logout );

router.post( "/verify-email", verifyEmail );
router.post( "/forgot-password", forgotPassword );

router.post("/reset-password/:token", resetPassword );


// Auth by google
router.post('/google', google );


export default router;
