"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { ArrowRight, Shield, Lock, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const user = useSelector((state: RootState) => state.auth);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Secure Authentication Solution
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A modern authentication system built with Firebase, Next.js, and
              Redux
            </p>
          </div>

          {!user.email && (
            <div className="flex justify-center gap-4">
              <Link
                href="/signup"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
                  hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium
                  transform transition-all duration-200 hover:scale-105 flex items-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/login"
                className="px-6 py-3 text-gray-300 hover:text-white border border-gray-700 
                  hover:border-gray-600 rounded-lg font-medium transition-all duration-200"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative group">
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 
              group-hover:opacity-50 transition duration-1000"
            ></div>
            <div className="relative p-6 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Secure Authentication
              </h3>
              <p className="text-gray-400">
                Industry-standard security protocols to keep your data safe and
                protected
              </p>
            </div>
          </div>

          <div className="relative group">
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-25 
              group-hover:opacity-50 transition duration-1000"
            ></div>
            <div className="relative p-6 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Fast & Reliable
              </h3>
              <p className="text-gray-400">
                Lightning-fast authentication powered by Firebase and Next.js
              </p>
            </div>
          </div>

          <div className="relative group md:col-span-2 lg:col-span-1">
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 
              group-hover:opacity-50 transition duration-1000"
            ></div>
            <div className="relative p-6 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Multiple Auth Methods
              </h3>
              <p className="text-gray-400">
                Support for email/password and social authentication providers
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Users", value: "10K+" },
            { label: "Authentication Rate", value: "99.9%" },
            { label: "Response Time", value: "<100ms" },
            { label: "Uptime", value: "99.99%" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {stat.value}
              </div>
              <div className="mt-2 text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {!user.email && (
          <div className="mt-24 text-center">
            <div className="relative group inline-block">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur 
                opacity-75 group-hover:opacity-100 transition duration-1000"
              ></div>
              <Link
                href="/signup"
                className="relative px-8 py-4 bg-gray-800 rounded-lg inline-block text-white font-medium 
                  hover:bg-gray-700 transition-all duration-200"
              >
                Start Securing Your App Today
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
