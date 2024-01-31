import { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

type GetDeliveryPointsResponse =
  | {
      success: false;
      reason: string;
    }
  | {
      success: true;
      points: DeliveryPoint[];
    };

export const getDeliveryPoints = async (config?: AxiosRequestConfig<never>) =>
  api.get<GetDeliveryPointsResponse>(`${import.meta.env.VITE_API_URL}/delivery/points`, config);
