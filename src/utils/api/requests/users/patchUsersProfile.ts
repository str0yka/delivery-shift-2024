import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export interface PatchUsersProfileRequestBody {
  profile: Omit<NonNullable<User>, 'phone'>;
  phone: string;
}

export type PatchUsersProfileSuccessResponse = ApiSuccessResponse;

export const patchUsersProfile = async (
  data: PatchUsersProfileRequestBody,
  config?: AxiosRequestConfig<PatchUsersProfileRequestBody>,
) =>
  api
    .patch<PatchUsersProfileSuccessResponse>('/users/profile', data, config)
    .then((res) => res.data);
