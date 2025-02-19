"use client";

import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import Navbar from "../components/navbar";

const SkillsPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <section className="h-full flex items-center justify-center text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-blue-600">My Skills</h2>
          <p className="text-lg text-gray-700 mb-4">
            I possess a diverse set of skills that help me create efficient and
            impactful solutions:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center p-4 bg-white rounded shadow-md">
              <FaHtml5 className="text-red-600 text-4xl mr-2" />
              <span className="text-lg">HTML5</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded shadow-md">
              <FaCss3 className="text-blue-600 text-4xl mr-2" />
              <span className="text-lg">CSS3</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded shadow-md">
              <FaJsSquare className="text-yellow-600 text-4xl mr-2" />
              <span className="text-lg">JavaScript</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded shadow-md">
              <FaReact className="text-blue-400 text-4xl mr-2" />
              <span className="text-lg">React</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded shadow-md">
              <FaNodeJs className="text-green-600 text-4xl mr-2" />
              <span className="text-lg">Node.js</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
