import { Item, Receipt } from "../types";

export function isItem(entity: unknown): entity is Item {
  const {
    expirable,
    expiryDate,
    label,
    price,
    quantity,
    savings,
    subtotal,
    category,
  } = entity as any;

  if (expiryDate && !(expiryDate instanceof Date)) {
    return false;
  }
  if (typeof expirable !== "boolean") {
    return false;
  }
  if (typeof label !== "string") {
    return false;
  }
  if (typeof price !== "number") {
    return false;
  }
  if (typeof quantity !== "number") {
    return false;
  }
  if (typeof savings !== "number") {
    return false;
  }
  if (typeof subtotal !== "number") {
    return false;
  }
  if (typeof category !== "string") {
    return false;
  }
  return true;
}

export function isItemArray(entity: unknown): entity is Item[] {
  if (!Array.isArray(entity)) {
    return false;
  }
  return entity.every((item) => isItem(item));
}

export function isReceipt(entity: unknown): entity is Receipt {
  const { vendor, subtotal, total, savings, currency, purchaseDate, items } =
    entity as any;
  if (typeof vendor !== "string") {
    return false;
  }
  if (typeof subtotal !== "number") {
    return false;
  }
  if (typeof total !== "number") {
    return false;
  }
  if (typeof savings !== "number") {
    return false;
  }
  if (typeof currency !== "string") {
    return false;
  }
  if (purchaseDate && !(purchaseDate instanceof Date)) {
    return false;
  }
  if (!isItemArray(items)) {
    return false;
  }
  return true;
}
