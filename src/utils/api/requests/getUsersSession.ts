import { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

type GetUsersSessionResponse =
  | {
      success: false;
      reason: string;
    }
  | {
      success: true;
      user: User;
    };

export const getUsersSession = async (config?: AxiosRequestConfig<never>) =>
  api.get<GetUsersSessionResponse>(`${import.meta.env.VITE_API_URL}/users/session`, config);
