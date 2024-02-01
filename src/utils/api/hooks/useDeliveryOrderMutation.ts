import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { postDeliveryOrder } from '../requests';
import type {
  PostDeliveryOrderFailureResponse,
  PostDeliveryOrderRequestBody,
  PostDeliveryOrderSuccessResponse,
} from '../requests';

interface UseDeliveryOrderMutationParams {
  data: PostDeliveryOrderRequestBody;
  config?: AxiosRequestConfig<PostDeliveryOrderRequestBody>;
  options?: UseMutationOptions<
    PostDeliveryOrderSuccessResponse,
    PostDeliveryOrderFailureResponse,
    void,
    unknown
  >;
}

export const useDeliveryOrderMutation = ({
  data,
  config,
  options,
}: UseDeliveryOrderMutationParams) =>
  useMutation({
    mutationKey: ['PostDeliveryOrder'],
    ...options,
    mutationFn: () => postDeliveryOrder(data, config),
  });
