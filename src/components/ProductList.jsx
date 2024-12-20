import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import BouquetA1 from '../assets/images/Bouquet/BouquetA1.jpg';
import BouquetA2 from '../assets/images/Bouquet/BouquetA2.jpg';
import BouquetA3 from '../assets/images/Bouquet/BouquetA3.jpg';
import BouquetB1 from '../assets/images/Bouquet/BouquetB1.jpg';
import BouquetB2 from '../assets/images/Bouquet/BouquetB2.jpg';
import BouquetB3 from '../assets/images/Bouquet/BouquetB3.jpg';
import BouquetB4 from '../assets/images/Bouquet/BouquetB4.jpg';
import BouquetB5 from '../assets/images/Bouquet/BouquetB5.jpg';
import BouquetC1 from '../assets/images/Bouquet/BouquetC1.jpg';
import BouquetC2 from '../assets/images/Bouquet/BouquetC2.jpg';
import BouquetC3 from '../assets/images/Bouquet/BouquetC3.jpg';
import BouquetD1 from '../assets/images/Bouquet/BouquetD1.jpg';
import BouquetD2 from '../assets/images/Bouquet/BouquetD2.jpg';
import BouquetD3 from '../assets/images/Bouquet/BouquetD3.jpg';
import BouquetE1 from '../assets/images/Bouquet/BouquetE1.jpg';
import BouquetE2 from '../assets/images/Bouquet/BouquetE2.jpg';
import BouquetE3 from '../assets/images/Bouquet/BouquetE3.jpg';
import BouquetF1 from '../assets/images/Bouquet/BouquetF1.jpg';
import BouquetF2 from '../assets/images/Bouquet/BouquetF2.jpg';
import BouquetF3 from '../assets/images/Bouquet/BouquetF3.jpg';

// Sample product data
// creating product object where each product has it's own details 
const products = [
  {
    id: 1,
    name: 'Ashley Red Rose',
    price: 'RM135.00',
    images: [BouquetA1, BouquetA2, BouquetA3],
    isBestseller: true,
    description: 'Brilliant red roses with stems of eucalyptus cinerea makes the perfect romantic bouquet. Nothing whispers love more than a red rose.',
    stemsInclude: 'Red Rose (15-20 stalks) & Eucalyptus Leaves'
  },
  {
    id: 2,
    name: 'Serena Blossom',
    price: 'RM209.00',
    images: [BouquetB1, BouquetB2, BouquetB3, BouquetB4, BouquetB5],
    isBestseller: true,
    description: 'The Serena Rose & Carnation Bouquet is a swirl of soft pinks and delicate whites, perfect for saying, "You matter." Avalanche roses, carnations, and eucalyptuses team up for a bouquet that whispers elegance with a touch of grace. A little moment of beauty, delivered.',
    stemsInclude: 'Avalanche Rose (7-9 stalks), Pink Carnation (4-5 stalks), Pink Alstroemeria, Purple Caspia, White Ping Pong, Eucalyptus Leaves'
  },
  {
    id: 3,
    name: 'Stella Black',
    price: 'RM109.00',
    images: [BouquetC1, BouquetC2, BouquetC3],
    isBestseller: true,
    description: 'Stella is a flower bouquet of soft and innocent colours paired with sprinkles of caspia enchantment. It is the perfect pick to convey a message of love and is great at making hearts full.',
    stemsInclude: 'Avalanche Rose (2-3 stalks), Pink Carnation (1-2 stalks), White Eustoma (1 stalk), Purple Caspia (1 stalk) & Eucalyptus Leaves'
  },
  {
    id: 4,
    name: 'Summer Sunflower',
    price: 'RM169.00',
    images: [BouquetD1, BouquetD2, BouquetD3],
    isBestseller: true,
    description: 'It’s a radiant burst of sunshine! The Summer Sunflower Bouquet is a perfect image of summertime with its golden sunflowers, sweet carnations, and other blooms. If you are looking for a gift for a loved one or just a little pick-me-up, this will bring joy and brighten up any day, and every summer.',
    stemsInclude: 'Sunflower (1 stalk), White Eustoma (3-4 stalks), Orange Peach Carnation (2-3 stalks), Champagne Rose (1-2 stalks), Tanecetum, Eucalyptus Leaves'
  },
  {
    id: 5,
    name: 'Adele Rose Bouquet',
    price: 'RM99.00',
    images: [BouquetE1, BouquetE2, BouquetE3],
    isBestseller: false,
    description: 'Inspired by the music of Adele, this floral arrangement is a song and dance all its own. This rose bouquet is designed using pink roses mingled with dainty carnation leaves and delicate purple caspia. ',
    stemsInclude: 'Cherry Pink Rose (2-3 stalks), White Ping Pong (1 stalk), Purple Caspia (1-2 stalks) & Carnation Leaves'
  },
  {
    id: 6,
    name: 'Madelyn White',
    price: 'RM109.00',
    images: [BouquetF1, BouquetF2, BouquetF3],
    isBestseller: true,
    description: 'Madelyn depicts the personality of someone with the softest heart. Did someone just pop into your mind? This soft blue hydrangea hand bouquet is paired with white luxurious wraps that makes the arrangement pop.',
    stemsInclude: 'Blue Hydrangea (1 stalk)'
  },
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
      <div className="w-full max-w-lg font-inter rounded-md pb-8 text-center">
          <h2 className="text-3xl font-semibold">Flower Bouquets</h2>
          <p className="text-md mt-2 text-center">
            Unique seasonal flowers hand-arranged in premium
          </p>
      </div>
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

      {/* Card UI */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-9">
        {/* going through evrey single product in the "products object" */}
        {product.map((product) => (

          // Navigate to Product Detail Page
          <Link to={`/product/${product.id}`} key={product.id}>
          
          

          <div className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 p-4">
            <div className="relative w-full h-[200px] overflow-hidden mb-2"> {/* Fixed height for the image container */}

              {/* Bestseller Tag */}
              {product.isBestseller && (
                <span className="absolute top-2 left-2 bg-pink-600 text-white px-2 py-1 text-xs rounded-full z-10">
                  Bestseller
                </span>
              )}
              <img 
                src={product.images[0]} //use the first img in the array 
                alt={product.name} 
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
              <p className="text-gray-400 font-semibold">{product.price}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>

    </div>

    
  );
};

export default ProductList;
