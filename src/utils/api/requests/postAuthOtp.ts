import { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

interface PostAuthOtpRequestBody {
  phone: string;
}

interface PostAuthOtpResponse {
  success: boolean;
  reason?: string;
  retryDelay: number;
}

export const postAuthOtp = async (
  data: PostAuthOtpRequestBody,
  config?: AxiosRequestConfig<PostAuthOtpRequestBody>,
) => api.post<PostAuthOtpResponse>(`${import.meta.env.VITE_API_URL}/auth/otp`, data, config);
