import React from 'react';
import { generateColumns, textFilter, selectFilters } from '../columns-creator';

// Import your Beer schema from where it's defined
import { beerSchema, Beer } from './schema';
import { icons } from '../data/data';

// Define the configuration for the Beer API columns
export const beerConfigurations = [
  {
    accessorKey: 'check',
    columnType: 'checkbox',
    columnLabel: '',
    options: {
      sortable: false,
      hideable: false,
    },
  },
  {
    accessorKey: 'brand',
    columnType: 'with-badge',
    columnLabel: 'Brand',
    options: {
      searchable: true,
    },
  },
  {
    accessorKey: 'malts',
    columnType: 'text',
    columnLabel: 'Malts',
    options: {
      sortable: false,
    },
  },
  {
    accessorKey: 'hop',
    columnType: 'text',
    columnLabel: 'Hop',
    options: {
      sortable: false,
    },
  },
  {
    accessorKey: 'name',
    columnType: 'text',
    columnLabel: 'Name',
  },
  {
    accessorKey: 'style',
    columnType: 'with-icon',
    columnLabel: 'Style',
    options: {
      selectable: true,
      selectOptions: icons,
    },
  },
  {
    accessorKey: 'action',
    columnType: 'actions',
    columnLabel: '',
    options: {
      sortable: false,
      hideable: false,
    },
  },
  // Add more columns as needed
];
// Call generateColumns with the Beer schema and configurations
export const beerColumns = generateColumns<Beer>(beerConfigurations, beerSchema);

export const textFilteredColumn = textFilter(beerConfigurations);

let { columnNames, columnOptions } = selectFilters(beerConfigurations);

export { columnNames, columnOptions };
