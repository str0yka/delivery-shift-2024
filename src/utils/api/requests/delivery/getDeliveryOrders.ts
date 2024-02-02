import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export type GetDeliveryOrdersSuccessResponse = ApiSuccessResponse<{ orders: DeliveryOrder[] }>;

export const getDeliveryOrders = async (config?: AxiosRequestConfig) =>
  api.get<GetDeliveryOrdersSuccessResponse>('/delivery/orders', config).then((res) => res.data);
