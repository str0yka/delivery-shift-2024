import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getUsersSession } from '../requests';
import type { GetUsersSessionFailureResponse, GetUsersSessionSuccessResponse } from '../requests';

interface UseUsersSessionQueryParams {
  config?: AxiosRequestConfig<never>;
  options?: UseQueryOptions<GetUsersSessionSuccessResponse, GetUsersSessionFailureResponse>;
}

export const useUsersSessionQuery = ({ config, options }: UseUsersSessionQueryParams) =>
  useQuery({
    queryKey: ['GetUsersSession'],
    ...options,
    queryFn: () => getUsersSession(config),
  });
