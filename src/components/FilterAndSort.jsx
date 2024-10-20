import React, { useState } from 'react';

const FilterAndSort = () => {
  const [selectedOption, setSelectedOption] = useState('default');

  const handleSortChange = (event) => {
    setSelectedOption(event.target.value);
    // Future : Handle sorting logic here
  };

  return (
    <div className="flex justify-between items-center mt-4 mb-4">

      <select
        value={selectedOption}
        onChange={handleSortChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm"
      >
        <option value="default">Sort by</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="bestsellers">Bestsellers</option>
      </select>
    </div>
  );
};

export default FilterAndSort;
