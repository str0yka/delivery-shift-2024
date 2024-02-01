import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getDeliveryOrder } from '../requests';
import type { GetDeliveryOrderSuccessResponse, GetDeliveryOrderFailureResponse } from '../requests';

interface UseDeliveryOrderQueryParams {
  orderId: number;
  config?: AxiosRequestConfig<never>;
  options?: UseQueryOptions<GetDeliveryOrderSuccessResponse, GetDeliveryOrderFailureResponse>;
}

export const useDeliveryOrderQuery = ({ orderId, config, options }: UseDeliveryOrderQueryParams) =>
  useQuery({
    queryKey: ['GetDeliveryOrder'],
    ...options,
    queryFn: () => getDeliveryOrder(orderId, config),
  });
