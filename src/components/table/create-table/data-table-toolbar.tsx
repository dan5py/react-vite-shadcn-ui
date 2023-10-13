import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableViewOptions } from './data-table-view-options';

import { DataTableFacetedFilter } from './data-table-faceted-filter';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  text_filter_column?: string;
  select_filter_columns?: string[];
  select_filter_options?: {
    column: string;
    options: { value: string; label: string; icon?: any }[];
  }[];
}

export function DataTableToolbar<TData>({
  table,
  text_filter_column,
  select_filter_columns,
  select_filter_options,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        {text_filter_column && (
          <Input
            placeholder={`Filter op ${text_filter_column.toLowerCase()}`}
            value={(table.getColumn(text_filter_column)?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn(text_filter_column)?.setFilterValue(event.target.value)
            }
            className='h-8 w-[150px] lg:w-[250px]'
          />
        )}
        {select_filter_columns &&
          select_filter_options &&
          select_filter_columns.map((column) => {
            const selectFilterOptions = select_filter_options.find(
              (option) => option.column === column,
            );
            if (selectFilterOptions) {
              const column_name = column.charAt(0).toUpperCase() + column.slice(1);
              return (
                <DataTableFacetedFilter
                  key={column}
                  column={table.getColumn(column)}
                  title={column_name}
                  options={selectFilterOptions.options}
                />
              );
            }
            console.log('Geen opties beschikbaar voor: ', column);
            return null;
          })}
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
