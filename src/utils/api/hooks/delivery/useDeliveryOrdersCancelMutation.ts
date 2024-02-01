import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { putDeliveryOrdersCancel } from '../../requests';
import type {
  PutDeliveryOrdersCancelRequestBody,
  PutDeliveryOrdersCancelResponse,
} from '../../requests';

interface UseDeliveryOrdersCancelMutationParams {
  data: PutDeliveryOrdersCancelRequestBody;
  config?: AxiosRequestConfig<PutDeliveryOrdersCancelRequestBody>;
  options?: UseMutationOptions<PutDeliveryOrdersCancelResponse, unknown, void, unknown>;
}

export const useDeliveryOrdersCancelMutation = ({
  data,
  config,
  options,
}: UseDeliveryOrdersCancelMutationParams) =>
  useMutation({
    mutationKey: ['PutDeliveryOrdersCancel'],
    ...options,
    mutationFn: () => putDeliveryOrdersCancel(data, config),
  });
