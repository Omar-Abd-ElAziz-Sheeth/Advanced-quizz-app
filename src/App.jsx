import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Suprise from "./components/Suprise";
const App = () => {
  return (
    <BrowserRouter>
      <div className=" bg-linear-to-b from-cyan-500 to-blue-500  min-h-screen flex items-center flex-col">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/suprise" element={<Suprise />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
