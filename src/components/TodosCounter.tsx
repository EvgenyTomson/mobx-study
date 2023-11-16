import { todo } from '../store/todo';
import { observer } from 'mobx-react-lite';

const TodosCounter = observer(() => {
  return (
    <p>
      Total todos: {todo.todos.length}. Completed: {todo.todos.filter(t => t.completed).length}
    </p>
  )
});

export default TodosCounter;
