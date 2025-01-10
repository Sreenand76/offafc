# Food Product Explorer

Food Product Explorer is a web application that allows users to search, filter, and view detailed information about food products using the OpenFoodFacts API. Users can filter products by category, sort them based on various criteria, and view detailed product information.

## Features

1. **Homepage**:
   - Displays a list of food products fetched from the OpenFoodFacts API.
   - Each product displays key information such as:
     - Product name
     - Image
     - Category
     - Ingredients (if available)
     - Nutrition Grade (A, B, C, D, E)
   - Users can paginate through the product list using pagination.

2. **Search Functionality**:
   - A search bar on the homepage where users can search for food products by name.
   - The search filters the product list based on the search query.

3. **Category Filter**:
   - A dropdown or a side filter where users can filter products by category (e.g., beverages, dairy, snacks).
   - The list of categories is fetched from the OpenFoodFacts API.

4. **Sort Functionality**:
   - Users can sort the product list by:
     - Product name (A-Z, Z-A)
     - Nutrition grade (ascending/descending)

5. **Product Detail Page**:
   - When a user clicks on a product, they are redirected to a product detail page.
   - The product detail page displays:
     - Product image
     - Full list of ingredients
     - Nutritional values (energy, fat, carbs, proteins, etc.)
     - Labels (vegan, gluten-free, etc.)

6. **Responsive Design**:
   - The design is fully responsive and works well on both mobile and desktop screens achieved using TailwindCSS.

## Technologies Used

- **Front-end**: ReactJS 
- **Styling**: TailwindCSS
- **API Integration**: OpenFoodFacts API
- **State management**: React Context API

## API Documentation

### Base URL

- `https://world.openfoodfacts.org/`

### Used Endpoints

- Get products by category: `https://world.openfoodfacts.org/category/{category}.json`
- Search products by name: `https://world.openfoodfacts.org/cgi/search.pl?search_terms={name}&json=true`
- Get product details by barcode: `https://world.openfoodfacts.org/api/v0/product/{barcode}.json`

### Example Query

- `https://world.openfoodfacts.org/api/v0/product/737628064502.json` (retrieves detailed product information for a specific product by barcode)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/food-product-explorer.git
   cd food-product-explorer

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
