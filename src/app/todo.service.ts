import { Injectable } from '@angular/core';

export interface Todo {
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: Todo[] = [];

  constructor() {}

  /** 直接返回 todos */
  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(newTodo: string) {
    if (newTodo.trim() !== '') {
      this.todos.push({ text: newTodo, completed: false });
    }
  }

  /**切換代辦事項狀態 */
  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }
}
