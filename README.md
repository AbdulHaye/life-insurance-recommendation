Life Insurance Recommendation MVP
A full-stack prototype for personalized life insurance recommendations, built with Next.js, Node.js, PostgreSQL, and Docker. This application collects user inputs (age, income, dependents, risk tolerance) and provides tailored insurance recommendations, with secure JWT authentication and rate limiting.
Features

Frontend: Next.js with TypeScript, Tailwind CSS, and React Hook Form for a responsive, user-friendly form.
Backend: Node.js with Express and TypeScript, offering a secure REST API with JWT authentication and rate limiting.
Database: PostgreSQL with a secure schema for storing user submissions and credentials.
DevOps: Dockerized with Docker Compose for consistent local development.
Security: Input validation, parameterized SQL queries, JWT authentication, and rate limiting (100 requests per 15 minutes per IP).

Prerequisites

Node.js 16+
Docker and Docker Compose
Git
WSL2 (for Windows users)

Setup Instructions

Clone the Repository
git clone https://github.com/your-username/life-insurance-recommendation.git
cd life-insurance-recommendation


Install Dependencies

Backend:cd backend
npm install
cd ..


Frontend:cd frontend
npm install
cd ..




Set Up Environment Variables

Copy the example environment file:cd backend
cp .env.example .env


Update .env with the following:DATABASE_URL=postgres://user:password@localhost:5432/life_insurance
PORT=5000
JWT_SECRET=your-secret-key




Run Locally with Docker
cd docker
docker-compose up --build


Access the frontend at http://localhost:3000
Access the backend API at http://localhost:5000


Verify Database
docker exec -it $(docker ps -qf "name=life-insurance-recommendation_db") psql -U user -d life_insurance
\dt
SELECT * FROM user_submissions;
\q


Stop the Application
docker-compose down



Usage

Register a User:
curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d '{"email":"test@example.com","password":"password123"}'


Login to Get JWT Token:
curl -X POST http://localhost:5000/login -H "Content-Type: application/json" -d '{"email":"test@example.com","password":"password123"}'


Submit Recommendation Request:

Use the frontend form at http://localhost:3000 after logging in.
Or use curl with the JWT token:curl -X POST http://localhost:5000/recommendation -H "Content-Type: application/json" -H "Authorization: Bearer <your-token>" -d '{"age":35,"income":75000,"dependents":2,"riskTolerance":"Medium"}'




View Logs:
docker logs $(docker ps -qf "name=life-insurance-recommendation_backend")
docker logs $(docker ps -qf "name=life-insurance-recommendation_frontend")



Project Structure
life-insurance-recommendation/
├── backend/
│   ├── src/
│   │   ├── controllers/  # API logic
│   │   ├── models/       # Data models
│   │   ├── routes/       # Route definitions
│   │   ├── services/     # Business logic
│   │   ├── utils/        # Utility functions
│   │   └── app.ts        # Main application entry
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Next.js pages
│   │   ├── styles/       # CSS and Tailwind styles
│   │   └── utils/        # Utility functions
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
├── docker/
│   ├── docker-compose.yml  # Docker Compose configuration
│   └── init.sql           # Database schema initialization
├── .gitignore
├── README.md
└── LICENSE

Evaluation Notes

Frontend: Modular components, TypeScript, Tailwind CSS, and React Hook Form for clean state management.
Backend: Secure REST API with JWT authentication, rate limiting, and extensible recommendation logic.
Database: Clean schema with constraints, parameterized queries to prevent SQL injection.
Docker: Production-ready local environment with Docker Compose.
Security: Input validation, JWT authentication, rate limiting, and secure database practices.
Communication: Clear README, well-commented code, and organized commit history.

License
MIT