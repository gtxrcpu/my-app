import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";

const SkillsSection = () => {
  return (
    <section id="skills" className="p-10 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">My Skills</h2>
          <p className="text-lg text-gray-700 mb-4">
            I have developed a diverse skill set that allows me to build
            responsive and efficient web applications.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            Technologies I'm proficient in:
          </h3>
          <ul className="list-disc pl-5 mt-2">
            <li className="flex items-center mb-2">
              <FaHtml5 className="text-blue-600 mr-2" /> HTML
            </li>
            <li className="flex items-center mb-2">
              <FaCss3 className="text-blue-600 mr-2" /> CSS
            </li>
            <li className="flex items-center mb-2">
              <FaJava className="text-blue-600 mr-2" /> JavaScript
            </li>
            <li className="flex items-center mb-2">
              <FaReact className="text-blue-600 mr-2" /> React
            </li>
            <li className="flex items-center mb-2">
              <FaNodeJs className="text-blue-600 mr-2" /> Node.js
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
