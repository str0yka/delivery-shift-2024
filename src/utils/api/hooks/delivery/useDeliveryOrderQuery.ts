import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getDeliveryOrder } from '../../requests';
import type { GetDeliveryOrderSuccessResponse } from '../../requests';

interface UseDeliveryOrderQueryParams {
  data: {
    orderId: number;
  };
  config?: AxiosRequestConfig;
  options?: UseQueryOptions<GetDeliveryOrderSuccessResponse, ApiFailureResponse>;
}

export const useDeliveryOrderQuery = ({ data, config, options }: UseDeliveryOrderQueryParams) =>
  useQuery({
    queryKey: ['GetDeliveryOrder'],
    ...options,
    queryFn: () => getDeliveryOrder(data.orderId, config),
  });
