import type { FormData, Recommendation, AuthResponse } from "../types"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"

export const login = async (data: { email: string; password: string }): Promise<AuthResponse> => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || "Login failed")
  }

  return response.json()
}

export const register = async (data: { email: string; password: string }): Promise<AuthResponse> => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || "Registration failed")
  }

  return response.json()
}

export const getRecommendation = async (
  data: FormData,
  token?: string
): Promise<Recommendation> => {
  const response = await fetch(`${API_BASE_URL}/recommendation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || "Failed to get recommendation")
  }

  return response.json()
}