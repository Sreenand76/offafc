import React, { useState } from 'react';
import { motion } from 'framer-motion';
const FilterModal = ({ isOpen, onClose, categories, onFilter, onSort }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const handleApplyFilter = () => {
    onFilter(selectedCategory);
    onSort(selectedSort);
    onClose(); // Close the modal after applying filter
  };

  // Prevent the modal from closing when clicked inside
  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up
  };

  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}  // Initial position and opacity
          animate={{ opacity: 1, y: 0 }}  // Final position and opacity
          transition={{ duration: 0.8, ease: "easeOut" }}  // Smooth transition
        >
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}>
      <div className='bg-gray-800 opacity-50 absolute inset-0'></div> {/* Background overlay */}
      
        <div
          className='bg-gray-100 w-80 md:w-96 mx-auto p-6 rounded-lg shadow-lg transform translate-y-1/2 top-1/2'
          onClick={handleModalClick} // Prevent closing when clicking inside modal
        >
          <h2 className='text-xl font-semibold mb-4'>Filter & Sort Options</h2>

          {/* Category Filter */}
          <div className='mb-4'>
            <label htmlFor='category' className='block text-gray-700'>Category</label>
            <select
              id='category'
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='border p-2 rounded w-full'
            >
              <option value=''>All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div className='mb-4'>
            <label htmlFor='sort' className='block text-gray-700'>Sort By</label>
            <select
              id='sort'
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className='border p-2 rounded w-full'
            >
              <option value=''>Default</option>
              <option value='name_asc'>Name (A-Z)</option>
              <option value='name_desc'>Name (Z-A)</option>
              <option value='nutrition_asc'>Nutrition Grade (A-E)</option>
              <option value='nutrition_desc'>Nutrition Grade (E-A)</option>
            </select>
          </div>

          {/* Apply Button */}
          <button onClick={handleApplyFilter} className='w-full py-2 bg-blue-500 text-white rounded'>
            Apply Filters
          </button>
          
        </div>
    </div>
    </motion.div>
  );
};

export default FilterModal;

