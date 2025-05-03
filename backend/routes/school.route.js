import express from 'express';
import { getAllSchool, getSchoolByName, addSchoolInfo } from '../controllers/school.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
import {authorizeAdminOrSchoolAdmin} from '../middleware/checkingPermissions.js';

const router = express.Router();


router.get( '/', getAllSchool );
router.post( '/add', [verifyToken, authorizeAdminOrSchoolAdmin], addSchoolInfo );
router.get( '/:name', getSchoolByName );


export default router;