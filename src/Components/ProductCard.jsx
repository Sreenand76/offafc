import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const categories = product.categories ? product.categories.split(",") : [];
  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 3); // Show only the first 3 categories initially

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
      <div className="flex flex-col items-center min-h-[360px]">
        <img
          src={product.image_url || "/placeholder.png"}
          alt={product.product_name}
          className="w-full h-40 object-contain rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
          {product.product_name || "Unknown Product"}
        </h3>
        <p className="text-sm text-gray-600 text-center">
          <strong>Category:</strong>{" "}
          {displayedCategories.length > 0
            ? displayedCategories.join(", ")
            : "N/A"}
          {categories.length > 3 && !showAllCategories && (
            <span
              className="text-blue-500 cursor-pointer ml-2"
              onClick={() => setShowAllCategories(true)}
            >
              ...show more
            </span>
          )}
          {showAllCategories && (
            <span
              className="text-blue-500 cursor-pointer ml-2"
              onClick={() => setShowAllCategories(false)}
            >
              show less
            </span>
          )}
        </p>
        <p className="text-sm text-gray-600 text-center mb-4">
          <strong>Nutrition Grade:</strong> {product.nutrition_grades || "N/A"}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="px-4 py-2 text-sm text-white theme-color"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;


