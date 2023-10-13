import React, { useState, useEffect } from 'react';
import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

type DynamicQueryProps<V, R> = {
  queryKey: typeof createQuery;
  queryFn: (queryKey: typeof createQuery) => Promise<R>;
};

function DynamicQuery<V, R>({ queryKey, queryFn }: DynamicQueryProps<V, R>) {
  const [data, setData] = useState<R | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    // Execute the query function with the provided queryKey
    queryFn(queryKey)
      .then((response) => {
        setData(response);
      })
      .catch((err: AxiosError) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [queryFn, queryKey]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    // Render the response data or customize it as needed
    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

  return null;
}

export default DynamicQuery;
