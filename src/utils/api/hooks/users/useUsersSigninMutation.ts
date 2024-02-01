import type { AxiosRequestConfig } from 'axios';
import { useMutation } from 'react-query';
import type { UseMutationOptions } from 'react-query';

import { postUsersSignin } from '../../requests';
import type {
  PostUsersSigninFailureResponse,
  PostUsersSigninRequestBody,
  PostUsersSigninSuccessResponse,
} from '../../requests';

interface UseUsersSigninMutationParams {
  data: PostUsersSigninRequestBody;
  config?: AxiosRequestConfig<PostUsersSigninRequestBody>;
  options?: UseMutationOptions<
    PostUsersSigninSuccessResponse,
    PostUsersSigninFailureResponse,
    void,
    unknown
  >;
}

export const useUsersSigninMutation = ({ data, config, options }: UseUsersSigninMutationParams) =>
  useMutation({
    mutationKey: ['PostUsersSignin'],
    ...options,
    mutationFn: () => postUsersSignin(data, config),
  });
