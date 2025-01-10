import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetails';
import { fetchProductById } from './services/ApiFunctions';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetchProductById(id);
      setProduct(response.data.product);
    };
    fetchProduct();
  }, [id]);

  return product ? <ProductDetail product={product} /> : (
    <div className="spinner-container mt-[30vh]">
      <div className="spinner"></div>
      <div className="ml-2 text-gray-400 text-center text-2xl fade-text">
        Loading Product...
      </div>
    </div>
  )
};

export default ProductDetailPage;
