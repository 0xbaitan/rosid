import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { StoreDispatch, StoreState } from ".";

export const useStoreSelector = useSelector.withTypes<StoreState>();
export const useStoreDispatch = useDispatch.withTypes<StoreDispatch>();
