import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export type GetDeliveryOrderSuccessResponse = ApiSuccessResponse<{ order: DeliveryOrder[] }>;

export const getDeliveryOrder = async (orderId: number, config?: AxiosRequestConfig) =>
  api
    .get<GetDeliveryOrderSuccessResponse>(`/delivery/order/${orderId}`, config)
    .then((res) => res.data);
