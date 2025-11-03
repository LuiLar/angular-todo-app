import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [
    { id: 1, task: 'Sample Task', completed: false },
    { id: 2, task: 'Another Task', completed: false },
    { id: 3, task: 'More Tasks', completed: false },
  ];

  addTodo(task: string) {
    this.todos.push({ id: this.todos.length + 1, task });
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
