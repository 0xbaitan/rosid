import UsersApi from '@/api/users';
import NavigationSidebar from '@/features/navigation/components/NavigationSidebar';
import { useStoreDispatch } from '@/store/hooks';
import { requestFetchUsers } from '@/store/reducers/users-reducer';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function Home() {
  const dispatch = useStoreDispatch();
  useEffect(() => {
    dispatch(requestFetchUsers());
  }, [dispatch]);
  return (
    <div className="flex flex-row">
      <NavigationSidebar />
    </div>
  );
}
