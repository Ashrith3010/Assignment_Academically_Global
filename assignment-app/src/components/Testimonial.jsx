import React from "react";

export default function Testimonial() {
  return (
    <div className="scroll-section bg-white flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6 fade-in-up">
        {/* Avatar Circle */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg"></div>
        </div>

        {/* User Name */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Jessica Park
        </p>

        {/* Quote */}
        <blockquote
          className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight px-4"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          "The first time I talked with Speak, I couldn't believe it was an AI.
          It feels like it understands my motivations at a deep level."
        </blockquote>
      </div>
    </div>
  );
}

