import { Minus, Plus } from "react-feather";
import { currencyFormatter } from "../../utils/currencyFormatter";
import { removeItem, TCartItem, updateQuantity } from "../../store/cartSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../store/hooks";

export function CartItem({ product }: { product: TCartItem }) {
  const dispatch = useAppDispatch();

  const { id, name, price, images, quantity, originalPrice } = product;

  const removeProduct = (id: number) => {
    const remove = confirm(
      "Are you sure you want to remove this item from your cart?"
    );
    if (!remove) return;

    try {
      const val = dispatch(removeItem(id));
      // toast.success("Item removed from cart");
      toast.success("Item removed from cart");
      console.log(val);
    } catch (error) {
      toast.error("There was an error removing the item.");
      console.error(error);
    }
  };

  return (
    <li className="flex flex-col sm:flex-row relative sm:justify-between bg-white shadow-md dark:bg-gray-50 p-3 pr-4 rounded">
      <button
        className="absolute top-1.5 right-1.5 hover:text-red-500"
        onClick={() => removeProduct(+id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex w-full gap-2 sm:gap-4">
        <img
          className="flex-shrink-0 object-contain size-24 rounded outline-none sm:size-32 "
          src={images.links[0]}
          alt={name}
        />
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <h3 className="text-lg font-semibold leading-snug sm:pr-8 pr-3">
              {name}
            </h3>
          </div>
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <p className="md:text-xs text-sm dark:text-gray-600">
                Quantity: {quantity}
              </p>
              <div className="flex gap-2 flex-col">
                <p className="md:text-xs text-sm dark:text-gray-600">
                  Price: {currencyFormatter(price)}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (quantity > 1) {
                        dispatch(
                          updateQuantity({
                            id: +id,
                            quantity: quantity - 1,
                          })
                        );
                      } else {
                        removeProduct(+id);
                      }
                    }}
                    className="size-6 flex justify-center items-center bg-red-600 text-white rounded-full"
                  >
                    <Minus size={16} />
                  </button>
                  {quantity}
                  <button
                    className="size-6 flex justify-center items-center bg-red-600 text-white rounded-full"
                    onClick={() => {
                      console.log("hello");
                      dispatch(
                        updateQuantity({
                          id: +id,
                          quantity: quantity + 1,
                        })
                      );
                    }}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg  text-red-500">
                {" "}
                {currencyFormatter(price * quantity)}
              </p>

              <p className="text-xs line-through dark:text-gray-400">
                {currencyFormatter(originalPrice!)}
              </p>
            </div>
          </div>
          <div className="flex divide-x justify-center text-xs pt-4">
            <button
              type="button"
              onClick={() => removeProduct(+id)}
              className="flex items-center px-2 py-1 pl-0 space-x-1 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="flex items-center px-2 py-1 space-x-1 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
              </svg>
              <span>Add to favorites</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
