import React from 'react';
import flowerCareBasket from '../assets/images/FlowerCare/flowerCareBasket.jpg';

const FlowerCareBasket = () => {
  return (
    <div className="mt-9 px-4 lg:px-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Basket Flower Care</h2>
        <p className="text-md mt-2">
          Want to keep your flowers pretty? Here are some tips and instructions from our flower experts to care for your flowers.
        </p>
      </div>
      
      <img 
        src={flowerCareBasket} 
        alt="Box Flower Care" 
        className="w-full h-90 object-cover rounded-md mb-4"
      />

      <p className="text-md mt-4 text-pink-300 text-center">
        "Your handwoven basket can be used again & again - room deco, date night or even a picnic."
      </p>

      <ol className="list-decimal list-inside mt-4 mb-8">
        <li className="mt-6">
          <strong>Place in a cool & dry area:</strong> 
          <p>
          Keep your handwoven basket in a cool and dry room or shaded area. Avoid direct sunlight, extreme heat, dust and water. All of these conditions may make your basket fade and brittle.
          </p>
        </li>
        <li className="mt-6">
          <strong>Get a clean vase:</strong> 
          <p>
          The cleaner your vase, the lesser the bacteria and the longer your flowers bloom. Of course, you can also use a jar, a mug, a teapot or anything that you fancy.
          </p>
        </li>
        <li className="mt-6">
          <strong>Fill clean water:</strong> 
          <p>
          Fill the vase with cold tap water. Too much water can speed the decay of the stems, and too little will hamper hydration. We suggest filling your vase up to two-thirds full.
          </p>
        </li>
        <li className="mt-6">
          <strong>Arrange in your vase:</strong> 
          <p>
          After you've trimmed the stems and pruned the leaves, arrange them in your filled vase however you like. Here's a pro tip: place taller stems at the back and the short ones at the front. 
          </p>
        </li>
        <li className="mt-6">
          <strong>Place in a cool area:</strong> 
          <p>
          Place your flowers in a cool room or shaded area. Avoid direct air-conditioning, direct sunlight, extreme heat, dust and ripening fruit. All of these conditions may make your flowers wilt faster.
          </p>
        </li>
        <li className="mt-6">
          <strong>Change water daily:</strong> 
          <p>
          Change the water in your vase when the water becomes discoloured or murky. Dirty water will block the stems and hamper hydration. The water in your vase should always be crystal clear. Again, use cold tap water.
          </p>
        </li>
        <li className="mt-6">
          <strong>Remove wilting petals:</strong> 
          <p>
          When a flower begins to wilt, remove the petals or the whole flower from the arrangement. Flowers bloom and wilt at different times. Removing wilted flowers will help to avoid the spread of bacteria to the other flowers.
          </p>
        </li>
        <li className="mt-6">
          <strong>Mist flowers daily:</strong> 
          <p>
          Spray or spritz your flowers with clean tap water once a day to give it additional hydration. Flowers can absorb water from places other than the base of its stems. To do this right, use a bottle with a fine mist setting and spray from 6 inches to 1 foot away from the flowers to ensure an even coverage.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default FlowerCareBasket;
