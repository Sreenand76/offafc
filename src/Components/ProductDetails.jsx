import React from 'react';

const ProductDetail = ({ product }) => (
  <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col md:flex-row mt-10 min-h-60vh">
    {/* Image Section */}
    <div className="md:w-2/3 flex items-center justify-center">
      <img
        className="max-h-[60vh] w-full object-contain p-5"
        src={product.image_url || '/placeholder.png'}
        alt={product.product_name}
      />
    </div>

    {/* Details Section */}
    <div className="md:w-2/3 p-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">{product.product_name}</h2>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-gray-800">Ingredients:</span> {product.ingredients_text || 'N/A'}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-gray-800">Nutrition Grade:</span> {product.nutrition_grades || 'N/A'}
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <p>
          <span className="font-bold text-gray-800">Energy:</span> {product.nutriments?.energy || 'N/A'}
        </p>
        <p>
          <span className="font-bold text-gray-800">Fat:</span> {product.nutriments?.fat || 'N/A'}
        </p>
        <p>
          <span className="font-bold text-gray-800">Carbohydrates:</span> {product.nutriments?.carbohydrates || 'N/A'}
        </p>
        <p>
          <span className="font-bold text-gray-800">Proteins:</span> {product.nutriments?.proteins || 'N/A'}
        </p>
        
      </div>
      <p className='mt-4'>
          <span className="font-bold text-gray-800 ">Label:</span> {product.labels || 'N/A'}
        </p>
    </div>
  </div>
);

export default ProductDetail;
