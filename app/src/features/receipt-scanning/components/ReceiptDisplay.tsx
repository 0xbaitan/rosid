import { getReceiptExample } from '../example/ReceiptExample';
import ReceiptItem from './ReceiptItem';

export default function ReceiptDisplay() {
  const receipt = getReceiptExample();
  if (!receipt) return <span>"No receipt found"</span>;
  const { currency, items, savings, subtotal, total, vendor, purchaseDate } =
    receipt;
  const itemsList = items.map((item, index) => (
    <ReceiptItem key={index} item={item} />
  ));

  const purchaseDateString = purchaseDate
    ? new Date(purchaseDate).toDateString()
    : new Date().toDateString();
  return (
    <div>
      <h2>{vendor}</h2>
      <p>{purchaseDateString}</p>
      <p>
        {currency} {total}
      </p>
      <p>
        {currency} {subtotal}
      </p>
      <p>
        {currency} {savings}
      </p>
      <ul>{itemsList}</ul>
    </div>
  );
}
