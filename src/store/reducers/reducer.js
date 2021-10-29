import {
  ADD_TODO,
  SET_BUTTON_FILTER,
  REMOVE_TODO,
  SELECT_ALL_TASKS,
  DELETE_COMPLETED,
  TOGGLE_TASK,
  EDIT_TASK,
} from '../actionTypes';

const getInitialState = () => ({
  todos: [],
  filter: 'all',
});

export default (state = getInitialState(), action) => {
  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case SET_BUTTON_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };

    case SELECT_ALL_TASKS:
      return {
        ...state,
        todos: [...state.todos.map((todo) =>
          !action.payload ? { ...todo, complete: true } : { ...todo, complete: false })]
      };

    case DELETE_COMPLETED:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.complete !== action.payload)]
      };

    case TOGGLE_TASK:
      return {
        ...state,
        todos: [...state.todos.map(todo =>
          action.payload === todo.id ? { ...todo, complete: !todo.complete } : { ...todo }
        )]
      };

    case EDIT_TASK:
      return {
        ...state,
        todos: [...state.todos.map((todo) => 
          todo.id === action.payload.id ? { ...todo, task: action.payload.value } : { ...todo }
          )]
      };

    default:
      return state;
  }
};
