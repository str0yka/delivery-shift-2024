import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { postAuthOtp } from '../../requests';
import type { PostAuthOtpRequestBody, PostAuthOtpSuccessResponse } from '../../requests';

export const useAuthOtpMutation = (
  options?: UseMutationOptions<
    PostAuthOtpSuccessResponse,
    ApiFailureResponse,
    {
      data: PostAuthOtpRequestBody;
      config?: AxiosRequestConfig<PostAuthOtpRequestBody>;
    }
  >,
) =>
  useMutation({
    mutationKey: ['PostAuthOtp'],
    ...options,
    mutationFn: ({ data, config }) => postAuthOtp(data, config),
  });
