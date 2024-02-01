import type { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

export type GetDeliveryPointsSuccessResponse = {
  success: true;
  points: DeliveryPoint[];
};

export type GetDeliveryPointsFailureResponse = {
  success: false;
  reason: string;
};

export const getDeliveryPoints = async (config?: AxiosRequestConfig<never>) =>
  api.get<GetDeliveryPointsSuccessResponse>('/delivery/points', config).then((res) => res.data);
