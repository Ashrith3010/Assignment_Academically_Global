const Mascot = () => (
  <div className="float-animation">
    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl relative">
      <div className="absolute top-3.5 left-2.5 w-2.5 h-2.5 bg-white rounded-full"></div>
      <div className="absolute top-3.5 right-2.5 w-2.5 h-2.5 bg-white rounded-full"></div>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-5 h-1.5 bg-white rounded-full"></div>
    </div>
  </div>
);