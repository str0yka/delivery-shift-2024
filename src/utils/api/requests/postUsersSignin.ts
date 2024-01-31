import { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

interface PostUsersSigninRequestBody {
  phone: string;
  code: number;
}

type PostUsersSigninResponse =
  | {
      success: false;
      reason: string;
    }
  | {
      success: true;
      user: User;
      token: string;
    };

export const postUsersSignin = async (
  data: PostUsersSigninRequestBody,
  config?: AxiosRequestConfig<PostUsersSigninRequestBody>,
) =>
  api.post<PostUsersSigninResponse>(`${import.meta.env.VITE_API_URL}/users/signin`, data, config);
