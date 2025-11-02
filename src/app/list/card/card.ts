import { Component, inject, input } from '@angular/core';
import { TodosService } from '../../services/todos/todos.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'todo-app-card',
  imports: [],
  template: `
    <p>{{ todo()?.task }}</p>
    <button (click)="removeTask()">Delete</button>
  `,
  styleUrl: './card.css',
})
export class Card {
  readonly todoService = inject(TodosService);

  todo = input<Todo>();
  todoToRemove?: Todo;

  removeTask() {
    this.todoToRemove = this.todo();
    this.todoToRemove && this.todoService.removeTodo(this.todoToRemove);
  }
}
