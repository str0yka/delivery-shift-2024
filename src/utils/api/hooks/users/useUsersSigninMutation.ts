import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { postUsersSignin } from '../../requests';
import type { PostUsersSigninRequestBody, PostUsersSigninSuccessResponse } from '../../requests';

export const useUsersSigninMutation = (
  options?: UseMutationOptions<
    PostUsersSigninSuccessResponse,
    ApiFailureResponse,
    {
      data: PostUsersSigninRequestBody;
      config?: AxiosRequestConfig<PostUsersSigninRequestBody>;
    }
  >,
) =>
  useMutation({
    mutationKey: ['PostUsersSignin'],
    ...options,
    mutationFn: ({ data, config }) => postUsersSignin(data, config),
  });
