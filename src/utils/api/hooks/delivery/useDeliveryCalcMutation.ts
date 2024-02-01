import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { postDeliveryCalc } from '../../requests';
import type {
  PostDeliveryCalcFailureResponse,
  PostDeliveryCalcRequestBody,
  PostDeliveryCalcSuccessResponse,
} from '../../requests';

interface UseDeliveryCalcMutationParams {
  data: PostDeliveryCalcRequestBody;
  config?: AxiosRequestConfig<PostDeliveryCalcRequestBody>;
  options?: UseMutationOptions<
    PostDeliveryCalcSuccessResponse,
    PostDeliveryCalcFailureResponse,
    void,
    unknown
  >;
}

export const useDeliveryCalcMutation = ({ data, config, options }: UseDeliveryCalcMutationParams) =>
  useMutation({
    mutationKey: ['PostDeliveryCalc'],
    ...options,
    mutationFn: () => postDeliveryCalc(data, config),
  });
