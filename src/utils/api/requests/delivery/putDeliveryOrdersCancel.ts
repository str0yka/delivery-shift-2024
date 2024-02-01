import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export interface PutDeliveryOrdersCancelRequestBody {
  orderId: string;
}

export type PutDeliveryOrdersCancelResponse = ApiSuccessResponse;

export const putDeliveryOrdersCancel = async (
  data: PutDeliveryOrdersCancelRequestBody,
  config?: AxiosRequestConfig<PutDeliveryOrdersCancelRequestBody>,
) =>
  api
    .patch<PutDeliveryOrdersCancelResponse>('/delivery/orders/cancel', data, config)
    .then((res) => res.data);
