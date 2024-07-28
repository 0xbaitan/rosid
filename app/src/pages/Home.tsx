import NavigationSidebar from "@/features/navigation/components/NavigationSidebar";
import { useStoreDispatch } from "@/store/hooks";
import { requestFetchUsers } from "@/store/reducers/users-reducer";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useStoreDispatch();
  useEffect(() => {
    dispatch(requestFetchUsers());
  }, [dispatch]);
  return (
    <div>
      <NavigationSidebar />
    </div>
  );
}
