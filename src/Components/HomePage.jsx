import React, { useState, useEffect, useContext } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import FilterModal from "./FIlterModal";
import { AppContext } from "./context/ProductContext";
import BarcodeScanner from "./BarcodeScanner";

const HomePage = () => {
  const {
    products,
    fetchProducts,
    filter,
    sort,
    categories,
    search,
    setSearch,
    fetchCategories,
    currentPage,
    setCurrentPage,
    totalPages,
    loading,
    setLoading,
    setFilter,
    setSort,
  } = useContext(AppContext);

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isbarcodeOpen,setisbarcodeOpen] = useState(false);

  // Handle search query
  const handleSearch = async (query) => {
    setSearch(query);
    setCurrentPage(1); // Reset to first page when search changes
    fetchProducts(1); // Fetch products based on the search query
  };

  // Fetch initial data
  useEffect(() => {
    setLoading(false);
    fetchProducts(currentPage);
    setLoading(true);
    fetchCategories();
  }, [search, currentPage, filter, sort]);

  // Handle Scan Barcode Button
  const handleScanBarcode = () => {
    setisbarcodeOpen(!isbarcodeOpen);
  };

  return (
    <div className="max-w-full px-2 md:px-6 py-6">
      {/* Search, Sort, and Filter Layout */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
        {/* Search Bar */}
        <div className="flex justify-center md:justify-start w-full">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setIsFilterModalOpen(true)}
          className="w-full max-w-xs px-6 py-3 bg-white text-gray-900 font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 10l5-5 5 5M12 15V5"
            ></path>
          </svg>
          <span>Filter</span>
        </button>
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        categories={categories}
        onFilter={setFilter}
        onSort={setSort}
      />

      {/* Loader while fetching products */}
      {loading ? (
        <div className="spinner-container mt-[30vh]">
          <div className="spinner"></div>
          <div className="ml-2 text-gray-400 text-center text-2xl fade-text">
            Loading Products...
          </div>
        </div>
      ) : (
        <>
          {/* Product List */}
          <ProductList products={products} />

          {/* Pagination Controls */}
          {products.length > 0 && (
            <div className="flex justify-center items-center mt-6 space-x-4">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 theme-color text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Page Number Display */}
              <span className="text-lg font-semibold text-gray-800">
                Page {currentPage} of {totalPages}
              </span>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 theme-color text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </>
      )}

      {/* Floating Scan Barcode Button */}
      <button
        onClick={handleScanBarcode}
        className="fixed bottom-6 right-6 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h4v4H3V3zm14 0h4v4h-4V3zM3 17h4v4H3v-4zm14 0h4v4h-4v-4zM7 7h10v10H7V7z"
          />
        </svg>
      </button>
      {isbarcodeOpen &&(
        <BarcodeScanner/>
      )}
    </div>
  );
};

export default HomePage;
