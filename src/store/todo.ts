import { makeAutoObservable } from "mobx";

export type TodoT = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

class Todo {
  todos: TodoT[] = []

  constructor() {
    makeAutoObservable(this)
  }

  getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(todos => {
        this.todos = todos;
      })
      .catch(err => {
        console.log(err)
      })
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