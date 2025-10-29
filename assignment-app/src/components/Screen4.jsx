import React from "react";

export default function Screen4() {
  return (
    <div className="scroll-section bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="space-y-5">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight fade-in-up">
            Build a relationship<br />with your tutor
          </h1>
          <p className="text-base lg:text-lg text-gray-500 leading-relaxed fade-in-up delay-200">
            Speak Tutor designs a personalized curriculum as unique as you are by
            getting to know you on a surprisingly deep level.
          </p>
        </div>

        {/* Right Section (Phone UI) */}
        <div className="flex justify-center fade-in-up delay-300">
          <div className="relative">
            {/* iPhone Mockup */}
            <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem] shadow-2xl p-3 border-4 border-gray-900">
              <div className="w-full h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-[2.3rem] p-5 overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-gray-900">9:41</span>
                  <div className="flex items-center gap-1 text-gray-800">
                    <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                      <rect x="0.5" y="0.5" width="18" height="11" rx="2" stroke="currentColor" strokeOpacity="0.35"/>
                      <rect x="2" y="2" width="14" height="8" rx="1" fill="currentColor"/>
                      <rect x="20" y="4" width="3" height="4" rx="1" fill="currentColor" fillOpacity="0.4"/>
                    </svg>
                  </div>
                </div>

                {/* Notification */}
                <div className="bg-white rounded-2xl p-3.5 shadow-lg mb-3 scale-in">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                        <rect x="2" y="1" width="2" height="3" rx="1" />
                        <rect x="8" y="1" width="2" height="3" rx="1" />
                        <rect x="2" y="8" width="2" height="3" rx="1" />
                        <rect x="8" y="8" width="2" height="3" rx="1" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-0.5">
                        <span className="font-semibold text-xs text-gray-900">Speak</span>
                        <span className="text-[10px] text-gray-500">now</span>
                      </div>
                      <p className="text-[11px] text-gray-700 leading-snug">
                        Hey Audrey, your trip to Mexico is in 6 days! Let's practice some vocabulary for your trip!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lesson Card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-3.5 shadow-lg scale-in delay-200">
                  <div className="text-white text-[10px] font-bold mb-1.5 opacity-90 tracking-wide">
                    MADE FOR YOU
                  </div>
                  <p className="text-white font-semibold text-xs leading-snug">
                    Phrases to go through customs and air travel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
