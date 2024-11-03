import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
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

// Sample product data for fetching the product details based on id
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

const BouquetProductDetails = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = products.find((product) => product.id === parseInt(id)); // Find the product by id

// State to track the currently displayed main image
const [mainImage, setMainImage] = useState(product ? product.images[0] : null);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="p-0">
      <div className="flex flex-col items-left">

        {/* Display Main Image */}
        <div className='relative mt-4'>
          <img src={mainImage} alt={product.name} className="mb-4" />
          {product.isBestseller && (
              <span className="absolute top-2 left-2 bg-pink-600 text-white px-4 py-2 text-xs font-semibold rounded-full">
                Bestseller
              </span>
            )}
        </div>

          {/* Display Small Images */}
          <div className='flex space-x-4 mb-2 px-4'>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="w-10 h-10 cursor-pointer"
                onClick={() => setMainImage(image)} // Set main image on click
              />
            ))}
          </div>

          <div className="text-left my-6 px-4">
            <div>
              {/* Product Name */}
              <h1 className="text-3xl font-semibold text-gray-800 mb-1">{product.name}</h1>

              <p className="text-md text-gray-400 font-medium mb-26">Self-Pickup</p>

              <div className="flex items-center justify-between mb-6">
                
                {/* Product Price */}
                <p className="text-2xl text-gray-600 font-medium">{product.price}</p>

                {/* Add to Cart Button */}
                <button className="bg-pink-600 text-white text-md font-semibold px-8 py-2 rounded-full shadow-lg">
                  ADD TO CART
                </button>
                
              </div>
              <hr className='border-t-2 border-gray-300 my-12 w-full'></hr>
            </div>
          </div>

          {/* Decription Section */}
          <div className='mb-8 mt-[-38px]'>
            <div className="w-full px-4 md:px-8">
              <h2 className="text-lg font-bold mt-6 mb-2 text-gray-700">Description:</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
              
              <h2 className="text-lg font-bold mb-2 text-gray-700">Stems Include:</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{product.stemsInclude}</p>
              
              <h2 className="text-lg font-bold mb-2 text-gray-700">Lifespan:</h2>
              <p className="text-gray-600 leading-relaxed mb-4">2 - 4 days</p>
              
              <h2 className="text-lg font-bold mb-2 text-gray-700">Comes With:</h2>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4">
                <li>Free Message Card</li>
                <li>Free Delivery</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

export default BouquetProductDetails;
