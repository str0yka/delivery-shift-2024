import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { putDeliveryOrdersCancel } from '../../requests';
import type {
  PutDeliveryOrdersCancelRequestBody,
  PutDeliveryOrdersCancelResponse,
} from '../../requests';

export const useDeliveryOrdersCancelMutation = (
  options?: UseMutationOptions<
    PutDeliveryOrdersCancelResponse,
    unknown,
    {
      data: PutDeliveryOrdersCancelRequestBody;
      config?: AxiosRequestConfig<PutDeliveryOrdersCancelRequestBody>;
    },
    unknown
  >,
) =>
  useMutation({
    mutationKey: ['PutDeliveryOrdersCancel'],
    ...options,
    mutationFn: ({ data, config }) => putDeliveryOrdersCancel(data, config),
  });
