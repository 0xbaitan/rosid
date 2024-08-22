import BudgetAndExpensesControls from '@/features/budget-and-expenses/components/BudgetAndExpensesControls';
import ScannerModal from '@/features/receipt-scanning/components/ScannerModal';
import { scannerModalActions } from '@/features/receipt-scanning/reducers/scannerModalSlice';
import { useStoreDispatch } from '@/store/hooks';
import { Button } from 'react-bootstrap';

export default function BudgetAndExpenses() {
  const dispatch = useStoreDispatch();

  const openScannerModal = () => {
    dispatch(scannerModalActions.displayModal(true));
  };
  return (
    <div>
      <BudgetAndExpensesControls />
      <ScannerModal />
      <Button className="hi-mom" onClick={openScannerModal}>
        Scan receipt
      </Button>
    </div>
  );
}
