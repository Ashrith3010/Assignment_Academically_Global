import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3.5 px-8 rounded-2xl font-semibold text-base button-hover bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
    >
      {children}
    </button>
  );
}
