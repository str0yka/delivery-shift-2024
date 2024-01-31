import { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

interface PatchUsersProfileRequestBody {
  profile: Omit<NonNullable<User>, 'phone'>;
  phone: string;
}

interface PatchUsersProfileResponse {
  success: boolean;
  reason?: string;
}

export const patchUsersProfile = async (
  data: PatchUsersProfileRequestBody,
  config?: AxiosRequestConfig<PatchUsersProfileRequestBody>,
) =>
  api.patch<PatchUsersProfileResponse>(
    `${import.meta.env.VITE_API_URL}/users/profile`,
    data,
    config,
  );
