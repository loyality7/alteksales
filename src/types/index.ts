import { featuredProducts } from "../constants/featuredProducts";
// import { TProduct } from "../constants/productDataR";

export type Product = (typeof featuredProducts)[number] & { type?: string };

export interface Category {
  id: number;
  subcategory: string;
  products: Product[];
}

export type ProductData = {
  [key: string]: Category[];
};
