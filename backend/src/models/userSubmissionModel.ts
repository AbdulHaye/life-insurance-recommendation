import { pool } from '../app';

interface UserSubmission {
  age: number;
  income: number;
  dependents: number;
  riskTolerance: string;
}

export const insertUserSubmission = async (submission: UserSubmission) => {
  const { age, income, dependents, riskTolerance } = submission;
  await pool.query(
    'INSERT INTO user_submissions (age, income, dependents, risk_tolerance) VALUES ($1, $2, $3, $4)',
    [age, income, dependents, riskTolerance]
  );
};