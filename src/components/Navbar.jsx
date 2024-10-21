import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [ isMenuOpen, setIsMenuOpen ] =useState(false);

    const menuItems = [
        {name: 'Bouquet' , href:'/bouquet'},
        {name: 'Vase', href:'#vase'},
        {name: 'Basket', href:'#basket'},
        {name: 'Box', href:'#box'}
    ]

  return (
    <nav>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'> 
            <div className='flex justify-between items-center h-16'>
                <div>
                    <a href="/">
                        <h1 className='text-2xl font-bold'>
                            <Link to={"/"}>
                                Sora Flora
                            </Link>
                        </h1>
                    </a>
                </div>
            
            {/* Hamburger Icon */}
            <div className='md:hidden'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='txt-2xl focus:outline-none justify-end'>
                    <FiMenu />
                </button>
            </div>

            <div className='space-x-8 hidden md:flex'>
                {menuItems.map((item, index) =>(
                    <a key={index} href={item.href} className="text-gray-700 hover:text-gray-900">
                        {item.name}
                    </a>
                    ))}
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col space-y-4 mt-4 mb-4">
                        {menuItems.map((item, index) => (
                            <a key={index} href={item.href} className="text-gray-700 hover:text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>

        <div className='h-6 bg-pink-200 text-white flex justify-center items-center'>
            Flash Sale up to 50%
        </div>
    </nav>
  )
}

export default Navbar