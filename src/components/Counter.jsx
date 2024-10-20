import React, { useState, useEffect } from 'react';
import { Minus, Plus } from 'lucide-react'; // Ensure you have this icon package or replace with another icon if not

const Counter = ({ quantity, setQuantity }) => {
  const [count, setCount] = useState(quantity || 0); // Default quantity if not provided

  useEffect(() => {
    if (setQuantity) {
      setQuantity(count);
    }
  }, [count, setQuantity]);

  return (
    <div className='flex h-[38px]'>
      {/* Minus Button */}
      <button 
        className='border border-black rounded-t-sm rounded-tr-none rounded-b-sm rounded-br-none h-full' 
        onClick={() => setCount(Math.max(count - 1, 0))}
      >
        <Minus width={20} />
      </button>

      {/* Display Count */}
      <div className='border border-black px-4 flex items-center justify-center'>
        {count}
      </div>

      {/* Plus Button */}
      <button 
        className='border border-black rounded-sm rounded-b-sm rounded-l-none h-full'
        onClick={() => setCount(count + 1)}
      >
        <Plus width={20} />
      </button>
    </div>
  );
};

export default Counter;
