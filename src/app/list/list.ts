import { Component, inject } from '@angular/core';
import { TodosService } from '../services/todos/todos.service';
import { Card } from './card/card';

@Component({
  selector: 'todo-app-list',
  imports: [Card],
  template: `
    @for (todo of allTodos; track todo.id) {
    <todo-app-card [todo]="todo" />
    }
  `,
  styleUrl: './list.css',
})
export class List {
  readonly todosService = inject(TodosService);
  allTodos = this.todosService.getTodos();
}
