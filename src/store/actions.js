import {
  ADD_TODO,
  SET_BUTTON_FILTER,
  REMOVE_TODO,
  SELECT_ALL_TASKS,
  DELETE_COMPLETED,
  TOGGLE_TASK,
  EDIT_TASK,
} from './actionTypes';

export const addTodo = (payload) => ({ type: ADD_TODO, payload });

export const setButtonFilter = (payload) => ({ type: SET_BUTTON_FILTER, payload });

export const removeTodo = (payload) => ({ type: REMOVE_TODO, payload });

export const selectAllTasks = (payload) => ({ type: SELECT_ALL_TASKS, payload });

export const deleteCompleted = (payload) => ({ type: DELETE_COMPLETED, payload });

export const toggleTask = (payload) => ({ type: TOGGLE_TASK, payload });

export const editTask = (payload) => ({ type: EDIT_TASK, payload });