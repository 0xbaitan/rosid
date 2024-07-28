export type Receipt = {
  vendor: string;
  subtotal: number;
  total: number;
  savings: number;
  currency: string;
  purchaseDate?: number;
  items: Item[];
};

export type Item = {
  expirable: boolean;
  label: string;
  price: number;
  quantity: number;
  subtotal: number;
  category: string;
  savings: number;
  expiryDate?: number;
};
