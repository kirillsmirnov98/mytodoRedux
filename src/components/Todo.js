import './Todo.style.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, removeTodo, toggleTask } from '../store/actions';

const Todo = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.task);
  const dispatch = useDispatch();

  const taskEditing = () => {
    setEdit(!edit);
  }
  const handleChangeTask = (e) => {
    setText(e.currentTarget.value);
  }
  const handleEditTask = (e) => {
    if (e.key === 'Enter') {
      editCurrentTask(todo.id, text);
      setEdit(!edit);
    }
  }
  const removeCurrentTodo = (id) => {
    dispatch(removeTodo(id));
  }
  const toggleCurrentTask = (id) => {
    dispatch(toggleTask(id));
  }

  const editCurrentTask = (id, value) => {
    dispatch(editTask({id, value}));
  }

  return (
    <div
      key={todo.id}
      className="todoitem"
    >
      {!edit && (
        <input
          className="todocheckbox"
          checked={todo.complete ? true : false}
          type="checkbox"
          onChange={() => toggleCurrentTask(todo.id)}
        />
      )}
      {!edit && (
        <label
          className={todo.complete ? "item-text disactive" : "item-text active"}
          onDoubleClick={taskEditing}
        >
          {todo.task}
        </label>
      )}
      {edit && (
        <input
          value={text}
          type="text"
          className="todo-edit-panel"
          onChange={handleChangeTask}
          onKeyDown={handleEditTask}
          autoFocus=""
        />
      )}
      {!edit && (
        <div
          className="todo-delete"
          onClick={() => removeCurrentTodo(todo.id)}
        >
          x
        </div>
      )}
    </div>
  )
}

export default Todo;