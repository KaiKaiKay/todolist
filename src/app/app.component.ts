import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { TodoService, Todo } from './todo.service';

export class StoreModule {}

interface Todo {
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // 原始寫法
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }


  //使用 service 寫法
  // newTodo: string = '';

  // constructor(private todoService: TodoService) {}

  // /** 取得 service 裡的代辦事項表 */
  // get todos() {
  //   return this.todoService.getTodos();
  // }

  // addTodo() {
  //   this.todoService.addTodo(this.newTodo);
  //   this.newTodo = ''; //清空
  // }

  // toggleCompleted(todo: Todo) {
  //   this.todoService.toggleCompleted(todo);
  // }

  // deleteTodo(todo: Todo) {
  //   this.todoService.deleteTodo(todo);
  // }
}
