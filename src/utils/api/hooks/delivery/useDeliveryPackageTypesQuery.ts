import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getDeliveryPackageTypes } from '../../requests';
import type { GetDeliveryPackageTypesSuccessResponse } from '../../requests';

interface UseDeliveryPackageTypesQueryParams {
  config?: AxiosRequestConfig;
  options?: UseQueryOptions<GetDeliveryPackageTypesSuccessResponse, ApiFailureResponse>;
}

export const useDeliveryPackageTypesQuery = (params?: UseDeliveryPackageTypesQueryParams) =>
  useQuery({
    queryKey: ['GetDeliveryPackageTypes'],
    ...params?.options,
    queryFn: () => getDeliveryPackageTypes(params?.config),
  });
