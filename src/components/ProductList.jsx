import React from 'react';
import Bouquet from '../assets/images/Bouquet_01.jpg'

// Sample product data
// creating product object where each product has it's own details 
const products = [
  {
    id: 1,
    name: 'Roasted Espresso',
    price: 'RM89.00',
    image: Bouquet,
    isBestseller: true
  },
  {
    id: 2,
    name: 'Sora Pink Tulip',
    price: 'RM89.00',
    image: Bouquet,
    isBestseller: true
  },
  {
    id: 3,
    name: 'Roasted Espresso',
    price: 'RM89.00',
    image: Bouquet,
    isBestseller: false
  },
  {
    id: 4,
    name: 'Sora Pink Tulip',
    price: 'RM89.00',
    image: Bouquet,
    isBestseller: false
  },
  {
    id: 5,
    name: 'Roasted Espresso',
    price: 'RM89.00',
    image: Bouquet,
    isBestseller: false
  },
  {
    id: 6,
    name: 'Sora Pink Tulip',
    price: 'RM89.00',
    image: Bouquet,
    isBestseller: false
  }
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-9">
      {/* going through evrey single product in the "products object" */}
      {products.map((product) => (
        <a 
          href="#" 
          key={product.id} 
          className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 p-4"
        >
          <div className="w-full h-[200px] overflow-hidden mb-2"> {/* Fixed height for the image container */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
          <div>
            {product.isBestseller && (
              <span className="bg-orange-600 text-white px-2 py-1 text-xs rounded-full">
                Bestseller
              </span>
            )}
            <h3 className="font-bold text-lg mt-2">{product.name}</h3>
            <p className="text-green-600 font-semibold">{product.price}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProductList;
