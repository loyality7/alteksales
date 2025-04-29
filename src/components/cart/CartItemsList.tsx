import { TCartItem } from "../../store/cartSlice";
import { CartItem } from "./CartItem";



export function CartItemsList({ products }: { products: TCartItem[] }) {
    return (
      <>
        {products.length > 0 ? (
          <div className="flex-1">
            <ul className="flex flex-col divide-y dark:divide-gray-300 gap-4">
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
  
            <h3 className="mt-2 text-lg font-semibold">Your cart is empty</h3>
  
            <p className="mt-1 text-sm text-gray-500">
              Looks like you have not added anything to your cart yet. Start
              shopping to fill it up.
            </p>
          </div>
        )}
      </>
    );
  }