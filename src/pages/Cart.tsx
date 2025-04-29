// import toast from "react-hot-toast";
import { Link, ScrollRestoration } from "react-router";
import { BackButton } from "../components/BackButton";
import { CartItemsList } from "../components/cart/CartItemsList";
import { useAppSelector } from "../store/hooks";
import { currencyFormatter } from "../utils/currencyFormatter";
import { handleSendMessage } from "../utils/handleSendMessage";

const Cart = () => {
  // const price = cartItems.reduce((acc, item) => acc + item.price, 0);

  const products = useAppSelector((state) => state.cart.items);

  const price = useAppSelector((state) => state.cart.totalPrice);

  return (
    <div className="flex flex-col max-w-5xl px-3 mt-4 mb-24 flex-1 min-h-[80vh] mx-auto space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <BackButton />
      <div className="flex flex-col gap-2">
        <h2 className="text font-semibold font-space">How It Works?</h2>
        <ul className="flex gap-2 flex-col pl-4 font-space text-xs">
          <li>
            1. Add items to your cart by clicking the &quot;Add to Cart&quot;
            button on the product page.
          </li>
          <li>
            2.  click the &quot;Send&quot; button
            in your cart.
          </li>
          <li>
            3. Your Cart Items will be received by our Sales Executive.
          </li>
          <li>
            4. Our Sales Executive will call you to get delivery Instructions and softwares to Install and Explains you some more discount offers
          </li>
        </ul>
        <div className="py-4 flex flex-col gap-4 font-space">
          <h2 className="text-xl font-semibold">Your cart</h2>
          <ScrollRestoration />
          <CartItemsList products={products} />
          <div className="space-y-1 text-right">
            <p>
              Total amount:
              <span className="font-semibold"> {currencyFormatter(price)}</span>
            </p>
            <p className="text-sm dark:text-gray-600">
              Not including tax and shipping costs
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <Link
              to={"/"}
              type="button"
              className="px-6 py-2 border rounded-md dark:border-green-600"
            >
              Back
              <span className="sr-only sm:not-sr-only">to shop</span>
            </Link>

            {products.length > 0 ? (
              <button
                type="button"
                className="px-6 py-2 border rounded-md bg-green-600 text-gray-50 border-green-600"
                onClick={() => {
                  handleSendMessage(products, price);
                }}
              >
                <span className="sr-only sm:not-sr-only">Continue to </span>Send
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
