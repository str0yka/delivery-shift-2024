import { useState } from 'react';

import { OrderContext } from './OrderContext';
import type { OrderState } from './OrderContext';

interface OrderProviderProps {
  children: React.ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [order, setOrder] = useState<OrderState['order']>({});

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <OrderContext.Provider value={{ order, setOrder }}>{children}</OrderContext.Provider>;
};
