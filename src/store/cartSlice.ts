import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Product } from "../types";
import { TProduct } from "../constants/productDataR";

// Define the structure of a cart item

export type TCartItem = TProduct & { quantity: number };

// Define the initial state for the cart
interface CartState {
  items: TCartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addItem(state, action: PayloadAction<TCartItem>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    // Remove item from cart
    removeItem(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === +action.payload
      );
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    // Update item quantity
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const existingItem = state.items.find(
        (item) => item.id === +action.payload.id
      );
      if (existingItem) {
        const quantityDifference =
          action.payload.quantity - existingItem.quantity;
        existingItem.quantity = action.payload.quantity;
        state.totalQuantity += quantityDifference;
        state.totalPrice += quantityDifference * existingItem.price;
      }
    },
    // Clear the cart
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
