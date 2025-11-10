// Generic function to sort the array of tasks
//
// The .sort() method receives a function that compares two items (a, b) and should return:
// - A NEGATIVE number (-1) if "a" should come before "b".
// - A POSITIVE number (1) if "a" should come after "b".
// - ZERO (0) if their order should remain the same.
//
// The function handles:
// 1. If the value is null, send it to the end of the list.
// 2. If it’s a number, sort numerically (asc or desc).
// 3. If it’s a string, sort alphabetically (asc or desc).
//
// The spread operator [...tasks] creates a copy of the original array so it doesn’t mutate it directly.

import type { TaskModel } from '../models/TaskModel';

// Define the expected parameters for the function
export type SortTasksOptions = {
  tasks: TaskModel[]; // List of tasks to be sorted
  direction?: 'asc' | 'desc'; // Sorting direction: ascending or descending (optional)
  field?: keyof TaskModel; // Which task field will be used for sorting (optional)
};

export function sortTasks({
  field = 'startDate', // If no field is provided, 'startDate' is used by default
  direction = 'desc', // If no direction is provided, 'desc' (descending) is used by default
  tasks = [], // If no list is provided, use an empty one
}: SortTasksOptions): TaskModel[] {
  return [...tasks].sort((a, b) => {
    // Get the value of the chosen property (e.g., startDate) from each task
    const aValue = a[field];
    const bValue = b[field];

    // --- HANDLING NULL VALUES ---

    // If both are null, keep the current order
    if (aValue === null && bValue === null) return 0;

    // If only the first is null, move it to the end
    if (aValue === null) return 1;

    // If only the second is null, move it to the end
    if (bValue === null) return -1;

    // --- NUMERIC COMPARISON ---

    // If both values are numbers, subtract them to sort
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc'
        ? aValue - bValue // e.g., 1, 2, 3...
        : bValue - aValue; // e.g., 3, 2, 1...
    }

    // --- STRING COMPARISON ---

    // If both values are strings, use localeCompare to sort alphabetically
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'asc'
        ? aValue.localeCompare(bValue) // A -> Z
        : bValue.localeCompare(aValue); // Z -> A
    }

    // --- UNHANDLED CASES ---

    // If it’s not a number, string, or null, don’t change the order
    return 0;
  });
}
