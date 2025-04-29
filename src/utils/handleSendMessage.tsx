import { TCartItem } from "../store/cartSlice";
import { currencyFormatter } from "./currencyFormatter";

export const handleSendMessage = (products: TCartItem[], price: number) => {
  const message = `Product Details: \n\n${products
    .map((item, i) => {
      // Define maximum column widths for labels and values
      const labelWidth = 12; // Width of label columns like 'ProductId', 'Name', etc.

      // Format each product detail with padding for alignment// Ensure equal space after ProductId

      return (
        `Product ${i + 1}: \nProductId    : ${item.id
          .toString()
          .padEnd(labelWidth)}\n` +
        `Name          : ${item.name.padEnd(labelWidth)}\n` +
        `Price            : ${item.price.toString().padEnd(labelWidth)}\n` +
        `Quantity      : ${item.quantity.toString().padEnd(labelWidth)}\n \n` +
        `------`
      );
    })
    .join("\n")} \nTotal Items  : ${
    products.length
  } \nTotal Price   : ${currencyFormatter(
    price
  )} \n\nPlease let me know if you have any questions.`.trim();

  console.log(message);

  // Assuming you want to send the message via WhatsApp
  const phoneNumber = import.meta.env.VITE_PUBLIC_WHATSAPP_NUMBER;
  const encodedMessage = encodeURIComponent(message);

  console.log(phoneNumber);
  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open in a new tab (uncomment this if you want it to open automatically)
  window.open(whatsappUrl, "_blank");
};
