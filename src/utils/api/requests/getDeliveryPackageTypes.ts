import { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

type GetDeliveryPackageTypesResponse =
  | {
      success: false;
      reason: string;
    }
  | {
      success: true;
      packages: DeliveryPackageType[];
    };

export const getDeliveryPackageTypes = async (config?: AxiosRequestConfig<never>) =>
  api.get<GetDeliveryPackageTypesResponse>(
    `${import.meta.env.VITE_API_URL}/delivery/package/types`,
    config,
  );
