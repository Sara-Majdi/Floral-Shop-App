import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlowersMenuOpen, setIsFlowersMenuOpen] = useState(false);
  const [isFlowersDropdownOpen, setIsFlowersDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'Contact Us', href: '/contactUs' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Store Locator', href: '#storeLocator' },
    { name: 'Flower Care', href: '/flowerCare' }
  ];

  const flowerItems = [
    { name: 'Bouquet', href: '/bouquet' },
    { name: 'Vase', href: '#vase' },
    { name: 'Basket', href: '#basket' },
    { name: 'Box', href: '#box' }
  ];

  return (
    <nav className="relative">
      <div className="h-10 bg-pink-400 text-white font-semibold italic flex justify-center items-center">
      Order by 5 PM for Same-day Pickup Availability
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-300">
        <div className="flex justify-between items-center h-16 relative">
          
          {/* Hamburger Icon */}
          <div className="md:hidden flex-1 mt-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl focus:outline-none">
              <FiMenu />
            </button>
          </div>

          {/* Centered Logo */}
          <Link
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold"
          >
            Sora Floral
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Flowers Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsFlowersDropdownOpen(!isFlowersDropdownOpen)}
                className="text-gray-700 hover:text-gray-900 flex items-center"
              >
                Flowers
                <FiChevronDown className="ml-1" />
              </button>
              {isFlowersDropdownOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-md p-2 z-10">
                  {flowerItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                      onClick={() => setIsFlowersDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Menu Items */}
            {menuItems.map((item, index) => (
              <Link key={index} to={item.href} className="text-gray-700 hover:text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-30 transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link
            to="/">
            <h2 className="text-xl font-semibold">Sora Floral</h2>
          </Link>
          
          <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          {/* Flowers Menu with Submenu */}
          <button
            onClick={() => setIsFlowersMenuOpen(!isFlowersMenuOpen)}
            className="flex items-center justify-between text-gray-700 hover:text-gray-900 text-left border-b pb-2"
          >
            Flowers
            <FiChevronRight className={`${isFlowersMenuOpen ? 'transform rotate-90' : ''}`} />
          </button>
          {isFlowersMenuOpen && (
            <div className="ml-4 flex flex-col space-y-2 pl-4 mt-2">
              {flowerItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-gray-600 hover:text-gray-800 border-b pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          {/* Other Menu Items */}
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-gray-700 hover:text-gray-900 border-b pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
