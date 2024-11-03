import React from 'react';
import flowerCareBox from '../assets/images/FlowerCare/flowerCareBox.jpg';

const FlowerCareBox = () => {
  return (
    <div className="mt-9 px-4 lg:px-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Box Flower Care</h2>
        <p className="text-md mt-2">
          Want to keep your flowers pretty? Here are some tips and instructions from our flower experts to care for your flowers.
        </p>
      </div>
      
      <img 
        src={flowerCareBox} 
        alt="Box Flower Care" 
        className="w-full h-90 object-cover rounded-md mb-4"
      />

      <p className="text-md mt-4 text-pink-300 text-center">
        "Flowers are very delicate things, and it's important to keep them away from any heat source."
      </p>

      <ol className="list-decimal list-inside mt-4 mb-8">
        <li className="mt-6">
          <strong>Place in a cool area:</strong> 
          <p>
          Place your hat box flowers in a cool room or shaded area. Avoid direct air-conditioning, direct sunlight, extreme heat, dust, and ripening fruit. All of these conditions may make your hat box flowers wilt faster.
          </p>
        </li>
        <li className="mt-6">
          <strong>Add water daily:</strong> 
          <p>
          Add roughly 100 ml of water once daily by pouring it down the middle of your hat box into the base of the flowers. Don't worry about getting your box wet. As long as you do it gently, the water will seep into the sponge that is placed at the bottom of every hat box.
          </p>
        </li>
        <li className="mt-6">
          <strong>Remove wilting petals:</strong> 
          <p>
          When a flower begins to wilt, remove the petals or the whole flower from the hat box. Flowers bloom and wilt at different times. Removing wilted flowers will help to avoid the spread of bacteria to the other flowers.
          </p>
        </li>
        <li className="mt-6">
          <strong>Mist flowers daily:</strong> 
          <p>
          Spray or spritz your flowers with clean tap water once a day to give it additional hydration. Flowers can absorb water from places other than the base of their stems. To do this right, use a bottle with a fine mist setting and spray from 6 inches to 1 foot away from the flowers to ensure even coverage.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default FlowerCareBox;
