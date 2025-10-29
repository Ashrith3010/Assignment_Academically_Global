import React, { useRef, useState, useEffect } from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Testimonial from "./Testimonial";

export default function OnboardingFlow() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const scrollTo = (index) => {
    const section = containerRef.current.children[index];
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const next = () => scrollTo(Math.min(current + 1, 4));

  useEffect(() => {
    const handleScroll = () => {
      const pos = containerRef.current.scrollTop;
      const winH = window.innerHeight;
      setCurrent(Math.round(pos / winH));
    };
    const el = containerRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={containerRef} className="scroll-container">
        <Screen1 onNext={next} />
        <Screen2 onNext={next} />
        <Screen3 onNext={next} />
        <Screen4 onNext={next} />
        <Testimonial />
      </div>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        {[0, 1, 2, 3, 4].map((n) => (
          <button
            key={n}
            onClick={() => scrollTo(n)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === n ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400 w-1.5"
            }`}
          />
        ))}
      </div>
    </>
  );
}
