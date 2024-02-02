import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export interface PutDeliveryOrdersCancelRequestBody {
  orderId: string;
}

export type PutDeliveryOrdersCancelSuccessResponse = ApiSuccessResponse;

export const putDeliveryOrdersCancel = async (
  data: PutDeliveryOrdersCancelRequestBody,
  config?: AxiosRequestConfig<PutDeliveryOrdersCancelRequestBody>,
) =>
  api
    .patch<PutDeliveryOrdersCancelSuccessResponse>('/delivery/orders/cancel', data, config)
    .then((res) => res.data);
