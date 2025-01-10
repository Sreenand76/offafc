import React, { useState } from 'react';
import { fetchProductByBarcode } from './services/ApiFunctions';

const BarcodeScanner = () => {
  
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = async (data) => {
    if (data) {
      const scannedBarcode = data.text;     
      const result = await fetchProductByBarcode(scannedBarcode);
      if (result.status === 1) {
        setProductDetails(result.product);
        setError(null);
      } else {
        setError('Product not found.');
      }
    }
  };



  return (
    <div className="">
      <h2>Scan Product Barcode</h2>
      {/* It is not working ,some dependency conflict error keeps coming */}
      {/* <QrScanner
        delay={300}
        onScan={handleScan}
        onError={handleError}
        style={{ width: '100%' }}
      /> */}
      {productDetails && (
        <div >
          <h3>{productDetails.product_name}</h3>
          <img src={productDetails.image_url} alt={productDetails.product_name} />
          <p>{productDetails.ingredients_text}</p>
          {/* Add any other product details you need */}
        </div>
      )}
      {error && <p >{error}</p>}
    </div>
  );
};

export default BarcodeScanner;


