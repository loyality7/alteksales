import { Link } from "react-router";
import { MotionLink } from "../components/MotionLink";
import { TProduct } from "../constants/productDataR";
import { currencyFormatter } from "../utils/currencyFormatter";
import { childVariants } from "../constants/motionVarients";

export const ProductCard = ({
  product: { id, name, price, images, originalPrice, stock },
}: {
  product: TProduct;
}) => {
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
        
        <div className="mt-4 px-3 pb-5 flex flex-col gap-2 flex-1">
          <span className="text-xs text-red-700">
            In Stock: {stock} left
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
