import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { patchUsersProfile } from '../../requests';
import type { PatchUsersProfileRequestBody, PatchUsersProfileResponse } from '../../requests';

interface UseUsersProfileMutationParams {
  data: PatchUsersProfileRequestBody;
  config?: AxiosRequestConfig<PatchUsersProfileRequestBody>;
  options?: UseMutationOptions<PatchUsersProfileResponse, unknown, void, unknown>;
}

export const useUsersProfileMutation = ({ data, config, options }: UseUsersProfileMutationParams) =>
  useMutation({
    mutationKey: ['PatchUsersProfile'],
    ...options,
    mutationFn: () => patchUsersProfile(data, config),
  });
