import { PossiblyNull } from '@/types';
import { Receipt } from '.';

export type ScannerModalState = {
  receipt: PossiblyNull<Receipt>;
  showModalStatus: boolean;
};

export type CameraState = {
  enableCamera: boolean;
  imageCaptured: string | null;
};

export type CurrentReceiptEntryState = {
  receipt: Receipt;
};
