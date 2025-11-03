import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  protected readonly todos: Todo[] = [
    { task: 'Sample Task', completed: false },
    { task: 'Another Task', completed: false },
    { task: 'More Tasks', completed: false },
  ];

  addTodo(task: string) {
    this.todos.push({ task });
  }

  getTodos() {
    return this.todos;
  }

  completeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos[index].completed = true;
    }
  }

  removeTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
