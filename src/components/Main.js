import './Main.style.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './TodoForm';
import Todo from './Todo';
import TodoFilter from './TodoFilter';
import { getActiveTasks, getAllTasks, getCompletedTasks, getCurrentFilter } from '../store/selectors';
import { getLocalFilter, getLocalStore } from '../store/actions';

const Main = () => {
  const dispatch = useDispatch();
  let todos = useSelector(getAllTasks);
  let filter = useSelector(getCurrentFilter);
  let activeTasks = useSelector(getActiveTasks);
  let completedTasks = useSelector(getCompletedTasks);

  const localTodos = JSON.parse(localStorage.getItem('todos'));
  const localFilter = localStorage.getItem('filter');

  useEffect(() => {
    if (localTodos) {
      const localStore = JSON.parse(localStorage.getItem('todos'));
      dispatch(getLocalStore(localStore));
    }
    if(localFilter) {
      const localStoreFilter = localStorage.getItem('filter');
      dispatch(getLocalFilter(localStoreFilter));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter]);

  return (
    <div className="main">
      <TodoForm
        length={todos.length}
      >
      </TodoForm>
      {filter === "all" && todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todos.id}
          />
        )
      })}
      {filter === "completed" && completedTasks.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todos.id}
          />
        )
      })}
      {filter === "active" && activeTasks.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todos.id}
          />
        )
      })}
      {todos.length > 0 && (
        <TodoFilter
          activeLength={activeTasks.length}
          completedLength={completedTasks.length}
        />
      )}
    </div>

  )
}

export default Main;