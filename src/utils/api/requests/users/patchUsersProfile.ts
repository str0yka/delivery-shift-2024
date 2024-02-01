import type { AxiosRequestConfig } from 'axios';

import { api } from '../../instance';

export interface PatchUsersProfileRequestBody {
  profile: Omit<NonNullable<User>, 'phone'>;
  phone: string;
}

export interface PatchUsersProfileResponse {
  success: boolean;
  reason?: string;
}

export const patchUsersProfile = async (
  data: PatchUsersProfileRequestBody,
  config?: AxiosRequestConfig<PatchUsersProfileRequestBody>,
) => api.patch<PatchUsersProfileResponse>('/users/profile', data, config).then((res) => res.data);
