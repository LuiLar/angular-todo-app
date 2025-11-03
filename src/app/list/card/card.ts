import { Component, inject, input } from '@angular/core';
import { TodosService } from '../../services/todos/todos.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'todo-app-card',
  template: `
    @let currentTodo = todo();

    <p [class.completed]="currentTodo.completed">{{ currentTodo.task }}</p>
    <section>
      <button (click)="completeTask()">✅</button>
      <button (click)="removeTask()">❌</button>
    </section>
  `,
  styleUrl: './card.css',
})
export class Card {
  readonly todoService = inject(TodosService);

  todo = input.required<Todo>();

  completeTask() {
    this.todoService.completeTodo(this.todo());
  }

  removeTask() {
    this.todoService.removeTodo(this.todo());
  }
}
