import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export type GetUsersSessionSuccessResponse = ApiSuccessResponse<{
  user: User;
}>;

export const getUsersSession = async (config?: AxiosRequestConfig<never>) =>
  api.get<GetUsersSessionSuccessResponse>('/users/session', config).then((res) => res.data);
