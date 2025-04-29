import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { Link, ScrollRestoration, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { modifiedProduct } from "../constants/productDetails";
import { addItem, updateQuantity } from "../store/cartSlice";
import { toast } from "react-toastify";
import { Minus, Plus } from "react-feather";
import { BackButton } from "../components/BackButton";
import { currencyFormatter } from "../utils/currencyFormatter";

import { useExcelReader } from "../hooks/useExcelReader";

const ProductDetails = () => {
  const scroll = useScroll();
  const translateY = useTransform(scroll.scrollY, [0, 100], [0, -150]);
  const marginBottom = useTransform(scroll.scrollY, [0, 100], [40, -300]);

  const { id } = useParams<{ id: string }>(); // Ensure product ID is a string
  const [imageIndex, setImageIndex] = useState(0);

  console.log(setImageIndex);

  const cartItem = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const data = useExcelReader();

  console.log("Excel Data", data);

  // console.log(modifiedProduct);

  const product = modifiedProduct.find((product) => {
    // console.log(product.id);
    return product.id === +id!;
  });

  // console.log("foundProduct", product, id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const existingItem = cartItem.items.find((item) => +item.id === +product.id);

  console.log("existingItem", existingItem);

  const [quantity, setQuantity] = useState(existingItem?.quantity || 1);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev: number) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen isolate">
      <BackButton />
      {/* Static Image Section */}
      <div className="lg:w-1/2 min-h-[55vh] h-full  flex items-center flex-col pb-12 relative ">
        <motion.div className="absolute top-0 left-0 w-full -bottom-10  step-gradient z-[-1]" />
        <div className="sticky top-24 flex gap-2">
          {product.images.links.map((link, index) => (
            <>
              <motion.img
                key={index}
                src={link}
                alt={`Product Image ${index + 1}`}
                className="object-contain w-full max-w-[55px] max-h-48 cursor-pointer border rounded-lg"
                onClick={() => setImageIndex(index)}
              />
              <motion.img
                key={index}
                src={link}
                alt={`Product Image ${index + 1}`}
                className="object-contain w-full max-w-[55px] max-h-48 cursor-pointer border rounded-lg"
                onClick={() => setImageIndex(index)}
              />
              <motion.img
                key={index}
                src={link}
                alt={`Product Image ${index + 1}`}
                className="object-contain w-full max-w-[55px] max-h-48 cursor-pointer border rounded-lg"
                onClick={() => setImageIndex(index)}
              />
              <motion.img
                key={index}
                src={link}
                alt={`Product Image ${index + 1}`}
                className="object-contain w-full max-w-[55px] max-h-48 cursor-pointer border rounded-lg"
                onClick={() => setImageIndex(index)}
              />
            </>
          ))}
        </div>
        <motion.img
          layoutId="product-image"
          src={product.images.links[imageIndex]}
          alt="Product"
          className="object-contain w-full max-w-[230px] max-h-48 sticky top-48 rounded-lg z-[3]"
          style={
            {
              // marginTop,
              // position: "absolute",
            }
          }
        />
      </div>

      <ScrollRestoration />

      {/* Scrollable Details Section */}
      <motion.div
        layoutId="product-details"
        className="lg:w-1/2 min-h-[70vh] pt-36 flex font-space -translate-y-24  flex-col gap-3 p-4 pb-24 bg-white backdrop-blur-lg rounded-t-[40px] relative z-[1]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          translateY,
          marginBottom,
        }}
      >
        <motion.h1
          className="md:text-4xl text-lg uppercase font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {product.name}
        </motion.h1>
        <motion.p
          className=" text-gray-600 line-clamp-5 tracking-tight md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {product.description}
        </motion.p>
        <div>
          <div className="md:text-2xl text-xl  text-[#0081a7]">
            Price:{currencyFormatter(product.price)}
          </div>
          <div className="text-lg text-gray-900 line-through">
            MRP: {currencyFormatter(product.originalPrice!)}
          </div>
        </div>

        <div className="flex items-center">
          <button
            className="size-6 flex justify-center items-center bg-red-500 text-white rounded-full"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus size={16} />
          </button>
          <span className="px-2 text-lg">{quantity}</span>
          <button
            className="size-6 flex justify-center items-center bg-red-500 text-white rounded-full"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus size={16} />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <motion.button
            className="px-8 py-2 bg-gradient-1 text-white rounded flex gap-2 items-center text-sm hover:bg-red-500/80"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            aria-label="Buy this product"
            onClick={() => {
              if (!existingItem) {
                dispatch(addItem({ ...product, quantity, id: +product.id }));
                toast.success("Item added to cart");
              } else {
                toast.success("Item quantity updated");
                const id = +product.id;
                dispatch(updateQuantity({ id, quantity }));
              }
            }}
          >
            Add to cart
          </motion.button>
          {existingItem ? (
            <Link
              to="/cart"
              className="px-8 py-2 border border-red-500 text-red-500 rounded text-sm"
            >
              Go to Cart
            </Link>
          ) : null}
        </div>

        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Specifications:</h2>
            <table className="table-auto mt-4 w-full border-collapse text-sm border border-gray-300">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 font-bold">{spec.key}</td>
                    <td className="border px-4 py-2">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
