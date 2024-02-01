import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export type GetDeliveryPointsSuccessResponse = ApiSuccessResponse<{ points: DeliveryPoint[] }>;

export const getDeliveryPoints = async (config?: AxiosRequestConfig<never>) =>
  api.get<GetDeliveryPointsSuccessResponse>('/delivery/points', config).then((res) => res.data);
