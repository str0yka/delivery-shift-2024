import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getDeliveryOrders } from '../../requests';
import type { GetDeliveryOrdersSuccessResponse } from '../../requests';

interface UseDeliveryOrdersQueryParams {
  config?: AxiosRequestConfig;
  options?: UseQueryOptions<GetDeliveryOrdersSuccessResponse, ApiFailureResponse>;
}

export const useDeliveryOrdersQuery = (params?: UseDeliveryOrdersQueryParams) =>
  useQuery({
    queryKey: ['GetDeliveryOrders'],
    ...params?.options,
    queryFn: () => getDeliveryOrders(params?.config),
  });
