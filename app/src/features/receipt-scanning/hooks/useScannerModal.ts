import { useStoreDispatch, useStoreSelector } from '@/store/hooks';
import { useCallback } from 'react';
import { scannerModalActions } from '../reducers/scannerModalSlice';
import useMemoize from '@/hooks/useMemoize';

export function useScanImage() {
  const dispatch = useStoreDispatch();
  const scanImage = useCallback(
    async (imageSrc: string | null) => {
      if (!imageSrc) {
        return;
      }
      dispatch(scannerModalActions.scanImage(imageSrc));
    },
    [dispatch]
  );
  return scanImage;
}

export function useReceiptAsString() {
  const receipt = useReceipt();
  return useMemoize(JSON.stringify(receipt));
}

export function useReceipt() {
  const receipt = useStoreSelector(
    (store) => store['receipt-scanning']['scanner-modal'].receipt
  );
  return useMemoize(receipt);
}
