import { Navigate, RouteObject } from 'react-router-dom';

import { Layout } from '~/components';
import { ProfilePage, AuthorizationPage, HistoryPage, HomePage } from '~/pages';
import { ROUTE } from '~/utils/constants';

export const privateRoutes: RouteObject[] = [
  {
    path: ROUTE.HOME,
    element: <Layout />,
    errorElement: <Navigate to={ROUTE.HOME} />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTE.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: ROUTE.AUTHORIZATION,
        element: <AuthorizationPage />,
      },
      {
        path: ROUTE.HISTORY,
        element: <HistoryPage />,
      },
    ],
  },
];
