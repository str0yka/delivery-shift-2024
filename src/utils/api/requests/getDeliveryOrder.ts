import type { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

export type GetDeliveryOrderSuccessResponse = {
  success: true;
  order: DeliveryOrder[];
};

export type GetDeliveryOrderFailureResponse = {
  success: false;
  reason: string;
};

export const getDeliveryOrder = async (orderId: number, config?: AxiosRequestConfig<never>) =>
  api
    .get<GetDeliveryOrderSuccessResponse>(`/delivery/order/${orderId}`, config)
    .then((res) => res.data);
