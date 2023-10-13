// import { statuses, priorities } from './table/data/data';
import { DataTable } from './table/data-table';
import { useEffect, useState } from 'react';
import {
  taskColumns,
  textFilteredColumn,
  columnNames,
  columnOptions,
} from './table/configs/columns-task';
// Simulate a database read for tasks.
export default function TaskPage() {
  const [tasks, setTasks] = useState([]); // Initial state is an empty array
  const [loading, setLoading] = useState(true); // Initial state is loading

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/tasks.json');
        const tasksData = await response.json();

        setTasks(tasksData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!tasks) {
    return null;
  }
  return (
    <DataTable
      data={tasks}
      columns={taskColumns}
      textFilterColumn={textFilteredColumn}
      selectFilterColumns={columnNames}
      selectFilterOptions={columnOptions}
    />
  );
}
