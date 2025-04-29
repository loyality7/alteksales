import { Link } from "react-router";
import { MotionLink } from "../components/MotionLink";
import { TProduct } from "../constants/productDataR";
import { currencyFormatter } from "../utils/currencyFormatter";
import { childVariants } from "../constants/motionVarients";
import { useExcelReader } from "../hooks/useExcelReader";
import useSheets from "../hooks/useSheets";

export const ProductCard = ({
  product: { id, name, price, images, originalPrice },
}: {
  product: TProduct;
}) => {
  const stocks = useExcelReader();

  const stockData = useSheets(stocks!);

  return (
    <MotionLink
      variants={childVariants}
      to={`/product/${id}`}
      className="block w-full"
    >
      <div className="relative flex w-full max-w-xs flex-col h-full overflow-hidden rounded-lg inset-bottom-left-shadow">
        <a
          className="relative mx-3 mt-3 flex md:h-40 h-20 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-contain w-full"
            src={images.links[0]}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-0 rounded-full bg-black px-2 py-1 text-[10px] text-center  font-medium text-white">
            {originalPrice &&
              (((originalPrice - price) / originalPrice) * 100).toFixed(0)}
            % OFF
          </span>
        </a>
        <div className="mt-4 px-3 pb-5 flex flex-col flex-1 gap-1">
          <span className="text-xs text-red-700">
            In Stock:{" "}
            {stockData.find((item) => item.id === id)?.stock
              ? stockData.find((item) => item.id === id)?.stock
              : 0}
            {" "}left
          </span>

          <h5 className="flex-1 text-slate-900 text-sm tracking-tight">
            {name}
          </h5>

          <div className="flex flex-col items-start">
            <p className="flex gap-2 items-center">
              <span className="md:text-xl font-bold text-red-700">
                {currencyFormatter(price)}
              </span>
              <span className="text-xs text-slate-900 line-through">
                {currencyFormatter(originalPrice!)}
              </span>
            </p>
            {/* <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="border"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="border"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="border"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="border"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="border"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <span className="mr-2 ml-3 rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold">
                {rating}
              </span>
            </div> */}
          </div>
          <Link
            to={`/product/${id}`}
            className="flex items-center inset-bottom-shadow tracking-wider font-space w-2/3 md:w-[90%] self-center text-xs md:text-sm justify-center mt-2 rounded-md bg-red-700 px-5 py-2 text-center font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Details
          </Link>
        </div>
      </div>
    </MotionLink>
  );
};
