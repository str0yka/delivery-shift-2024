import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export interface PostDeliveryCalcRequestBody {
  package: {
    length: number;
    width: number;
    weight: number;
    height: number;
  };
  senderPoint: {
    latitude: number;
    longitude: number;
  };
  receiverPoint: {
    latitude: number;
    longitude: number;
  };
}

export type PostDeliveryCalcSuccessResponse = ApiSuccessResponse<{ options: DeliveryOption[] }>;

export const postDeliveryCalc = async (
  data: PostDeliveryCalcRequestBody,
  config?: AxiosRequestConfig<PostDeliveryCalcRequestBody>,
) =>
  api.post<PostDeliveryCalcSuccessResponse>('/delivery/calc', data, config).then((res) => res.data);
