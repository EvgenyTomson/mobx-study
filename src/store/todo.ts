import { makeAutoObservable, runInAction } from "mobx";
import axios from 'axios';

export type TodoT = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

const TODOS_URI = 'https://jsonplaceholder.typicode.com/todos';

class Todo {
  todos: TodoT[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async getTodos() {
    try {
      const response = await axios.get<TodoT[]>(TODOS_URI);
      runInAction(() => {
        this.todos = response.data;
      })
    } catch(error) {
      console.log(error);
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id: number) {
    const currentTodo = this.todos.find(todo => todo.id === id);
    if (currentTodo) {
      currentTodo.completed = !currentTodo.completed;
    }
  }
}

export const todo = new Todo();