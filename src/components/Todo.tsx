import styles from './Todo.module.scss';
import { TodoT, todo } from '../store/todo';
import { observer } from 'mobx-react-lite';

type Props = {
  curTodo: TodoT;
}

const Todo = observer(({curTodo}: Props) => {
  const resultClass = curTodo.completed ? `${styles.elem} ${styles.elem_complered}` : styles.elem;
  
  return (
    <li 
      className={resultClass}
    >
      <p>{curTodo.title}</p>
      <input
        className={styles.complete}
        name='complete' 
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
