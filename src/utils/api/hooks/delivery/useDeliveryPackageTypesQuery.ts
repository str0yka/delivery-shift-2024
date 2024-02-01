import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getDeliveryPackageTypes } from '../../requests';
import type { GetDeliveryPackageTypesSuccessResponse } from '../../requests';

interface UseDeliveryPackageTypesQueryParams {
  config?: AxiosRequestConfig<never>;
  options?: UseQueryOptions<GetDeliveryPackageTypesSuccessResponse>;
}

export const useDeliveryPackageTypesQuery = ({
  config,
  options,
}: UseDeliveryPackageTypesQueryParams) =>
  useQuery({
    queryKey: ['GetDeliveryPackageTypes'],
    ...options,
    queryFn: () => getDeliveryPackageTypes(config),
  });
