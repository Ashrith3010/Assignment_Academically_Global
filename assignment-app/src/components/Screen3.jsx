import React from "react";
import { User, MessageCircle, Camera } from "lucide-react";
import { TopicCard } from "./ui/Card";
import Button from "./ui/Button";

export default function Screen3({ onNext }) {
  return (
    <div className="scroll-section bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="space-y-5">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight fade-in-up">
            Talk about anything,<br />anytime, anywhere
          </h1>
          <p className="text-base lg:text-lg text-gray-500 leading-relaxed fade-in-up delay-200">
            Speak Tutor is your on-the-go conversational partner. Practice
            speaking on any topic, anytime, no matter how niche.
          </p>
        </div>

        {/* Right content */}
        <div className="space-y-5">
          <div className="bg-white rounded-3xl p-6 shadow-xl space-y-1 fade-in-up delay-300">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Create your own
            </div>

            <TopicCard
              icon={<User className="text-blue-600" size={20} strokeWidth={2.5} />}
              title="Tourist"
              delay="400"
            />
            <div className="h-px bg-gray-100 my-1"></div>

            <TopicCard
              icon={<MessageCircle className="text-blue-600" size={20} strokeWidth={2.5} />}
              title="New friend"
              delay="450"
            />
            <div className="h-px bg-gray-100 my-1"></div>

            <TopicCard
              icon={<Camera className="text-blue-600" size={20} strokeWidth={2.5} />}
              title="Talking about the best places to grab dinner in San Francisco."
              delay="500"
            />
          </div>

          <div className="fade-in-up delay-600 pt-2">
            <Button onClick={onNext}>Start chatting</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
