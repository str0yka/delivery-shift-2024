import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export type GetUsersSessionSuccessResponse = {
  success: true;
  user: User;
};

export type GetUsersSessionFailureResponse = {
  success: false;
  reason: string;
};

export const getUsersSession = async (config?: AxiosRequestConfig<never>) =>
  api.get<GetUsersSessionSuccessResponse>('/users/session', config).then((res) => res.data);
