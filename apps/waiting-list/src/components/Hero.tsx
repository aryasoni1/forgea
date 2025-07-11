"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        {/* Logo Placeholder */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
            <span className="text-white text-2xl font-bold">F</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Forgea1
          </h1>
        </div>

        {/* Tagline */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8 max-w-3xl mx-auto leading-tight">
          Build like a real engineer.{" "}
          <span className="text-blue-600">Onboard today.</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Get hired by building real-world projects that companies actually
          need. No more tutorial hell. Start building production-ready
          applications today.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => {
            document.getElementById("waitlist-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Join Early Access
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
