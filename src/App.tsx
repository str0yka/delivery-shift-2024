import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { LoadingPage } from '~/pages';
import { privateRoutes, publicRoutes } from '~/router';
import { useUsersSessionQuery } from '~/utils/api';
import { UserProvider } from '~/utils/contexts';

const publicRouter = createBrowserRouter(publicRoutes);
const privateRouter = createBrowserRouter(privateRoutes);

export const App = () => {
  const [user, setUser] = useState<User | null>(null);

  const usersSessionQuery = useUsersSessionQuery({
    options: {
      onSuccess: (data) => {
        setUser(data.user);
      },
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  });

  if (usersSessionQuery.isLoading) {
    return <LoadingPage />;
  }

  return (
    <UserProvider
      user={user}
      setUser={setUser}
    >
      <RouterProvider router={user ? privateRouter : publicRouter} />
    </UserProvider>
  );
};
