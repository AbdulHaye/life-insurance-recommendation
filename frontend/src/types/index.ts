export interface Recommendation {
  type: string
  coverage: number
  term: number
  explanation: string
}

export interface FormData {
  age: number
  income: number
  dependents: number
  riskTolerance: "Low" | "Medium" | "High"
}

export interface AuthResponse {
  token: string
  user?: {
    id: string
    email: string
  }
}