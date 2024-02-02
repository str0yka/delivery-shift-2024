import { useEffect } from 'react';

import { CircularProgress } from '~/components/ui';
import { LOCAL_STORAGE_KEY } from '~/utils/constants';
import { useUser } from '~/utils/contexts';

export const LogoutPage = () => {
  const { setUser } = useUser();

  useEffect(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
    setUser(null);
  }, []);

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <CircularProgress />
    </main>
  );
};
