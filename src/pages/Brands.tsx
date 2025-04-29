import React from "react";
import { Link, ScrollRestoration, useParams } from "react-router";
import { childVariants } from "../constants/motionVarients";
// import { productsData } from "../constants/productsData";
import { motion } from "motion/react";
import { BackButton } from "../components/BackButton";
import { allProducts, TProduct } from "../constants/productDataR";
import { currencyFormatter } from "../utils/currencyFormatter";
// import { useExportToExcel } from "../hooks/useExport";
// import { modifiedProduct } from "../constants/productDetails";

// import { useSheets } from "../hooks/useSheets";

import { useExcelReader } from "../hooks/useExcelReader";
import useSheets from "../hooks/useSheets";

const MotionLink = motion.create(Link);

const Brands: React.FC = () => {
  const subcategory = useParams().brand!;
  const groupByBrand = (products: TProduct[]) => {
    return products.reduce<Record<string, TProduct[]>>((acc, product) => {
      if (!acc[product.brand]) {
        acc[product.brand] = [];
      }
      acc[product.brand].push(product);
      return acc;
    }, {});
  };

  console.log(subcategory);

  // console.log(data, loading);

  // const excel = useExportToExcel();

  // excel.exportToExcel(modifiedProduct, "data1.xlsx");

  const selectedSubcategory = allProducts.accessories.find(
    (item) => item.subcategory.toLowerCase() === subcategory.toLowerCase()
  );
  console.log(selectedSubcategory);

  const stocks = useExcelReader();

  const stockData = useSheets(stocks!);

  console.log(stocks);
  console.log(stockData);
  const groupedProducts = groupByBrand(selectedSubcategory!.products);

  console.log(groupedProducts);

  const productsArray = Object.entries(groupedProducts).map(
    ([brand, products]) => ({
      brand: brand.toLowerCase(),
      products,
    })
  );

  console.log(productsArray);

  if (!selectedSubcategory || !selectedSubcategory.products.length) {
    return (
      <div>
        <BackButton />
        <ScrollRestoration />
        <div className="container mx-auto my-16 p-4 pt-10 flex-1 min-h-[70vh]">
          <h1 className="text-3xl font-bold capitalize mb-8">{subcategory}</h1>
          <div className="pb-4">
            <p className="text-sm text-center">
              Stock will be added shortly. Visit Again.
            </p>
            <p className="text-sm text-center">Thank You...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 p-4">
      <BackButton />
      <ScrollRestoration />
      {/* <h1 className="text-3xl font-bold capitalize mb-8">{subcategory}</h1> */}
      <div className="my-8">
        {productsArray.map(({ brand, products }) => (
          <div key={brand} className="py-4">
            <h2 className="text-xl font-semibold mb-4 capitalize">
              {brand} {subcategory}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.map(
                ({ id, name, price, originalPrice, rating, category }) => {
                  console.log(category);
                  return (
                    <MotionLink
                      variants={childVariants}
                      to={
                        category === "accessories"
                          ? `/product/accessories/${id}`
                          : `/product/${id}`
                      }
                      className="block"
                    >
                      <div className="relative flex w-full max-w-xs flex-col h-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                        <a
                          className="relative mx-3 mt-3 flex h-40 overflow-hidden rounded-xl"
                          href="#"
                        >
                          <img
                            className="object-contain w-full"
                            src={`/accessories/${subcategory.toLowerCase()}/${name}.png`}
                            alt="product image"
                          />
                          <span className="absolute top-0 left-0 m-0 text-[50%] rounded-full bg-black px-2 text-center py-1 font-medium text-white">
                            {originalPrice &&
                              (
                                ((originalPrice - price) / originalPrice) *
                                100
                              ).toFixed(0)}
                            % OFF
                          </span>
                        </a>
                        <div className="mt-4 px-3 pb-5 flex flex-col gap-2 flex-1">
                          <h5 className="text-green-600 text-sm">
                            {/* In Stock:{stock} */}
                            {stockData.find((item) => item.id === id)?.stock &&
                            stockData.find((item) => item.id === id)?.stock! <
                              10
                              ? `In Stock:
                              ${stockData.find((item) => item.id === id)?.stock}
                               left`
                              : "In Stock"}
                          </h5>
                          <h5 className="flex-1 text-slate-900">{name}</h5>

                          <div className="flex flex-col items-start">
                            <p className="flex gap-2 items-center">
                              <span className="text-xl font-bold text-red-700">
                                {currencyFormatter(price)}
                              </span>
                              <span className="text-sm text-slate-900 line-through">
                                {currencyFormatter(originalPrice!)}
                              </span>
                            </p>
                            <div className="flex items-center">
                              <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <span className="mr-2 ml-3 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
                                {rating}
                              </span>
                            </div>
                          </div>
                          <Link
                            to={
                              category === "accessories"
                                ? `/product/accessories/${id}`
                                : `/product/${id}`
                            }
                            className="flex items-center text-sm justify-center mt-2 rounded-md bg-red-700 px-5 py-2.5 text-center font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </MotionLink>
                  );
                }
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
