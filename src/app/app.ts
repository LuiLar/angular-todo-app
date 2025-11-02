import { Component, signal } from '@angular/core';

@Component({
  selector: 'todo-app-root',
  imports: [],
  template: `
    <h1>Welcome to {{ title() }}!</h1>

    
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-todo-app');
}
