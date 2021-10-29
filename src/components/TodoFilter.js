import './TodoFilter.style.css';
import { useDispatch } from 'react-redux';
import { deleteCompleted, setButtonFilter } from '../store/actions';

const actionButtonsList = [
  {
    title: 'All',
    value: 'all'
  },
  {
    title: 'Active',
    value: 'active'
  },
  {
    title: 'Completed',
    value: 'completed'
  }
];

const TodoFilter = ({ length, currentValue }) => {
  const dispatch = useDispatch();
  const setFilterValue = (value) => {
    dispatch(setButtonFilter(value));
  }
  const deleteCompletedTasks = (st) => {
    dispatch(deleteCompleted(st));
  }

  return (
    <div className="todo-filter">
      <p>{length} items left</p>
      {actionButtonsList.map((item) => (
        <button
          key={item.value}
          onClick={() => setFilterValue(item.value)}
        >
          {item.title}
        </button>
      ))}
      {currentValue > 0 && (
        <button
          onClick={() => deleteCompletedTasks(true)}
        >
          Clear completed [{currentValue}]
        </button>
      )}
    </div>
  );
}

export default TodoFilter;