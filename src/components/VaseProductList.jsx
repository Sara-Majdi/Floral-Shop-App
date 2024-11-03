import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
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

// Sample product data
// creating product object where each product has it's own details 
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

const VaseProductList = () => {
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
                <span className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 text-xs rounded-full z-10">
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
              <h3 className="font-bold text-lg mt-2">{product.name}</h3>
              <p className="text-green-600 font-semibold">{product.price}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>

    </div>

    
  );
};

export default VaseProductList;
