import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getDeliveryPoints } from '../../requests';
import type { GetDeliveryPointsSuccessResponse } from '../../requests';

interface UseDeliveryPointsQueryParams {
  config?: AxiosRequestConfig;
  options?: UseQueryOptions<GetDeliveryPointsSuccessResponse, ApiFailureResponse>;
}

export const useDeliveryPointsQuery = (params?: UseDeliveryPointsQueryParams) =>
  useQuery({
    queryKey: ['GetDeliveryPoints'],
    ...params?.options,
    queryFn: () => getDeliveryPoints(params?.config),
  });
