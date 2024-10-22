import React, { useState }  from 'react';
import Bouquet from '../assets/images/Bouquet_01.jpg'
import { div } from 'framer-motion/client';

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
    price: 'RM69.00',
    image: Bouquet,
    isBestseller: false
  },
  {
    id: 3,
    name: 'Roasted Espresso',
    price: 'RM59.00',
    image: Bouquet,
    isBestseller: false
  },
  {
    id: 4,
    name: 'Sora Pink Tulip',
    price: 'RM79.00',
    image: Bouquet,
    isBestseller: true
  },
  {
    id: 5,
    name: 'Roasted Espresso',
    price: 'RM39.00',
    image: Bouquet,
    isBestseller: false
  },
  {
    id: 6,
    name: 'Sora Pink Tulip',
    price: 'RM29.00',
    image: Bouquet,
    isBestseller: false
  }
];

const ProductList = () => {
  //state setup
  const [selectedOption, setSelectedOption] = useState('default');
  const [product, setProduct] = useState(products);


  //handles changes every time user selects new sorting option from dropdown
  const handleSortChange = (event) => {
    setSelectedOption(event.target.value);

    //Creating a copy of "Products" to sort
    let sortedProducts = [...product];

    // HOW IT WORKS?
    if (event.target.value === 'price-low-high') {
      //sort() method compares each product's price
      //"price" values are strings (eg, "RM79.00")
      //"replace()" method remove the "RM" part
      //"parseFloat()" converts the remaining string to a number (eg, 79.00)
      // the products are sorted by comparing their prices in ascending order
      sortedProducts.sort((a, b) => parseFloat(a.price.replace('RM', '')) - parseFloat(b.price.replace('RM', ''))); // Sort by price: Low to High
    } else if (event.target.value === 'price-high-low') {
      sortedProducts.sort((a, b) => parseFloat(b.price.replace('RM', '')) - parseFloat(a.price.replace('RM', ''))); // Sort by price: High to Low
    } else if (event.target.value === 'bestsellers') {
      //filter() method is used to return new array contains "isBestseller" is "true"
      sortedProducts = products.filter((product) => product.isBestseller); // Filter bestsellers
    } else {
      // Reset to original product list (the original list of products are copied into "sortedProducts")
      sortedProducts = [...products]; 
    }

    setProduct(sortedProducts); // Update the state with the sorted/filtered products
  };

  return (
    <div className='p-4'>
      <div >
        <h1 className=''>Sort By:</h1>
        <div className="flex justify-between items-center mt-4 mb-4">

        {/* renders dropdown list of sorting option */}
        <select
          value={selectedOption} //ensure dropdown show correct and the current selected option
          onChange={handleSortChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        >
          <option value="default">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="bestsellers">Bestsellers</option>
        </select>
        </div>
      </div>


      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-9">
        {/* going through evrey single product in the "products object" */}
        {product.map((product) => (
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

    </div>

    
  );
};

export default ProductList;
