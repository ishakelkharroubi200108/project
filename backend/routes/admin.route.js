import express from 'express';
import authorizeAdmin from '../middleware/checkingPermissions.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { addCommision } from '../controllers/school.controller.js';




const router = express.Router();

router.post( "/add/commission-rate", [verifyToken, authorizeAdmin], addCommision );


export default router;