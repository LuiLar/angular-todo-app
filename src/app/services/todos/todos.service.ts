import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [
    { id: 1, task: 'Sample Task' },
    { id: 2, task: 'Another Task' },
    { id: 3, task: 'More Tasks' },
  ];

  addTodo(task: string) {
    this.todos.push({ id: this.todos.length + 1, task });
  }

  getTodos() {
    return this.todos;
  }

  removeTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
