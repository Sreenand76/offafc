import React, { createContext, useState } from "react";
import axios from "axios";
import { fetchCategoriesForFilter } from "../services/ApiFunctions";

export const AppContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  

  const fetchProductsByBarcode = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const isBarcode = /^\d+$/.test(query); // Check if input is a barcode.
      const url = isBarcode
        ? `https://world.openfoodfacts.org/api/v0/product/${query}.json`
        : `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=true`;

      const response = await fetch(url);
      const data = await response.json();

      if (isBarcode) {
        if (data.status === 1) {
          setProducts([data.product]); // Barcode returns a single product.
        } else {
          setError("Product not found for this barcode.");
        }
      } else {
        setProducts(data.products || []);
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    try {
      let url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${search}&page_size=8&page=${page}&json=true`;

      if (filter) url += `&tagtype_0=categories&tag_contains_0=contains&tag_0=${filter}`;
      if (sort) {
        if (sort === "name_asc") url += "&sort_by=product_name&order_by=asc";
        if (sort === "name_desc") url += "&sort_by=product_name&order_by=desc";
        if (sort === "nutrition_asc") url += "&sort_by=nutrition_grade_fr&order_by=asc";
        if (sort === "nutrition_desc") url += "&sort_by=nutrition_grade_fr&order_by=desc";
      }
      const response = await axios.get(url);
      setProducts(response.data.products || []);
      setTotalPages(Math.ceil(response.data.count / 10));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetchCategoriesForFilter();
      setCategories(response.data.tags.map((tag) => tag.name));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        products,
        categories,
        search,
        setSearch,
        filter,
        setFilter,
        sort,
        setSort,
        currentPage,
        setCurrentPage,
        totalPages,
        loading,
        setLoading,
        fetchProducts,
        fetchCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
