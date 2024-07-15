import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-8 mt-5">
      <div className="container mx-auto px-8 md:px-32 flex flex-wrap justify-between text-sm md:text-md">
        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h4 className="font-bold mb-2 text-lg  sm:text-xl">Explore</h4>
          <ul>
            <li className="hover:text-gray-300 transition-colors duration-200 leading-loose">
              <a href="#">Featured Blogs</a>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-200 leading-loose">
              <a href="#">Readers Choice</a>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-200 leading-loose">
              <a href="#">Most Viewed</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h4 className="font-bold mb-2 text-lg sm:text-xl">Community</h4>
          <ul>
            <li className="hover:text-gray-300 transition-colors duration-200 leading-loose">
              <a href="#">Forum</a>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-200 leading-loose">
              <a href="#">Support</a>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-200 leading-loose">
              <a href="#">Recent</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h4 className="font-bold text-lg mb-2 sm:text-xl">Company</h4>
          <ul>
            <li className="hover:text-gray-300 transition-colors duration-200 leading-loose">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-200 leading-loose">
              <a href="#">About Us</a>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-200 leading-loose">
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4 border-t border-gray-">
        <p className="mt-2">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
