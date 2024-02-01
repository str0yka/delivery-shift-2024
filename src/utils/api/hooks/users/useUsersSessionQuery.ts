import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getUsersSession } from '../../requests';
import type { GetUsersSessionSuccessResponse } from '../../requests';

interface UseUsersSessionQueryParams {
  config?: AxiosRequestConfig<never>;
  options?: UseQueryOptions<GetUsersSessionSuccessResponse>;
}

export const useUsersSessionQuery = ({ config, options }: UseUsersSessionQueryParams) =>
  useQuery({
    queryKey: ['GetUsersSession'],
    ...options,
    queryFn: () => getUsersSession(config),
  });
