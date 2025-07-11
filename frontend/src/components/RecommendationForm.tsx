"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { getRecommendation } from "../utils/api";
import type { Recommendation, FormData } from "../types";
import RecommendationResult from "./RecommendationResult";

interface RecommendationFormProps {
  setRecommendation: (recommendation: Recommendation | null) => void;
  setError: (error: string | null) => void;
}

export default function RecommendationForm({
  setRecommendation,
  setError,
}: RecommendationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const [localRecommendation, setLocalRecommendation] =
    useState<Recommendation | null>(null);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const recommendation = await getRecommendation(data);
      setLocalRecommendation(recommendation);
      setRecommendation(recommendation);
    } catch (err) {
      setError((err as Error).message || "Failed to fetch recommendation");
    } finally {
      setLoading(false);
    }
  };

  const formFields = [
    {
      name: "age" as keyof FormData,
      label: "Age",
      icon: "🎂",
      type: "number",
      placeholder: "Enter your age",
      validation: {
        required: "Age is required",
        min: { value: 18, message: "Age must be at least 18" },
        max: { value: 100, message: "Age must be at most 100" },
        valueAsNumber: true,
      },
    },
    {
      name: "income" as keyof FormData,
      label: "Annual Income ($)",
      icon: "💰",
      type: "number",
      placeholder: "Enter your annual income",
      validation: {
        required: "Income is required",
        min: { value: 0, message: "Income must be positive" },
        valueAsNumber: true,
      },
    },
    {
      name: "dependents" as keyof FormData,
      label: "Number of Dependents",
      icon: "👨‍👩‍👧‍👦",
      type: "number",
      placeholder: "Enter number of dependents",
      validation: {
        required: "Dependents is required",
        min: { value: 0, message: "Dependents must be non-negative" },
        valueAsNumber: true,
      },
    },
  ];

  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-xl">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-2xl">
            ✨
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Get Your Recommendation
            </h2>
            <p className="text-gray-600">
              Tell us about yourself to receive personalized insurance advice
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700"
              >
                <div className="flex items-center space-x-2">
                  <span>{field.icon}</span>
                  <span>{field.label}</span>
                </div>
              </label>
              <input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                {...register(field.name, field.validation)}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm font-medium">
                  {errors[field.name]?.message}
                </p>
              )}
            </div>
          ))}

          <div className="space-y-2 md:col-span-2">
            <label
              htmlFor="riskTolerance"
              className="block text-sm font-medium text-gray-700"
            >
              <div className="flex items-center space-x-2">
                <span>📈</span>
                <span>Risk Tolerance</span>
              </div>
            </label>
            <select
              id="riskTolerance"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              {...register("riskTolerance", {
                required: "Risk tolerance is required",
              })}
            >
              <option value="">Select your risk tolerance</option>
              <option value="Low">Low - Conservative approach</option>
              <option value="Medium">Medium - Balanced strategy</option>
              <option value="High">High - Aggressive growth</option>
            </select>
            {errors.riskTolerance && (
              <p className="text-red-500 text-sm font-medium">
                {errors.riskTolerance.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Analyzing Your Profile...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-3">
              <span>✨</span>
              <span>Get My Recommendation</span>
            </div>
          )}
        </button>
      </form>

      {localRecommendation && (
        <div className="mt-8">
          <RecommendationResult recommendation={localRecommendation} />
        </div>
      )}
    </div>
  );
}
