import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { patchUsersProfile } from '../../requests';
import type {
  PatchUsersProfileRequestBody,
  PatchUsersProfileSuccessResponse,
} from '../../requests';

export const useUsersProfileMutation = (
  options?: UseMutationOptions<
    PatchUsersProfileSuccessResponse,
    ApiFailureResponse,
    {
      data: PatchUsersProfileRequestBody;
      config?: AxiosRequestConfig<PatchUsersProfileRequestBody>;
    }
  >,
) =>
  useMutation({
    mutationKey: ['PatchUsersProfile'],
    ...options,
    mutationFn: ({ data, config }) => patchUsersProfile(data, config),
  });
