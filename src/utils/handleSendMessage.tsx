import { TCartItem } from "../store/cartSlice";
import { currencyFormatter } from "./currencyFormatter";

export const handleSendMessage = (products: TCartItem[], price: number) => {
  const message = `🛒 *Cart Details*\n\n${products
    .map((item, i) => {
      // Format specifications if they exist
      const specsText = item.specifications
        ? `\n*Specifications:*\n${item.specifications
            .map((spec) => `• ${spec.key}: ${spec.value}`)
            .join("\n")}`
        : "";

      return (
        `*Product ${i + 1}*\n` +
        `📱 *Name:* ${item.name}\n` +
        `🆔 *Product ID:* ${item.id}\n` +
        `💰 *Price:* ${currencyFormatter(item.price)}\n` +
        `📦 *Quantity:* ${item.quantity}\n` +
        `💵 *Subtotal:* ${currencyFormatter(item.price * item.quantity)}` +
        specsText +
        `\n\n${"─".repeat(30)}\n`
      );
    })
    .join("\n")}\n\n` +
    `*Summary*\n` +
    `📊 *Total Items:* ${products.length}\n` +
    `📦 *Total Quantity:* ${products.reduce((acc, item) => acc + item.quantity, 0)}\n` +
    `💰 *Total Amount:* ${currencyFormatter(price)}\n\n` +
    `Please contact me for delivery instructions and software installation details.`.trim();

  console.log(message);

  // Assuming you want to send the message via WhatsApp
  const phoneNumber = import.meta.env.VITE_PUBLIC_WHATSAPP_NUMBER;
  const encodedMessage = encodeURIComponent(message);

  console.log(phoneNumber);
  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open in a new tab
  window.open(whatsappUrl, "_blank");
};
