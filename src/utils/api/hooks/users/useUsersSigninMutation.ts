import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { postUsersSignin } from '../../requests';
import type {
  PostUsersSigninFailureResponse,
  PostUsersSigninRequestBody,
  PostUsersSigninSuccessResponse,
} from '../../requests';

export const useUsersSigninMutation = (
  options?: UseMutationOptions<
    PostUsersSigninSuccessResponse,
    PostUsersSigninFailureResponse,
    {
      data: PostUsersSigninRequestBody;
      config?: AxiosRequestConfig<PostUsersSigninRequestBody>;
    },
    unknown
  >,
) =>
  useMutation({
    mutationKey: ['PostUsersSignin'],
    ...options,
    mutationFn: ({ data, config }) => postUsersSignin(data, config),
  });
