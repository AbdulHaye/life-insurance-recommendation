-- Create users table for authentication
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create user_submissions table for storing recommendation inputs
CREATE TABLE IF NOT EXISTS user_submissions (
    id SERIAL PRIMARY KEY,
    age INT NOT NULL CHECK (
        age >= 18
        AND age <= 100
    ),
    income DECIMAL(12, 2) NOT NULL CHECK (income >= 0),
    dependents INT NOT NULL CHECK (dependents >= 0),
    risk_tolerance VARCHAR(10) NOT NULL CHECK (
        risk_tolerance IN ('Low', 'Medium', 'High')
    ),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);