import { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

interface PostDeliveryCalcRequestBody {
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

type PostDeliveryCalcResponse =
  | {
      success: false;
      reason: string;
    }
  | {
      success: true;
      options: DeliveryOption[];
    };

export const postDeliveryCalc = async (
  data: PostDeliveryCalcRequestBody,
  config?: AxiosRequestConfig<PostDeliveryCalcRequestBody>,
) =>
  api.post<PostDeliveryCalcResponse>(`${import.meta.env.VITE_API_URL}/delivery/calc`, data, config);
