import { createContext } from 'react';

import { PostDeliveryOrderRequestBody } from '~/utils/api';

export interface OrderState {
  order: Partial<
    PostDeliveryOrderRequestBody & {
      package: { length: number; width: number; weight: number; height: number };
    }
  >;
  setOrder: React.Dispatch<
    React.SetStateAction<
      Partial<
        PostDeliveryOrderRequestBody & {
          package: { length: number; width: number; weight: number; height: number };
        }
      >
    >
  >;
}

export const OrderContext = createContext<OrderState>({} as OrderState);
