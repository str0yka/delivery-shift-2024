import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getDeliveryPoints } from '../../requests';
import type { GetDeliveryPointsSuccessResponse } from '../../requests';

interface UseDeliveryPointsQueryParams {
  config?: AxiosRequestConfig<never>;
  options?: UseQueryOptions<GetDeliveryPointsSuccessResponse>;
}

export const useDeliveryPointsQuery = ({ config, options }: UseDeliveryPointsQueryParams) =>
  useQuery({
    queryKey: ['GetDeliveryPoints'],
    ...options,
    queryFn: () => getDeliveryPoints(config),
  });
