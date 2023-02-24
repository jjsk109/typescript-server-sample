import express from 'express';
import { SampleController } from '../controllers/SampleController';
import { SampleMiddleware } from '../middleware/SampleMiddleware';

const router = express.Router();

router.get('/', SampleMiddleware.sampleMiddleware, SampleController.getSample);

export default router;
