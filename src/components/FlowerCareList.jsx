import React from 'react';
import { Link } from 'react-router-dom';
import flowerCareBouquet from '../assets/images/FlowerCare/flowerCareBouquet.jpg';
import flowerCareVase from '../assets/images/FlowerCare/flowerCareVase.jpg';
import flowerCareBox from '../assets/images/FlowerCare/flowerCareBox.jpg';
import flowerCareBasket from '../assets/images/FlowerCare/flowerCareBasket.jpg';

const cardContent = [
  {
    title: "Bouquet",
    description: "Flower bouquets in pretty wraps",
    image: flowerCareBouquet,
    link: "/flowerCareBouquet"
  },
  {
    title: "Vase",
    description: "Flowers arrangements in gorgeous vases",
    image: flowerCareVase,
    link: "/flowerCareVase"
  },
  {
    title: "Basket",
    description: "Flower arrangements in handwoven baskets",
    image: flowerCareBasket,
    link: "/flowerCareBasket"
  },
  {
    title: "Box",
    description: "Flower arrangements in bespoke hat boxes",
    image: flowerCareBox,
    link: "/flowerCareBox"
  },
];

const FlowerCareList = () => {
  return (
    <div className="mt-9 mb-9 px-4 lg:px-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Flower & Product Care</h2>
        <p className="text-md mt-2">
          At Sora Floral, we pride ourselves on getting the freshest flowers from around the world and crafting them into gorgeous gifts just for you. Once you receive a Sora, take good care of it and you'll enjoy your flowers for days and (for certain products) even months to come.
        </p>
        <p className="text-md mt-6">Here's some flower care tips for our different products.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {cardContent.map((item, index) => (
          <div 
            key={index} 
            className="p-4 border rounded-md shadow-md hover:bg-pink-100 transition duration-200 ease-in-out"
          >
            <Link to={item.link}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-60 object-cover rounded-md mb-4"
              />
            </Link>
            <h3 className="text-xl font-bold text-center">{item.title}</h3>
            <p className="text-center mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerCareList;
