import { featuredProducts } from "./featuredProducts";
import { TProduct, allProducts as products } from "./productDataR";
import { productsData } from "./productsData";

const productDetails = products.accessories.flatMap(
  (accessory) => accessory.products
) satisfies TProduct[];

productDetails.push(...featuredProducts);

console.log(productsData);

productsData["laptop-types"].map((item) => {
  productDetails.push(...item.products);
});

function updateImageArray(product: TProduct) {
  const { id, name, subcategory, images } = product;
  const { imgCount } = images;

  // Create new image links based on imgCount
  const newLinks = Array.from({ length: imgCount }, (_, i) =>
    i === 0
      ? `/accessories/${subcategory}/${name}.png`
      : `/accessories/${subcategory}/${name}${i}.png`
  );

  return {
    ...product,
    id: id,
    images: {
      imgCount: newLinks.length, // Confirming the count matches the new links array
      links: newLinks,
    },
  };
}

export const modifiedProduct: TProduct[] = productDetails.map((product) => {
  return updateImageArray(product);
});
