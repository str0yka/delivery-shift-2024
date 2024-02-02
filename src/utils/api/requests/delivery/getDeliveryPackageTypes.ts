import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export type GetDeliveryPackageTypesSuccessResponse = ApiSuccessResponse<{
  packages: DeliveryPackageType[];
}>;

export const getDeliveryPackageTypes = async (config?: AxiosRequestConfig) =>
  api
    .get<GetDeliveryPackageTypesSuccessResponse>('/delivery/package/types', config)
    .then((res) => res.data);
