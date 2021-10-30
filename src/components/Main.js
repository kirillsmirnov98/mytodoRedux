import './Main.style.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from './TodoForm';
import Todo from './Todo';
import TodoFilter from './TodoFilter';
import { getLocalStor, getLocalStorFilter } from '../store/actions';

const Main = () => {
  const dispatch = useDispatch()
  let reduxTodos = useSelector(state => state.reducer.todos);
  let reduxFilter = useSelector(state => state.reducer.filter);
  const todos = JSON.parse(localStorage.getItem('todos'));
  const filter = JSON.parse(localStorage.getItem('filter'));
  // const [filter, setFilter]
  useEffect(() => {
    if(todos) {
      const localS = JSON.parse(localStorage.getItem('todos'));
      dispatch(getLocalStor(localS));
    }
    if(filter) {
      const localS = JSON.parse(localStorage.getItem('filter'));
      dispatch(getLocalStorFilter(localS));
    }   
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(reduxTodos));
  }, [reduxTodos]);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(reduxFilter));
  }, [reduxFilter]);

  let completedItemsCount = 0;
  let activeItemsCount = 0;
  reduxTodos.forEach((item) => {
    if (item.complete) {
      completedItemsCount++;
    } else {
      activeItemsCount++;
    }
  });

  return (
    <div className="main">
      <TodoForm
        length={reduxTodos.length}
      >
      </TodoForm>
      {reduxFilter === "all" && reduxTodos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={reduxTodos.id}
          />
        )
      })}
      {reduxFilter === "completed" && reduxTodos.map((todo) => {
        if (todo.complete)
          return (
            <Todo
              todo={todo}
              key={reduxTodos.id}
            />
          )
      })}
      {reduxFilter === "active" && reduxTodos.map((todo) => {
        if (!todo.complete)
          return (
            <Todo
              todo={todo}
              key={reduxTodos.id}
            />
          )
      })}
      {reduxTodos.length > 0 && (
        <TodoFilter
          length={activeItemsCount}
          currentValue={completedItemsCount}
        />
      )}
    </div>

  )
}

export default Main;