import { columns } from "./table/columns"
import { DataTable } from "./table/data-table"

import React, { useEffect, useState } from "react";

// Simulate a database read for tasks.
  export default function TaskPage() {    
    const [tasks, setTasks] = useState([]); // Initial state is an empty array
  const [loading, setLoading] = useState(true); // Initial state is loading

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/tasks.json");
        const tasksData = await response.json();

        setTasks(tasksData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }

    fetchData();
  }, []);
  
    return (
      <DataTable data={tasks} columns={columns} />
    )
  }