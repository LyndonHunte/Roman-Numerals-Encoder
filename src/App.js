// Dependencies
import React from "react";

// Styles
import "./tailwind.output.css";

import Converter from "./Converter";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Converter />
    </div>
  );
}

export default App;
