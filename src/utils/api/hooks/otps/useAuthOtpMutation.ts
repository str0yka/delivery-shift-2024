import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { postAuthOtp } from '../../requests';
import type { PostAuthOtpRequestBody, PostAuthOtpResponse } from '../../requests';

interface UseAuthOtpMutationParams {
  data: PostAuthOtpRequestBody;
  config?: AxiosRequestConfig<PostAuthOtpRequestBody>;
  options?: UseMutationOptions<PostAuthOtpResponse, unknown, void, unknown>;
}

export const useAuthOtpMutation = ({ data, config, options }: UseAuthOtpMutationParams) =>
  useMutation({
    mutationKey: ['PostAuthOtp'],
    ...options,
    mutationFn: () => postAuthOtp(data, config),
  });
