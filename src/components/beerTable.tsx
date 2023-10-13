import { DataTable } from './table/data-table';
import { queryBeers } from '@/api/query-kit'; // Import your query functions
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import {
  beerColumns,
  textFilteredColumn,
  columnNames,
  columnOptions,
} from './table/configs/columns-beer';
import { beerSchemas, Beer } from './table/configs/schema';

export default function BeerPage() {
  const [beers, setBeers] = useState<Beer[] | Beer | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError<unknown, any> | null>(null);

  const variables = { size: 20 };
  const { data, error: queryError } = queryBeers({ variables });

  useEffect(() => {
    if (queryError) {
      setError(queryError);
      setLoading(false);
    } else if (data) {
      // Render the response data or customize it as needed
      const parsedData = beerSchemas.parse(data);
      setBeers(parsedData);
      setLoading(false);
    }
  }, [data, queryError]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!beers) {
    return null;
  }
  return (
    <DataTable
      data={beers}
      columns={beerColumns}
      textFilterColumn={textFilteredColumn}
      selectFilterColumns={columnNames}
      selectFilterOptions={columnOptions}
    />
  );
}
