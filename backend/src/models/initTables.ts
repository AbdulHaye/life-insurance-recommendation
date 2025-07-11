import { pool } from '../app';

export async function createUserTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `);
}

export async function createRecommendationTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS user_submissions (
      id SERIAL PRIMARY KEY,
      age INTEGER NOT NULL,
      income INTEGER NOT NULL,
      dependents INTEGER NOT NULL,
      risk_tolerance VARCHAR(20) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

export async function initTables() {
  await createUserTable();
  await createRecommendationTable();
}