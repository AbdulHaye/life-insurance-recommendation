import { Router } from 'express';
import { createRecommendation } from '../../controllers/recommendation/recommendationController';
import { authenticate } from '../../utils/auth';

const router = Router();

// Protected route for recommendation
router.post('/recommendation', authenticate, createRecommendation);

export default router;