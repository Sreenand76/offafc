import axios from "axios";

const foodFactsApi = axios.create({
  baseURL: "https://world.openfoodfacts.org/api/v0",
  timeout: 10000, // Set timeout for requests
});

export const fetchProductByBarcode = async (barcode) => {
  const response = await foodFactsApi.get(`/product/${barcode}.json`);
  return response.data; // Let the component handle success or failure.
};

export const fetchCategoriesForFilter = async () => {
  const response = await axios.get("https://world.openfoodfacts.org/categories.json");
  console.log(response)
  return response;
};

export const searchProductsByName = async (name) => {
  const response = await foodFactsApi.get(`/cgi/search.pl`, {
    params: {
      search_terms: name,
      json: true, // Ensure the API returns the data in JSON format
    },
  });
  return response.data; // Return the data for the component to handle
};

export const fetchProductById= async (id) => {
  console.log("hi")
  const response= await foodFactsApi.get(`/product/${id}.json`);
  console.log(response)
  return response;
}