import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { privateRoutes } from '~/router';

const router = createBrowserRouter(privateRoutes);

export const App = () => <RouterProvider router={router} />;
