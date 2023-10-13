import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import axiosClient from './helpers/axios-client';
import type { Beer } from './types';

export type Response = Beer[];
export type Variables = { id?: number; size?: number | undefined };

export const queryBeers = createQuery<Response, Variables, AxiosError>({
  primaryKey: 'beers',
  queryFn: ({ queryKey: [primaryKey, variables] }) => {
    // Destructure the variables
    const { id, size } = variables;

    // Construct the URL based on the parameters
    let url = `${primaryKey}`;

    if (id !== undefined) {
      url += `/${id}`;
    } else if (size !== undefined) {
      const queryParams = new URLSearchParams();
      queryParams.append('size', size.toString());
      url += `?${queryParams.toString()}`;
    }

    return axiosClient.get(url).then((response) => response.data);
  },
});
