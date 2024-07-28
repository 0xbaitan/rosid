import { FormControl } from "react-bootstrap";
import { ReceiptItemProps } from "../types/props";

export default function ReceiptItem(props: ReceiptItemProps) {
  const { item } = props;
  const {
    expirable,
    expiryDate,
    label,
    price,
    quantity,
    savings,
    subtotal,
    category,
  } = item;

  let expiryDateString = expiryDate
    ? new Date(expiryDate).toDateString()
    : new Date().toDateString();
  return (
    <div>
      <FormControl type="text" value={label} />
      <div>{price}</div>
      <div>{quantity}</div>
      <div>{subtotal}</div>
      <div>{savings}</div>
      <div>{category}</div>
      <div>{expirable}</div>
      <div>{expiryDateString}</div>
    </div>
  );
}
