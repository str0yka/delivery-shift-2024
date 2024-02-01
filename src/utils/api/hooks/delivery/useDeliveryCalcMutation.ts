import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { postDeliveryCalc } from '../../requests';
import type { PostDeliveryCalcRequestBody, PostDeliveryCalcSuccessResponse } from '../../requests';

export const useDeliveryCalcMutation = (
  options?: UseMutationOptions<
    PostDeliveryCalcSuccessResponse,
    unknown,
    {
      data: PostDeliveryCalcRequestBody;
      config: AxiosRequestConfig<PostDeliveryCalcRequestBody>;
    },
    unknown
  >,
) =>
  useMutation({
    mutationKey: ['PostDeliveryCalc'],
    ...options,
    mutationFn: ({ data, config }) => postDeliveryCalc(data, config),
  });
