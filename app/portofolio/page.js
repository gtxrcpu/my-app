"use client";

import Navbar from "../components/navbar";

const PortfolioPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <section className="h-full flex items-center justify-center text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-blue-600">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Here are some projects I have worked on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="h-48 bg-blue-300 rounded shadow-md flex items-center justify-center font-bold text-white">
              Project 1
            </div>
            <div className="h-48 bg-green-300 rounded shadow-md flex items-center justify-center font-bold text-white">
              Project 2
            </div>
            <div className="h-48 bg-orange-300 rounded shadow-md flex items-center justify-center font-bold text-white">
              Project 3
            </div>
            <div className="h-48 bg-purple-300 rounded shadow-md flex items-center justify-center font-bold text-white">
              Project 4
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
