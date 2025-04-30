import { useState, useEffect } from "react";
import { modifiedProduct } from "../../constants/productDetails";
import { ProductCard } from "../../components/ProductCard";

const Filters = () => {
  const [filteredProducts, setFilteredProducts] = useState(modifiedProduct);

  // Dynamic filter values derived from the products array
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  // Selected filters
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [maxPrice, setMaxPrice] = useState<number>(50000); // Dynamically calculated max price

  // Extract unique filter fields from the product data
  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(modifiedProduct.map((product) => product.category))
    );
    const uniqueBrands = Array.from(
      new Set(modifiedProduct.map((product) => product.brand))
    );
    const maxProductPrice = Math.max(
      ...modifiedProduct.map((product) => product.price)
    );

    setCategories(uniqueCategories);
    setBrands(uniqueBrands);
    setMaxPrice(maxProductPrice);
    setPriceRange([0, maxProductPrice]);
  }, []);

  // Handle filter logic
  const applyFilters = () => {
    let filtered = modifiedProduct;

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setPriceRange([0, maxPrice]);
    setFilteredProducts(modifiedProduct);
  };

  return (
    <div className="flex gap-8 mt-16 relative border scroll-smooth">
      {/* Filters Sidebar */}
      <div className="w-1/4 border h-fit p-4 sticky top-[105px]">
        <h2 className="text-lg font-bold">Filters</h2>

        {/* Category Filter */}
        <div className="mt-4">
          <h3 className="font-semibold">Category</h3>
          <select
            value={selectedCategory || ""}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Brand Filter */}
        <div className="mt-4">
          <h3 className="font-semibold">Brand</h3>
          <select
            value={selectedBrand || ""}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="mt-4">
          <h3 className="font-semibold">Price Range</h3>
          <input
            type="range"
            min="0"
            max={maxPrice}
            step="1000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full"
          />
          <p className="text-sm">
            ₹{priceRange[0]} - ₹{priceRange[1]}
          </p>
        </div>

        {/* Apply and Clear Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
          <button className="bg-gray-300 px-4 py-2" onClick={clearFilters}>
            Clear
          </button>
        </div>
      </div>

      {/* Products Display */}
      <div className="w-3/4">
        <h2 className="text-lg font-bold">Products</h2>
        <div className="grid grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
