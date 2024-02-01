import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { postDeliveryOrder } from '../../requests';
import type {
  PostDeliveryOrderFailureResponse,
  PostDeliveryOrderRequestBody,
  PostDeliveryOrderSuccessResponse,
} from '../../requests';

export const useDeliveryOrderMutation = (
  options?: UseMutationOptions<
    PostDeliveryOrderSuccessResponse,
    PostDeliveryOrderFailureResponse,
    {
      data: PostDeliveryOrderRequestBody;
      config?: AxiosRequestConfig<PostDeliveryOrderRequestBody>;
    },
    unknown
  >,
) =>
  useMutation({
    mutationKey: ['PostDeliveryOrder'],
    ...options,
    mutationFn: ({ data, config }) => postDeliveryOrder(data, config),
  });
