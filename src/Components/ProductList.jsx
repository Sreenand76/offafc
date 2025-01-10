import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="max-w-[100vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product, index) => (
        <motion.div
          key={product.id}  // Unique key for each product
          initial={{ opacity: 0, y: 20, scale: 0.9 }}  // Initial state: slightly smaller and transparent
          animate={{
            opacity: 1,          // Final opacity
            y: 0,                // Final position (y-axis)
            scale: 1,            // Final scale (normal size)
          }} 
          transition={{
            opacity: { duration: 0.3 },
            y: { type: "spring", stiffness: 100, damping: 25 }, // Smooth spring effect for vertical movement
            scale: { duration: 0.4, ease: "easeOut" },           // Scaling to make it pop in
          }}
          whileHover={{
            scale: 1.05,        // Slightly enlarge the card on hover
            transition: { duration: 0.3 },
          }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;





