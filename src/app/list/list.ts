import { Component, inject } from '@angular/core';
import { TodosService } from '../services/todos/todos.service';
import { Card } from './card/card';

@Component({
  selector: 'todo-app-list',
  imports: [Card],
  template: `
    @for (todo of allTodos; track todo) {
    <todo-app-card [todo]="todo" />
    }
  `,
  styleUrl: './list.css',
})
export class List {
  protected readonly todosService = inject(TodosService);
  protected readonly allTodos = this.todosService.getTodos();
}
