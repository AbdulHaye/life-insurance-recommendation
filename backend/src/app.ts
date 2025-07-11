import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { Pool } from 'pg';
import recommendationRoutes from './routes/recommendation/recommendationRoutes';
import authRoutes from './routes/auth/authRoutes';

// Load environment variables
dotenv.config();

// Initialize Express app
const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting (security feature)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per IP
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

// PostgreSQL connection
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Routes
app.use('/api', recommendationRoutes);
app.use('/', authRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

export default app;