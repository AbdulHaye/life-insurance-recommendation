"use client";

import { useState } from "react";
import AuthForm from "./AuthForm";

interface AuthSectionProps {
  setToken: (token: string) => void;
}

export default function AuthSection({ setToken }: AuthSectionProps) {
  const [error, setError] = useState<string | null>(null);

  const features = [
    {
      title: "Secure & Trusted",
      description: "Bank-level security for your personal information",
      icon: "🛡️",
    },
    {
      title: "Smart Recommendations",
      description: "AI-powered analysis for optimal coverage",
      icon: "📈",
    },
    {
      title: "Family Protection",
      description: "Comprehensive coverage for your loved ones",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Expert Guidance",
      description: "Professional advice from certified specialists",
      icon: "🏆",
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl">
                🛡️
              </div>
              <div>
                <h1 className="text-3xl font-bold">InsureWise</h1>
                <p className="text-blue-200">
                  Professional Insurance Solutions
                </p>
              </div>
            </div>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Protect Your
              <span className="block text-yellow-300">Future Today</span>
            </h2>

            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Get personalized life insurance recommendations powered by
              advanced analytics. Secure your family's financial future with
              confidence.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                >
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-blue-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="text-center mb-8 lg:hidden">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                🛡️
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">InsureWise</h1>
                <p className="text-gray-600">
                  Professional Insurance Solutions
                </p>
              </div>
            </div>
          </div>

          <AuthForm setToken={setToken} setError={setError} />

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-700 text-center font-medium">{error}</p>
            </div>
          )}

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Fast</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
