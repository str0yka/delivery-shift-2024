import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getDeliveryOrders } from '../../requests';
import type { GetDeliveryOrdersSuccessResponse } from '../../requests';

interface UseDeliveryOrdersQueryParams {
  config?: AxiosRequestConfig<never>;
  options?: UseQueryOptions<GetDeliveryOrdersSuccessResponse>;
}

export const useDeliveryOrdersQuery = ({ config, options }: UseDeliveryOrdersQueryParams) =>
  useQuery({
    queryKey: ['GetDeliveryOrders'],
    ...options,
    queryFn: () => getDeliveryOrders(config),
  });
