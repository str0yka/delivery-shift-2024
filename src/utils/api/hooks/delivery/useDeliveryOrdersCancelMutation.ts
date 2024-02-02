import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { putDeliveryOrdersCancel } from '../../requests';
import type {
  PutDeliveryOrdersCancelRequestBody,
  PutDeliveryOrdersCancelSuccessResponse,
} from '../../requests';

export const useDeliveryOrdersCancelMutation = (
  options?: UseMutationOptions<
    PutDeliveryOrdersCancelSuccessResponse,
    ApiFailureResponse,
    {
      data: PutDeliveryOrdersCancelRequestBody;
      config?: AxiosRequestConfig<PutDeliveryOrdersCancelRequestBody>;
    }
  >,
) =>
  useMutation({
    mutationKey: ['PutDeliveryOrdersCancel'],
    ...options,
    mutationFn: ({ data, config }) => putDeliveryOrdersCancel(data, config),
  });
