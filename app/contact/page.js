"use client";

import Navbar from "../components/navbar";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <section className="h-full flex items-center justify-center text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-blue-600">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            I would love to hear from you! Feel free to reach out for
            collaborations or any inquiries.
          </p>
          <form className="mt-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 w-full border border-gray-400 rounded mb-4"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 w-full border border-gray-400 rounded mb-4"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="p-2 w-full border border-gray-400 rounded mb-4"
              />
            </div>
            <button className="bg-blue-600 text-white p-2 rounded">
              Send Message
            </button>
          </form>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Or Reach Me At:
            </h3>
            <p className="flex items-center justify-center">
              <FaEnvelope className="mr-2" /> example@example.com
            </p>
            <p className="flex items-center justify-center">
              <FaPhone className="mr-2" /> +123-456-7890
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
