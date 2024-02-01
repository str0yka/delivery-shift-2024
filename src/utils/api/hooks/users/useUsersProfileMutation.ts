import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { patchUsersProfile } from '../../requests';
import type { PatchUsersProfileRequestBody, PatchUsersProfileResponse } from '../../requests';

export const useUsersProfileMutation = (
  options?: UseMutationOptions<
    PatchUsersProfileResponse,
    unknown,
    {
      data: PatchUsersProfileRequestBody;
      config?: AxiosRequestConfig<PatchUsersProfileRequestBody>;
    },
    unknown
  >,
) =>
  useMutation({
    mutationKey: ['PatchUsersProfile'],
    ...options,
    mutationFn: ({ data, config }) => patchUsersProfile(data, config),
  });
