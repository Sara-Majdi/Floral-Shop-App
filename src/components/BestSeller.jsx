import React from 'react'

const BestSeller = () => {

    const products = [
        {
          id: 1,
          imageUrl: 'https://50gram.com.my/wp-content/uploads/2024/09/Blossom-Clutch-1-1024x1024.jpg.webp',
          title: 'Product 1',
          buttonText: 'Shop Flower Bouquets',
        },
        {
          id: 2,
          imageUrl: 'https://50gram.com.my/wp-content/uploads/2024/03/Pink-Serenity-1-1024x1024.jpg.webp',
          title: 'Product 2',
          buttonText: 'Shop Vase Series',
        },
        {
          id: 3,
          imageUrl: 'https://bambooflorist.com.my/cdn/shop/files/Meanders4.jpg?v=1688548945&width=720',
          title: 'Box',
          buttonText: 'Shop Box Flowers',
        },
      ];



  return (
    <div className='mt-9'>
        <div className='h-12 bg-pink-300 text-lg text-white font-bold flex justify-center items-center'>
            Categories
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
        {products.map((product) => (
          <div key={product.id} className='relative border rounded-lg overflow-hidden shadow-lg'>
            <img
              src={product.imageUrl}
              alt={product.title}
              className='w-full h-48 object-cover'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-45 text-center py-2'>
              <button className='bg-pink-500 text-white px-4 py-2 mt-2 rounded'>
                {product.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default BestSeller