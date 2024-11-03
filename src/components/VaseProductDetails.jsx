import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import VaseA1 from '../assets/images/Vase/VaseA1.jpg';
import VaseA2 from '../assets/images/Vase/VaseA2.jpg';
import VaseA3 from '../assets/images/Vase/VaseA3.jpg';
import VaseA4 from '../assets/images/Vase/VaseA4.jpg';
import VaseB1 from '../assets/images/Vase/VaseB1.jpg';
import VaseB2 from '../assets/images/Vase/VaseB2.jpg';
import VaseB3 from '../assets/images/Vase/VaseB3.jpg';
import VaseB4 from '../assets/images/Vase/VaseB4.jpg';
import VaseC1 from '../assets/images/Vase/VaseC1.jpg';
import VaseC2 from '../assets/images/Vase/VaseC2.jpg';
import VaseC3 from '../assets/images/Vase/VaseC3.jpg';
import VaseC4 from '../assets/images/Vase/VaseC4.jpg';
import VaseD1 from '../assets/images/Vase/VaseD1.jpg';
import VaseD2 from '../assets/images/Vase/VaseD2.jpg';
import VaseD3 from '../assets/images/Vase/VaseD3.jpg';
import VaseD4 from '../assets/images/Vase/VaseD4.jpg';
import VaseE1 from '../assets/images/Vase/VaseE1.jpg';
import VaseE2 from '../assets/images/Vase/VaseE2.jpg';
import VaseE3 from '../assets/images/Vase/VaseE3.jpg';

// Sample product data for fetching the product details based on id
const products = [
    {
        id: 11,
        name: 'Raquel',
        price: 'RM199.00',
        images: [VaseA1, VaseA2, VaseA3, VaseA4],
        isBestseller: true,
        description: 'Paying a visit to your loved ones soon? Be it for housewarming, a festivity or just because, this vase of flowers makes a great gift with its rich purple tones. Dazzle them with unforgettable dendrobium orchids. red roses with stems of eucalyptus cinerea makes the perfect romantic bouquet. Nothing whispers love more than a red rose.',
        stemsInclude: 'Dual-Tone Purple Dendobrium Orchid (15-20 stalks) & Carnation Leaf (1-2 stalks)'
      },
      {
        id: 2,
        name: 'Lola',
        price: 'RM199.00',
        images: [VaseB1, VaseB2, VaseB3, VaseB4],
        isBestseller: true,
        description: 'Dainty blooms for your sweetheart! These dendrobium orchids are arranged in a vase making it ready-to-display. They make amazing gifts as table centrepieces or a deco piece on your loved one`s desk.',
        stemsInclude: 'Lucy Pink Dendobrium Orchid (15-20 stalks) & Carnation Leaf (1-2 stalks)'
      },
      {
        id: 3,
        name: 'Marisol',
        price: 'RM199.00',
        images: [VaseC1, VaseC2, VaseC3, VaseC4],
        isBestseller: true,
        description: 'Pretty in white. Carefully arranged in a flower vase with a spiral of leaves, these breathtaking dendrobium orchids are sure to leave your loved ones with a sense of calmness & harmony - just like a walk in your fav flower garden.',
        stemsInclude: 'White Dendobrium Orchid (15-20 stalks) & Carnation Leaf (1-2 stalks)'
      },
      {
        id: 4,
        name: 'Elise',
        price: 'RM399.00',
        images: [VaseD1, VaseD2, VaseD3, VaseD4],
        isBestseller: true,
        description: 'Stunning, elegant and pretty in pink. This flower arrangement is lovingly arranged in a glass vase, finished with a leaf wrapping for a unique look. Wow your loved ones with these gorgeous orchids in your loving room.',
        stemsInclude: 'Pink Cymbidium Orchid (2 stalks), Dendobrium Orchid (4-5 stalks), Monstera Leaf (1 stalk), Iron Leaf (3-4 stalks), Five Finger Leaf (2-3 stalks) & Carnation Leaf (1 stalk)'
      },
      {
        id: 5,
        name: 'Tawney',
        price: 'RM399.00',
        images: [VaseE1, VaseE2, VaseE3],
        isBestseller: false,
        description: 'Say hi to beautiful cymbidium orchids in a flower vase! They make great gifts for any happy occasion and is versatile enough to match all interiors. Surprise your loved ones today!',
        stemsInclude: 'Green Cymbidium Orchid (2 stalks), Dendobrium Orchid (4-5 stalks), Monstera Leaf (1 stalk), Iron Leaf (3-4 stalks), Five Finger Leaf (2-3 stalks) & Carnation Leaf (1 stalk)'
      },
];

const VaseProductDetails = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = products.find((product) => product.id === parseInt(id)); // Find the product by id

// State to track the currently displayed main image
const [mainImage, setMainImage] = useState(product ? product.images[0] : null);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="p-0">
      <div className="flex flex-col items-center">

        {/* Display Main Image */}
        <div className='relative mt-4'>
          <img src={mainImage} alt={product.name} className="mb-4" />
          {product.isBestseller && (
              <span className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 text-xs rounded-full">
                Bestseller
              </span>
            )}
        </div>

          {/* Display Small Images */}
          <div className='flex space-x-4 mb-4'>
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

          <div className="text-center my-6">
            {/* Product Name */}
            <h1 className="text-4xl font-semibold text-gray-800 mb-3">{product.name}</h1>
            
            {/* Product Price */}
            <p className="text-2xl text-green-700 font-medium mb-6">{product.price}</p>
            
            {/* Add to Cart Button */}
            <div>
              <button className="bg-orange-500 text-white text-lg font-semibold px-16 py-2 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out mb-10">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Decription Section */}
          <div className='mb-8'>
            <div className="w-full px-4 md:px-8">
              <h2 className="text-lg font-bold mt-6 mb-2 text-gray-700">Description:</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
              
              <h2 className="text-lg font-bold mb-2 text-gray-700">Stems Include:</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{product.stemsInclude}</p>
              
              <h2 className="text-lg font-bold mb-2 text-gray-700">Lifespan:</h2>
              <p className="text-gray-600 leading-relaxed mb-4">4 - 5 days</p>
              
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

export default VaseProductDetails;
