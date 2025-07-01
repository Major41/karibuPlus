"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Store, ArrowLeft, ArrowRight } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="w-full max-w-4xl relative z-10">
        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-green-600 mb-8 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-3xl transition-transform duration-300 hover:scale-110">
              K+
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Karibu Plus
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose how you'd like to be part of our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* User Signup */}
          <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl group animate-scale-in">
            <CardHeader className="text-center pb-4">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                I Need Services
              </CardTitle>
              <CardDescription className="text-gray-600">
                Looking for help with relocation, housing, documentation, or
                other services in Kenya
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Access to trusted service providers
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Personalized relocation support
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  24/7 emergency assistance
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Community integration support
                </div>
              </div>
              <Button
                asChild
                className="w-full h-12 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                <Link href="/signup/user">
                  Get Started as User
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Vendor Signup */}
          <Card
            className="backdrop-blur-sm bg-white/90 border-0 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl group animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader className="text-center pb-4">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Store className="w-10 h-10 text-purple-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                I Provide Services
              </CardTitle>
              <CardDescription className="text-gray-600">
                Join our network of trusted service providers and grow your
                business
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Connect with clients seeking services
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Grow your business network
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Secure payment processing
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Professional verification
                </div>
              </div>
              <Button
                asChild
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                <Link href="/signup/vendor">
                  Join as Service Provider
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Already have account */}
        <div
          className="text-center mt-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
