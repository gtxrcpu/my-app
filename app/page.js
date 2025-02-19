import Navbar from "./components/navbar";

const Page = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* Main Content Section */}
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/path_to_your_background_image.jpg')" }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-start bg-white bg-opacity-80 rounded-lg shadow-lg">
          <div className="lg:w-1/2 md:w-1/2 w-full mb-10 md:mb-0">
            <img
              src="/profilee.jpg"
              alt="Profile"
              className="rounded object-cover w-full h-72 md:h-96 mb-6"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full text-center md:text-left md:pl-6">
            <h1 className="title-font text-4xl md:text-5xl font-bold text-gray-900">
              Next.js SaaS Boilerplate Template with Landing Page
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
              consequat varius nisi quis, posuere magna.
            </p>
            <div className="mt-6">
              <a
                href="#get-started"
                className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Get Started Now
              </a>
              <p className="mt-3 text-gray-500">
                Call us (0123) 456 - 789 for any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
