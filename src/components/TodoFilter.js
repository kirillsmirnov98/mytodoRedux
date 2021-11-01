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

const TodoFilter = ({ activeLength, completedLength }) => {
  const dispatch = useDispatch();
  const setFilterValue = (value) => {
    dispatch(setButtonFilter(value));
  }
  const deleteCompletedTasks = (state) => {
    dispatch(deleteCompleted(state));
  }

  return (
    <div className="todo-filter">
      <p>{activeLength} items left</p>
      {actionButtonsList.map((item) => (
        <button
          key={item.value}
          onClick={() => setFilterValue(item.value)}
        >
          {item.title}
        </button>
      ))}
      {completedLength > 0 && (
        <button
          onClick={() => deleteCompletedTasks(true)}
        >
          Clear completed [{completedLength}]
        </button>
      )}
    </div>
  );
}

export default TodoFilter;