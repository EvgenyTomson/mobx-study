import Todo from './Todo';
import styles from './Todos.module.scss';
import TodosCounter from './TodosCounter';
import { todo } from '../store/todo';
import { observer } from 'mobx-react-lite';

const Todos = observer(() => {
  return (
    <>
      <button onClick={() => todo.getTodos()}>
        Get Todos
      </button>

      <TodosCounter />

      <ul className={styles.list}>
        {
          todo.todos.map(t => <Todo key={t.id} curTodo={t}/>)
        }
      </ul>
    </>
  )
});

export default Todos;
