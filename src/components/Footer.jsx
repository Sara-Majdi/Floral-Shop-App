import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">SoRa Flora</h2>
            <p className="text-sm">Your one-stop shop for beautiful flowers.</p>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="mr-6">
              <h3 className="font-semibold">Links</h3>
              <ul>
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="/contactUs" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="/faqs" className="text-gray-400 hover:text-white">FAQs</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Store Locator</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mt-2 mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-gray-400 hover:text-white" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-gray-400 hover:text-white" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-gray-400 hover:text-white" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} SoRa Flora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
