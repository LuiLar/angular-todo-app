import { Component, signal } from '@angular/core';
import { Form } from './form/form';
import { List } from './list/list';

@Component({
  selector: 'todo-app-root',
  imports: [Form, List],
  template: `
    <main>
      <todo-app-form />
      <todo-app-list />
    </main>
  `,
  styleUrl: './app.css',
})
export class App {}
