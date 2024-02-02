import type { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query';

import { getUsersSession } from '../../requests';
import type { GetUsersSessionSuccessResponse } from '../../requests';

interface UseUsersSessionQueryParams {
  config?: AxiosRequestConfig;
  options?: UseQueryOptions<GetUsersSessionSuccessResponse, ApiFailureResponse>;
}

export const useUsersSessionQuery = (params?: UseUsersSessionQueryParams) =>
  useQuery({
    queryKey: ['GetUsersSession'],
    ...params?.options,
    queryFn: () => getUsersSession(params?.config),
  });
