import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { postAuthOtp } from '../../requests';
import type { PostAuthOtpRequestBody, PostAuthOtpResponse } from '../../requests';

export const useAuthOtpMutation = (
  options?: UseMutationOptions<
    PostAuthOtpResponse,
    unknown,
    {
      data: PostAuthOtpRequestBody;
      config?: AxiosRequestConfig<PostAuthOtpRequestBody>;
    },
    unknown
  >,
) =>
  useMutation({
    mutationKey: ['PostAuthOtp'],
    ...options,
    mutationFn: ({ data, config }) => postAuthOtp(data, config),
  });
