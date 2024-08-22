import { Button, Image } from 'react-bootstrap';
import '../styles/CapturedImage.scss';
import { useStoreDispatch, useStoreSelector } from '@/store/hooks';
import { NO_AVAILABLE_IMAGE_PATH } from '@/constants';
import { useCallback } from 'react';
import { cameraActions } from '../reducers/camera-reducer';
import { useScanImage } from '../hooks/useScannerModal';
export default function CapturedImage() {
  const imageSrc = useStoreSelector(
    (state) => state['receipt-scanning'].camera.imageCaptured
  );
  const dispatch = useStoreDispatch();

  const enableCamera = useCallback(() => {
    dispatch(cameraActions.enableCamera(true));
  }, [dispatch]);

  const scanImage = useScanImage();
  return (
    <>
      <Image
        className="rs-captured-image"
        src={imageSrc ?? NO_AVAILABLE_IMAGE_PATH}
      />
      <Button onClick={enableCamera}>Recapture image</Button>
      <Button onClick={async () => scanImage(imageSrc)}>Scan</Button>
    </>
  );
}
