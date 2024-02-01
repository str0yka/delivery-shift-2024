import type { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

export type GetDeliveryOrdersSuccessResponse = {
  success: true;
  orders: DeliveryOrder[];
};

export type GetDeliveryOrdersFailureResponse = {
  success: false;
  reason: string;
};

export const getDeliveryOrders = async (config?: AxiosRequestConfig<never>) =>
  api.get<GetDeliveryOrdersSuccessResponse>('/delivery/orders', config).then((res) => res.data);
