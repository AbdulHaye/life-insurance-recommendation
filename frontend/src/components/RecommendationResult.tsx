"use client";

import type { Recommendation } from "../types";

interface RecommendationResultProps {
  recommendation: Recommendation;
}

export default function RecommendationResult({
  recommendation,
}: RecommendationResultProps) {
  const benefits = [
    "Comprehensive family protection",
    "Tax-advantaged savings",
    "Flexible premium options",
    "24/7 customer support",
  ];

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
              🏆
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Your Personalized Recommendation
              </h3>
              <p className="text-green-100">
                Tailored specifically for your needs
              </p>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
            Recommended
          </div>
        </div>
      </div>

      {/* Main Recommendation Card */}
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Details */}
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {recommendation.type}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {recommendation.explanation}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">💰</div>
                <p className="text-sm font-medium text-gray-600">Coverage</p>
                <p className="text-xl font-bold text-gray-900">
                  ${recommendation.coverage.toLocaleString()}
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">📅</div>
                <p className="text-sm font-medium text-gray-600">Term</p>
                <p className="text-xl font-bold text-gray-900">
                  {recommendation.term} years
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">📈</div>
                <p className="text-sm font-medium text-gray-600">
                  Est. Monthly
                </p>
                <p className="text-xl font-bold text-gray-900">
                  ${Math.round(recommendation.coverage * 0.001)}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-6">
            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <span>🛡️</span>
                <span>Key Benefits</span>
              </h5>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h6 className="font-semibold text-gray-900 mb-2">
                Why This Recommendation?
              </h6>
              <p className="text-sm text-gray-600 leading-relaxed">
                Based on your profile, this policy offers the optimal balance of
                coverage, affordability, and flexibility to protect your
                family's financial future.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
          <button className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-center space-x-2">
              <span>📄</span>
              <span>Download Quote</span>
            </div>
          </button>
          <button className="flex-1 py-3 px-6 border-2 border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all duration-200">
            <div className="flex items-center justify-center space-x-2">
              <span>📤</span>
              <span>Share Results</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
