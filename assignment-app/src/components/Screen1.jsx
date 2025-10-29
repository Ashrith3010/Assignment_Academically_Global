import React from "react";
import { Heart, List } from "lucide-react";
import { FeatureCard } from "./ui/Card";
import Button from "./ui/Button";
import Mascot from "./ui/Button";

export default function Screen1({ onNext }) {
  return (
    <div className="scroll-section flex items-center justify-center px-6 py-12 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight fade-in-up">
            Stay motivated and<br />reach your goals
          </h1>
          <p className="text-base lg:text-lg text-gray-500 leading-relaxed fade-in-up delay-200">
            Speak Tutor keeps you motivated and accountable to achieve your goals.
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex justify-center mb-6 fade-in-up delay-100">
            <Mascot />
          </div>
          <div className="grid gap-3.5">
            <FeatureCard
              icon={<Heart size={28} strokeWidth={2.5} />}
              text="You're interested in traveling, and exploring new cultures."
              color="bg-gradient-to-br from-pink-500 to-pink-600"
              delay="300"
            />
            <FeatureCard
              icon={<List size={28} strokeWidth={2.5} />}
              text="We've created unique lessons and conversations based on those goals."
              color="bg-gradient-to-br from-blue-600 to-blue-700"
              delay="400"
            />
          </div>
          <div className="fade-in-up delay-500 pt-2">
            <Button onClick={onNext}>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
