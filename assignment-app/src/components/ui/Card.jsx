import React from "react";

export const FeatureCard = ({ icon, text, color, delay }) => (
  <div className={`card-hover rounded-3xl p-6 ${color} text-white shadow-xl fade-in-up delay-${delay}`}>
    <div className="mb-3">{icon}</div>
    <p className="text-base font-normal leading-relaxed">{text}</p>
  </div>
);

export const TopicCard = ({ icon, title, delay }) => (
  <div className={`flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer fade-in-up delay-${delay}`}>
    <div className="flex-shrink-0 w-9 h-9 icon-bg-blue rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <h3 className="font-medium text-gray-900 text-sm">{title}</h3>
  </div>
);
