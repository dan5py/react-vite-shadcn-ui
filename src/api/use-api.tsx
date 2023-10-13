import axios from 'axios';
import { useQuery, useMutation, QueryOptions, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';


const axiosClient = axios.create({
    baseURL: 'https://apilink.com/',
  });
  
  export axiosClient;

export type ApiServiceErr = any;

export type MutOpt<Response, TVariables = unknown> = UseMutationOptions<
  Response,
  ApiServiceErr,
  TVariables,
  unknown
>;
export type QueryOpt<Response, TVariables = unknown> = UseQueryOptions<
  Response,
  ApiServiceErr,
  TVariables,
  any[]
>;
interface ParamOptions {
  limit: number;
  page: number;
  sortBy: string;
}

// Create a generic function for making API requests
export const useApiRequest = <Response, TVariables = unknown>(options: {
  method: 'GET' | 'POST';
  url: string;
  data?: any;
  queryParams?: Record<string, string | number>;
  queryKey?: string | string[];
  queryFn?: () => Promise<Response>;
  queryOptions?: UseQueryOptions<Response, ApiServiceErr, Response, TVariables>;
  mutationOptions?: UseMutationOptions<Response, ApiServiceErr, TVariables, unknown>;
}) => {
  if (options.method === 'GET') {
    return useQuery<Response, ApiServiceErr>(
      options.queryKey || options.url,
      async () => {
        const response = await axios.get(options.url, { params: options.queryParams });
        return response.data;
      },
      options.queryOptions,
    );
  } else if (options.method === 'POST') {
    return useMutation<Response, ApiServiceErr, TVariables>(
      async (data) => {
        const response = await axios.post(options.url, data);
        return response.data;
      },
      options.mutationOptions,
    );
  }
};
