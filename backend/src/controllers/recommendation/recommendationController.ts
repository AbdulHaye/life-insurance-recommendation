


import { Request, Response } from 'express';
import { getRecommendation } from '../../services/recommendationService';
import { insertUserSubmission } from '../../models/userSubmissionModel';

// Define UserData interface
interface UserData {
  age: number;
  income: number;
  dependents: number;
  riskTolerance: string;
}

export const createRecommendation = async (req: Request, res: Response) => {
  const { age, income, dependents, riskTolerance } = req.body as UserData;

  console.log('Received data:', { age, income, dependents, riskTolerance });

  // Input validation
// ...existing code...
if (
  age === undefined ||
  income === undefined ||
  dependents === undefined ||
  riskTolerance === undefined
) {
  return res.status(400).json({ error: 'All fields are required' });
}
// ...existing code...
  if (typeof age !== 'number' || age < 18 || age > 100) {
    return res.status(400).json({ error: 'Age must be between 18 and 100' });
  }
  if (typeof income !== 'number' || income < 0) {
    return res.status(400).json({ error: 'Income must be positive' });
  }
  if (typeof dependents !== 'number' || dependents < 0) {
    return res.status(400).json({ error: 'Dependents must be non-negative' });
  }
  if (!['Low', 'Medium', 'High'].includes(riskTolerance)) {
    return res.status(400).json({ error: 'Invalid risk tolerance value' });
  }

  try {
    // Store submission in database
    await insertUserSubmission({ age, income, dependents, riskTolerance });

    // Generate recommendation
    const recommendation = getRecommendation({ age, income, dependents, riskTolerance });
    res.json(recommendation);
  } catch (err) {
    console.error('Error in createRecommendation:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};