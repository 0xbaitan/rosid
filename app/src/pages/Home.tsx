import UsersApi from "@/api/users";
import { useStoreDispatch, useStoreSelector } from "@/store/hooks";
import { requestFetchUsers } from "@/store/reducers/users-reducer";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const users = useStoreSelector((state) => state.users.users);
  const loading = useStoreSelector((state) => state.users.loading);

  const error = useStoreSelector((state) => state.users.error);

  const dispatch = useStoreDispatch();
  useEffect(() => {
    dispatch(requestFetchUsers());
  }, [dispatch]);
  return (
    <div>
      {JSON.stringify(users)}
      {JSON.stringify(error)}
    </div>
  );
}
