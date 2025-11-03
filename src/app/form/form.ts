import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodosService } from '../services/todos/todos.service';

@Component({
  selector: 'todo-app-form',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="addTaskForm" (ngSubmit)="onSibmitHandler()">
      <input type="text" placeholder="Add a new task" formControlName="taskDescription" />
      <button type="submit" [disabled]="!addTaskForm.valid">Add</button>
    </form>
  `,
  styleUrl: './form.css',
})
export class Form {
  protected readonly todoService = inject(TodosService);

  protected readonly addTaskForm = new FormGroup({
    taskDescription: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
  });

  protected onSibmitHandler() {
    this.todoService.addTodo(this.addTaskForm.value.taskDescription!);
    this.addTaskForm.reset();
  }
}
