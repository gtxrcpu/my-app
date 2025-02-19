"use client";

import { FaCode, FaClipboardList, FaTasks } from "react-icons/fa"; // Updated icon imports
import Navbar from "../components/navbar";

const ServicesPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <section className="h-full flex items-center justify-center text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-blue-600">My Services</h2>
          <p className="text-lg text-gray-700 mb-4">
            I offer a variety of services to help you succeed in your project:
          </p>
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-6">
            <div className="flex items-center p-4 bg-white rounded shadow-md">
              <FaCode className="text-blue-600 text-4xl mr-2" />
              <span className="text-lg">Web Development</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded shadow-md">
              <FaClipboardList className="text-green-600 text-4xl mr-2" />
              <span className="text-lg">UI/UX Design</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded shadow-md">
              <FaTasks className="text-orange-600 text-4xl mr-2" />
              <span className="text-lg">Project Management</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
