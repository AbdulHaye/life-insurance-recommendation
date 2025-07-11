"use client";

import { useState, useEffect } from "react";
import AuthSection from "../components/AuthSection";
import Dashboard from "../components/Dashboard";
import { getToken } from "../utils/auth";

export default function Home() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = getToken();
    setToken(storedToken);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
          <p className="text-gray-600 font-medium">
            Loading your insurance portal...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {!token ? (
        <AuthSection setToken={setToken} />
      ) : (
        <Dashboard setToken={setToken} />
      )}
    </div>
  );
}
