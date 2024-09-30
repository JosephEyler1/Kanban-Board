import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
const router = Router();
// Public routes (authentication not required)
router.use('/auth', authRoutes);
// Protected API routes (authentication required)
router.use('/api', apiRoutes);
export default router;
