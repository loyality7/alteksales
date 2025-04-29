import React from "react";
import { ScrollRestoration, useParams, useSearchParams } from "react-router";
import { BackButton } from "../components/BackButton";
import { productsData } from "../constants/productsData";
import { ProductCard } from "../components/ProductCard";

const CategoryPage: React.FC = () => {
  const category = useParams().category!;
  const subcategory = useSearchParams()[0].get("subcategory")!.toLowerCase();

  if (!category && !subcategory) {
    return <div>No category selected</div>;
  }

  // console.log(productsData[subcategory]);

  const selectedProducts = productsData[category].find(
    (product) => product.subcategory === subcategory
  );

  console.log(selectedProducts);

  if (!selectedProducts) {
    return <div>Category not found</div>;
  }
  return (
    <div className="container mx-auto my-8 p-4">
      <BackButton />
      <ScrollRestoration />
      <div className="mt-12">
        <h1 className="text-3xl font-bold capitalize mb-8">{subcategory}</h1>
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            {selectedProducts.subcategory}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {selectedProducts.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// const handleProductClick = (productId: number) => {
//   // Navigate to a product details page
//   alert(`Viewing details for Product ID: ${productId}`);
// };

export default CategoryPage;
