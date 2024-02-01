import type { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

export type GetDeliveryPackageTypesSuccessResponse = {
  success: true;
  packages: DeliveryPackageType[];
};

export type GetDeliveryPackageTypesFailureResponse = {
  success: false;
  reason: string;
};

export const getDeliveryPackageTypes = async (config?: AxiosRequestConfig<never>) =>
  api
    .get<GetDeliveryPackageTypesSuccessResponse>('/delivery/package/types', config)
    .then((res) => res.data);
