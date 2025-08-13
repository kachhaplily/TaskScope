import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { TaskService } from '../service/task.service';
import { finalize } from 'rxjs';
@Component({
  selector: 'app-task-form',
  imports: [
    QuillModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  userId!: string;
  priorities = ['High', 'Medium', 'Low'];

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ header: [1, 2, 3, false] }],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean'],
    ],
  };
  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskforminit();
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('userId') || '');
  }

  taskforminit() {
    this.taskForm = this.fb.group({
      createdAt: [new Date()],
      taskTitle: ['', Validators.required],
      taskDescription: [''],
      priority: ['', Validators.required],
      userId: ['1'],
      dueDate: [null, Validators.required],
    });
  }

  onSubmit() {
    this.taskService
      .postTask(this.taskForm.value, this.userId)
      .pipe(
        finalize(() => {
          this.taskForm.reset();
        })
      )
      .subscribe({
        next: (response) => {
          console.log('Task created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating task:', error);
        },
      });
  }
}
