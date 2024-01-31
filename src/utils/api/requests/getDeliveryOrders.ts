import { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

type GetDeliveryOrdersResponse =
  | {
      success: false;
      reason: string;
    }
  | {
      success: true;
      orders: DeliveryOrder[];
    };

export const getDeliveryPackageTypes = async (config?: AxiosRequestConfig<never>) =>
  api.get<GetDeliveryOrdersResponse>(`${import.meta.env.VITE_API_URL}/delivery/orders`, config);
