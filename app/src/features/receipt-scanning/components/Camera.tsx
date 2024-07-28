import React, {
  useRef,
  useCallback,
  useMemo,
  Suspense,
  ChangeEvent,
} from "react";
import Webcam from "react-webcam";
import "../styles/Camera.scss";
import { Button, FormControl } from "react-bootstrap";
import { useStoreDispatch, useStoreSelector } from "@/store/hooks";
import { cameraActions } from "../reducers/camera-reducer";
import CapturedImage from "./CapturedImage";
import ImageConverter from "../util/image-converter";
export default function Camera() {
  const videoConstraints: MediaTrackConstraints = useMemo(() => {
    return {
      width: 1280,
      height: 720,
      facingMode: "user",
    };
  }, []);

  const dispatch = useStoreDispatch();
  const webcamRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    if (!webcamRef.current) {
      return;
    }
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(cameraActions.setImage(imageSrc));
  }, [dispatch]);

  const enableCamera = useStoreSelector(
    (state) => state["receipt-scanning"]["camera"].enableCamera
  );

  const onFileUpload = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files) {
        return;
      }
      const file = files[0];
      const imageSrc = await ImageConverter.toImageBlobUrl(file);
      dispatch(cameraActions.setImage(imageSrc));
    },
    [dispatch]
  );

  const cameraComponent = useMemo(() => {
    if (enableCamera) {
      return (
        <div>
          <Webcam
            className="rs-camera"
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <Button onClick={capture}>Capture photo</Button>
          <FormControl type="file" accept="image/*" onChange={onFileUpload} />
        </div>
      );
    } else {
      return <CapturedImage />;
    }
  }, [capture, enableCamera, onFileUpload, videoConstraints]);
  return <>{cameraComponent}</>;
}
