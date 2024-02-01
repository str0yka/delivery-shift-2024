import type { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

export interface PostUsersSigninRequestBody {
  phone: string;
  code: number;
}

export type PostUsersSigninSuccessResponse = {
  success: true;
  user: User;
  token: string;
};

export type PostUsersSigninFailureResponse = {
  success: false;
  reason: string;
};

export const postUsersSignin = async (
  data: PostUsersSigninRequestBody,
  config?: AxiosRequestConfig<PostUsersSigninRequestBody>,
) =>
  api.post<PostUsersSigninSuccessResponse>('/users/signin', data, config).then((res) => res.data);
