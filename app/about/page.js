"use client"; // Ensure this is a client component

import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import Navbar from "../components/navbar";

const AboutPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <section className="h-full flex items-center justify-center text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-blue-600">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            I am a passionate web developer with a love for creating dynamic and
            responsive web applications. My journey began with curiosity,
            transforming into a commitment to clean, reliable code and
            user-centered design.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I thrive in collaborative environments and utilize modern
            technologies to build engaging user experiences. Below are some
            technologies I'm proficient in:
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <div className="flex items-center p-4 bg-white rounded shadow-md">
              <FaHtml5 className="text-red-600 text-4xl mr-2" />
              <span className="text-lg">HTML</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded shadow-md">
              <FaCss3 className="text-blue-600 text-4xl mr-2" />
              <span className="text-lg">CSS</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded shadow-md">
              <FaJava className="text-yellow-600 text-4xl mr-2" />
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

export default AboutPage;
