import { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

interface PutDeliveryOrdersCancelRequestBody {
  orderId: string;
}

interface PutDeliveryOrdersCancelResponse {
  success: boolean;
  reason?: string;
}

export const patchUsersProfile = async (
  data: PutDeliveryOrdersCancelRequestBody,
  config?: AxiosRequestConfig<PutDeliveryOrdersCancelRequestBody>,
) =>
  api.patch<PutDeliveryOrdersCancelResponse>(
    `${import.meta.env.VITE_API_URL}/delivery/orders/cancel`,
    data,
    config,
  );
