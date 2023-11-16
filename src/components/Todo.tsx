import styles from './Todo.module.scss';
import { TodoT, todo } from '../store/todo';
import { observer } from 'mobx-react-lite';

type Props = {
  curTodo: TodoT;
}

const Todo = observer(({curTodo}: Props) => {
  return (
    <li 
      className={styles.elem}
    >
      <p>{curTodo.title}</p>
      <input 
        type='checkbox' 
        checked={curTodo.completed} 
        onChange={() => {todo.completeTodo(curTodo.id)}}
      />
      <button 
        onClick={() => todo.deleteTodo(curTodo.id)}
        className={styles.delete} 
      >
        X
      </button>
    </li>
  )
});

export default Todo;
