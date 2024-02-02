import { Navigate, RouteObject } from 'react-router-dom';

import { Layout } from '~/components';
import { ProfilePage, AuthorizationPage, HistoryPage, ProcessingFlow, LogoutPage } from '~/pages';
import { ROUTE } from '~/utils/constants';

export const privateRoutes: RouteObject[] = [
  {
    path: ROUTE.HOME,
    element: <Layout />,
    errorElement: <Navigate to={ROUTE.HOME} />,
    children: [
      {
        index: true,
        element: <ProcessingFlow />,
      },
      {
        path: ROUTE.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: ROUTE.HISTORY,
        element: <HistoryPage />,
      },
      {
        path: ROUTE.LOGOUT,
        element: <LogoutPage />,
      },
      {
        path: '*',
        element: <Navigate to={ROUTE.HOME} />,
      },
    ],
  },
];

export const publicRoutes: RouteObject[] = [
  {
    path: ROUTE.HOME,
    element: <Layout />,
    errorElement: <Navigate to={ROUTE.AUTHORIZATION} />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTE.AUTHORIZATION} />,
      },
      {
        path: ROUTE.AUTHORIZATION,
        element: <AuthorizationPage />,
      },
      {
        path: '*',
        element: <Navigate to={ROUTE.AUTHORIZATION} />,
      },
    ],
  },
];
