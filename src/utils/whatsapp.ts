import { businessSettings } from '../data/businessSettings';

interface WhatsAppOrderMessageInput {
  customerName?: string;
  productName?: string;
  quantity?: number;
  note?: string;
}

export function createWhatsAppOrderUrl(input: WhatsAppOrderMessageInput = {}) {
  const message = [
    `Hello ${businessSettings.businessName}, I would like to place an order.`,
    input.customerName ? `Name: ${input.customerName}` : undefined,
    input.productName ? `Product: ${input.productName}` : undefined,
    input.quantity ? `Quantity: ${input.quantity}` : undefined,
    input.note ? `Note: ${input.note}` : undefined,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${businessSettings.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
