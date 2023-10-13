import React from 'react';
import { generateColumns, textFilter, selectFilters } from '../columns-creator';

// Import your task schema from where it's defined
import { taskSchema, Task } from './schema';
import { icons, priorities, statuses } from '../data/data';

// Define the configuration for the task API columns
export const taskConfigurations = [
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
    accessorKey: 'id',
    columnType: 'with-badge',
    columnLabel: 'Task',
    options: {
      searchable: true,
    },
  },
  {
    accessorKey: 'title',
    columnType: 'text',
    columnLabel: 'Title',
    options: {
      sortable: false,
    },
  },
  {
    accessorKey: 'status',
    columnType: 'with-icon',
    columnLabel: 'Status',
    options: {
      sortable: true,
      selectable: true,
      selectOptions: statuses,
    },
  },
  {
    accessorKey: 'priority',
    columnType: 'with-icon',
    columnLabel: 'Priority',
    options: {
      sortable: true,
      selectable: true,
      selectOptions: priorities,
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
// Call generateColumns with the task schema and configurations
export const taskColumns = generateColumns<Task>(taskConfigurations, taskSchema);

export const textFilteredColumn = textFilter(taskConfigurations);

let { columnNames, columnOptions } = selectFilters(taskConfigurations);

export { columnNames, columnOptions };
