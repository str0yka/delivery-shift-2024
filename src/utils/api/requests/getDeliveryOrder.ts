import { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

type GetDeliveryOrderResponse =
  | {
      success: false;
      reason: string;
    }
  | {
      success: true;
      order: DeliveryOrder[];
    };

export const getDeliveryPackageTypes = async (
  orderId: number,
  config?: AxiosRequestConfig<never>,
) =>
  api.get<GetDeliveryOrderResponse>(
    `${import.meta.env.VITE_API_URL}/delivery/orders/${orderId}`,
    config,
  );
