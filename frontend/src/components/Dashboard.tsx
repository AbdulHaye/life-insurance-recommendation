"use client";

import { useState } from "react";
import RecommendationForm from "./RecommendationForm";
import type { Recommendation } from "../types";

interface DashboardProps {
  setToken: (token: string | null) => void;
}

export default function Dashboard({ setToken }: DashboardProps) {
  const [error, setError] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(
    null
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setRecommendation(null);
    setError(null);
  };

  const stats = [
    { label: "Policies Analyzed", value: "10,000+", icon: "📈" },
    { label: "Families Protected", value: "5,000+", icon: "🛡️" },
    { label: "Average Savings", value: "$2,400", icon: "💰" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                🛡️
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">InsureWise</h1>
                <p className="text-xs text-gray-500">Professional Dashboard</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                🔔
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                ⚙️
              </button>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                🚪
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">
                Welcome to Your Insurance Hub
              </h2>
              <p className="text-blue-100 text-lg">
                Get personalized life insurance recommendations tailored to your
                unique needs
              </p>
            </div>
            {/* Decorative circles */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white bg-opacity-5 rounded-full"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RecommendationForm
              setRecommendation={setRecommendation}
              setError={setError}
            />
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm h-fit">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Why Choose InsureWise?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">
                      AI-Powered Analysis
                    </p>
                    <p className="text-sm text-gray-600">
                      Advanced algorithms analyze your profile for optimal
                      recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Instant Results</p>
                    <p className="text-sm text-gray-600">
                      Get personalized recommendations in seconds, not days
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Expert Guidance</p>
                    <p className="text-sm text-gray-600">
                      Professional insights from certified insurance specialists
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}
      </main>
    </div>
  );
}
