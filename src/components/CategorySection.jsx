import React from 'react'
import { Link } from 'react-router-dom';

const CategorySection = () => {

    const products = [
        {
          id: 1,
          imageUrl: 'https://bloomthis.co/cdn/shop/products/bloomthis-bouquet-esther-white-1080x1080-01.jpg?v=1571562321&width=1000',
          title: 'Product 1',
          buttonText: 'Shop Flower Bouquets',
          link: '/bouquet'
        },
        {
          id: 2,
          imageUrl: 'https://bloomthis.co/cdn/shop/products/bloomthis-vase-marisol-1080x1080-01.jpg?v=1586936495&width=1000',
          title: 'Product 2',
          buttonText: 'Shop Vase Series',
          link: '/vase'
        },
        {
            id: 2,
            imageUrl: 'https://50gram.com.my/wp-content/uploads/2024/03/Pink-Serenity-1-1024x1024.jpg.webp',
            title: 'Product 2',
            buttonText: 'Shop Basket Series',
            link: '/basket'
        },
        {
            id: 4,
            imageUrl: 'https://bloomthis.co/cdn/shop/products/bloomthis-hat-box-nadine-pink-carnation-flower-box-1080x1080-05.jpg?v=1632935398&width=1000',
            title: 'Product 2',
            buttonText: 'Shop Box Series',
            link: '/box'
          },
      ];



  return (
    <div className='mt-9'>
        <div className='h-12 w-full bg-pink-300 text-lg text-white font-bold flex justify-center items-center'>
            Categories
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
        {products.map((product) => (
          <div key={product.id} className='relative border rounded-lg overflow-hidden shadow-lg'>
            <img
              src={product.imageUrl}
              alt={product.title}
              className='w-full h-60 object-cover'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-45 text-center py-2'>
              <Link to={product.link}>
                <button className='bg-pink-500 text-white px-4 py-2 mt-1 rounded'>
                  {product.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default CategorySection