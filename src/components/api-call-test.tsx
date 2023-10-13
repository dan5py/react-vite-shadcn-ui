import React from 'react';
import { queryBeers } from '@/api/query-kit'; // Import your query functions
import type { Beer } from '@/api/types';

export default function getBeers() {
  // Example 1: Use the component with a general query
  const variables = { size: 20 };

  //   // Example 2: Use the component with a specific query
  //   const specificQuery = queryBeers;
  //   const specificVariables: Variables = { id: 6782 };

  const { data } = queryBeers({ variables });
  console.log(data);

  return (
    <div>
      <h2>General Beer Query</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
