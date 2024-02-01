import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getDeliveryPackageTypes } from '../../requests';
import type {
  GetDeliveryPackageTypesSuccessResponse,
  GetDeliveryPackageTypesFailureResponse,
} from '../../requests';

interface UseDeliveryPackageTypesQueryParams {
  config?: AxiosRequestConfig<never>;
  options?: UseQueryOptions<
    GetDeliveryPackageTypesSuccessResponse,
    GetDeliveryPackageTypesFailureResponse
  >;
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
