import { createSelector } from 'reselect';

const getTodos = state => state.reducer.todos;
const getFilter = state => state.reducer.filter;

export const getAllTasks = createSelector(
  getTodos,
  allTasks => allTasks,
);
export const getCurrentFilter = createSelector(
  getFilter,
  filter => filter,
);
export const getActiveTasks = createSelector(
  getTodos,
  allTasks => allTasks.filter(todo => todo.complete === false),
);
export const getCompletedTasks = createSelector(
  getTodos,
  allTasks => allTasks.filter(todo => todo.complete === true),
);