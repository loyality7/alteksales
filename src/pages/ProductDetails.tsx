import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Minus, Plus, ShoppingCart } from "react-feather";
import { Link, ScrollRestoration, useParams } from "react-router";
import { toast } from "react-toastify";
import { modifiedProduct } from "../constants/productDetails";
import { addItem, updateQuantity } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { currencyFormatter } from "../utils/currencyFormatter";
import { BackButton } from "../components/BackButton";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>(); // Ensure product ID is a string
  const [imageIndex, setImageIndex] = useState(0);

  const cartItem = useAppSelector((state) => state.cart);

  // console.log("existingItem", existingItem);

  const [quantity, setQuantity] = useState(1);

  const dispatch = useAppDispatch();

  // console.log(modifiedProduct);

  const product = modifiedProduct.find((product) => {
    // console.log(product.id);
    return product.id === +id!;
  });

  // console.log("foundProduct", product, id);

  const existingItem = cartItem.items.find((item) => {
    if (product) return item.id === product.id;
  });

  useEffect(() => {
    setQuantity(existingItem ? existingItem.quantity : 1);
  }, [existingItem]);

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  return (
    <div className="container mx-auto p-4 mt-8 md:mt-16 font-space">
      <ScrollRestoration />
      <div className=" fixed h-screen w-screen -z-10 inset-0 bg-gradient-2" />
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="flex md:flex-row-reverse gap-2 flex-col md:col-span-2"
        >
          <div className="w-full rounded-2xl overflow-clip">
            <img
              src={product.images.links[imageIndex]}
              alt={product.name}
              className="w-full h-[400px] max-h-[500px] object-contain rounded shadow"
            />
          </div>
          <div className="flex flex-row md:flex-col mt-4 md:mt-0 gap-2 justify-center md:justify-start">
            {product.images.links.map((img, index) => (
              <img
                onClick={() => {
                  setImageIndex(index);
                }}
                onMouseEnter={() => {
                  setImageIndex(index);
                }}
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 rounded object-contain hover:cursor-pointer"
              />
            ))}
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="md:col-span-3  rounded-2xl p-4 bg-gradient-3"
        >
          <h1 className="md:text-4xl text-xl font-semibold">{product.name}</h1>
          <p className="text-gray-700 text-sm my-2 ">
            {product.description}
          </p>
          <div className="md:text-2xl text-lg font-bold text-[#0081a7]">
            Price: {currencyFormatter(product.price)}
          </div>
          <div className=" text-gray-900 line-through">
            MRP: {currencyFormatter(product.originalPrice!)}
          </div>
          <div className="my-4">
            {/* <p className="text-lg font-medium">
              Rating: {product.rating} ★ ({product.reviews.length} reviews)
            </p> */}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
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

          <div className="flex gap-4 mt-6">
            <button
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
              className="px-6 py-2 bg-gradient-1 text-white rounded flex gap-2 items-center text-sm hover:bg-red-500/80"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
            {existingItem ? (
              <Link
                to="/cart"
                className="px-6 py-2 border border-slate-50 text-slate-50 rounded text-sm"
              >
                Go to Cart
              </Link>
            ) : null}
          </div>
        </motion.div>

        <div className="md:col-span-5 h-full absolute z-[-1] w-full"></div>
      </div>
      {/* Specifications */}
      <div className="mt-8">
        <div className="w-full mb-8">
          <h2 className="text-xl font-semibold pb-2">Key Features:</h2>
          <div className="grid grid-cols-2 text-black  font-space text-sm gap-3">
            <p className="px-4 py-1 border rounded border-slate-700">
              Scratch Less
            </p>
            <p className="px-4 py-1 border rounded border-slate-700">
              7 Days Return
            </p>
            <p className="px-4 py-1 border rounded border-slate-700">
              3 months Warranty
            </p>
            <p className="px-4 py-1 border rounded border-slate-700">
              3 months Free Service
            </p>
            <p className="px-4 py-1 border rounded border-slate-700">
              Free Software Installation <sup className="text-red-500">*</sup>
            </p>
          </div>
        </div>
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
    </div>
  );
};

export default ProductDetailsPage;
