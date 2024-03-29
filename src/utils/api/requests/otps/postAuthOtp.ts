import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export interface PostAuthOtpRequestBody {
  phone: string;
}

export type PostAuthOtpSuccessResponse = ApiSuccessResponse<{ retryDelay: number }>;

export const postAuthOtp = async (
  data: PostAuthOtpRequestBody,
  config?: AxiosRequestConfig<PostAuthOtpRequestBody>,
) => api.post<PostAuthOtpSuccessResponse>('/auth/otp', data, config).then((res) => res.data);
