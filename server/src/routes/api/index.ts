import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';
import { authenticateToken } from '../../middleware/auth.js';
import { login } from '../auth-routes.js';

const router = Router();
router.use('/login', login)
router.use('/tickets', authenticateToken, ticketRouter);
router.use('/users', userRouter);

export default router;
