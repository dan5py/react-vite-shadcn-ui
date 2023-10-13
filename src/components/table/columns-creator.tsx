import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { labels, icons } from './data/data';
import { Task, Beer, Item, User } from './configs/schema';
import { taskSchema, beerSchema, itemSchema, userSchema } from './configs/schema';
import { DataTableColumnHeader } from './create-table/data-table-column-header';
import { DataTableRowActions } from './create-table/data-table-row-actions';
import { z } from 'zod';

// Define a generic type for the Zod schema
type ZodSchema = Task | Beer | Item | User;

interface ColumnConfig<T extends ZodSchema> {
  accessorKey: string;
  columnType: string;
  columnLabel: string;
  options?: any; // You can specify the options type here
  otherProps?: any; // Additional column-specific properties
}

export const generateColumns = <T extends ZodSchema>(
  configurations: ColumnConfig<T>[],
  schema: z.AnyZodObject,
): ColumnDef<T>[] => {
  const columns: ColumnDef<T>[] = [];

  configurations.forEach((config) => {
    const column: ColumnDef<T> = {
      accessorKey: config.accessorKey,
      header: ({ column }) => <DataTableColumnHeader column={column} title={config.columnLabel} />,
      enableSorting: !config.options || config.options.sortable !== false,
      enableHiding: !config.options || config.options.hideable !== false,
    };

    if (config.columnType === 'checkbox') {
      column.id = 'select';
      column.header = ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
          aria-label='Select all'
          className='translate-y-[2px]'
        />
      );
      column.cell = ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
          className='translate-y-[2px]'
        />
      );
      column.enableSorting = false;
      column.enableHiding = false;
    } else if (config.columnType === 'with-badge') {
      column.cell = ({ row }) => {
        const label = labels.find((label) => label.value === row.getValue(config.accessorKey));

        return (
          <div className='flex space-x-2'>
            {label && <Badge variant='secondary'>{label.label}</Badge>}
            <span>{row.getValue(config.accessorKey)}</span>
          </div>
        );
      };
    } else if (config.columnType === 'with-icon') {
      column.cell = ({ row }) => {
        const icon = icons.find((icon) => icon.value === row.getValue(config.accessorKey));

        if (!icon) {
          return row.getValue(config.accessorKey);
        }

        return (
          <div className='flex items-center'>
            {icon.icon && <icon.icon className='mr-2 h-4 w-4 text-muted-foreground' />}
            <span>{icon.label}</span>
          </div>
        );
      };
      column.filterFn = (row, id, value) => {
        return value.includes(row.getValue(id));
      };
    } else if (config.columnType === 'actions') {
      column.id = 'actions';
      column.cell = ({ row }) => <DataTableRowActions row={row} schema={schema} />;
    } else {
      column.id = config.accessorKey;
      column.cell = ({ row }) => row.getValue(config.accessorKey);
      if (!config.options || config.options.searchable !== true) {
        column.filterFn = (row, id, value) => {
          return value.includes(row.getValue(id));
        };
      }
    }

    columns.push(column);
  });

  return columns;
};

export const textFilter = <T extends ZodSchema>(
  configurations: ColumnConfig<T>[],
): string | undefined => {
  const column = configurations.find((config) => config.options?.searchable === true)?.accessorKey;
  return column;
};

export const selectFilters = <T extends ZodSchema>(
  configurations: ColumnConfig<T>[],
): { columnNames: string[]; columnOptions: any[] } => {
  const columns = configurations.filter(
    (config) => config.options?.selectable === true && config.options?.selectOptions,
  );

  if (!columns) {
    return { columnNames: [], columnOptions: [] };
  } else {
    const columnNames = columns.map((config) => config.accessorKey);
    const columnOptions = columns.map((config) => {
      if (config.options?.selectOptions !== undefined) {
        return { column: config.accessorKey, options: config.options.selectOptions };
      }
    });
    return { columnNames, columnOptions };
  }
};
