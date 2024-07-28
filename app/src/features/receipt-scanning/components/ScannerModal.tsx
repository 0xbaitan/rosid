import { ChangeEvent } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import ReceiptScanner from "../util/receipt-scanner";
import { useStoreDispatch, useStoreSelector } from "@/store/hooks";
import { scannerModalActions } from "../reducers/scannerModalSlice";
import Camera from "./Camera";
import { useReceiptAsString } from "../hooks/useScannerModal";
import ReceiptDisplay from "./ReceiptDisplay";
export default function ScannerModal() {
  const receipt = useReceiptAsString();
  const show = useStoreSelector(
    (state) => state["receipt-scanning"]["scanner-modal"].showModalStatus
  );
  const dispatch = useStoreDispatch();

  const closeModal = () => {
    dispatch(scannerModalActions.displayModal(false));
  };
  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Camera />
          <div>
            <ReceiptDisplay />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
