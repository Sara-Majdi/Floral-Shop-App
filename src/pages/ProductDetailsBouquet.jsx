import React, { useState } from 'react';
import ShareSocialLinks from '../components/ShareSocialLinks'; 
import Counter from '../components/Counter';
import Bouquet from '../assets/images/Bouquet_01.jpg'

const ProductDetailsPage = () => {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedImg, setSelectedImg] = useState(0);

    const product = {
        productName: 'Elegant Rose Bouquet',
        productCode: 'FL12345',
        productPrice: 120.0,
        productDescription: 'A beautiful bouquet of handpicked roses, perfect for any occasion.',
        productImages: [
            Bouquet,
            'https://bambooflorist.com.my/cdn/shop/files/FrenchPoppy.jpg?v=1725509634&width=1800',
        ],
        productSizes: ['Small', 'Medium', 'Large'],
        productStock: 15,
    };

    return (
        <div className="container mx-auto py-10">
            {/* Grid for images and details */}
            <div className="grid grid-cols-1 md:grid-cols-[10%_50%_40%] gap-4">
                
                {/* Small Image Thumbnails - stacked on the left */}
                <div className="flex flex-col space-y-4">
                    {product.productImages.map((img, index) => (
                        <img
                            key={index}
                            onClick={() => setSelectedImg(index)}
                            src={img}
                            alt={`Product Image ${index + 1}`}
                            className={`cursor-pointer border 
                            ${selectedImg === index ? 'border-black' : 'border-gray-400'}`}
                        />
                    ))}
                </div>

                {/* Large Product Image */}
                <div className="px-4">
                    <img
                        src={product.productImages[selectedImg]}
                        alt="Selected Product"
                        className="object-cover w-full h-96"
                    />
                </div>

                {/* Product Details */}
                <div className="md:ml-4 mt-8 md:mt-0">
                    <h1 className="text-3xl font-semibold italic">{product.productName}</h1>
                    <p className="text-lg font-mono mt-2">SKU: {product.productCode}</p>
                    <p className="font-semibold text-2xl text-green-500 mt-4">RM {product.productPrice.toFixed(2)}</p>

                    <div className="my-4">
                        <ShareSocialLinks /> {/* Social sharing component */}
                    </div>

                    <h2 className="text-lg font-medium">CHOOSE YOUR SIZE:</h2>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                        {product.productSizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`border py-2 rounded-lg font-semibold transition 
                                ${selectedSize === size ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    <p className="my-8 text-lg">{product.productDescription}</p>

                    {product.productStock > 0 && product.productStock < 11 && (
                        <p className="text-red-500">Hurry! Only {product.productStock} left in stock.</p>
                    )}

                    {/* Quantity and Buy Button */}
                    <div className="flex justify-between items-center mt-8">
                        <Counter quantity={1} /> {/* Assuming you're using a counter component */}

                        <button className="bg-pink-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-pink-700 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
