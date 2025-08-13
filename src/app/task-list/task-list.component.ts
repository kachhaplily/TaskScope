import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { TaskDto } from '../../model/model';
import { CommonModule } from '@angular/common';
// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

// Pipes
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks: TaskDto[] = [];
userId!: string ;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
    this.userId = JSON.parse(localStorage.getItem('userId') || '');
  }


  /**
   * Load tasks for the user
   *
   */
  loadTasks():void {
    this.taskService.getPost("1").subscribe({
      next: (tasks) => {
       this.tasks = tasks;
      },
      error: (error) => {
        console.error('Error loading tasks:', error);
      }
    });
  }

  priorityColor(priority: string) {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'warn';
    case 'medium':
      return 'accent';
    case 'low':
      return 'primary';
    default:
      return '';
  }
}

}
