import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskAnalyteComponent } from './task-analyte/task-analyte.component';
import { TaskListComponent } from './task-list/task-list.component';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'dashboard',
        canActivate: [authGuardGuard],
        component: TaskDashboardComponent,

        children: [
          {
            path:"",
            redirectTo:"taskList",
            pathMatch: "full"
          },
          {
              path:"taskList",
              component: TaskListComponent
            },
            {
                path: 'taskform',
                component: TaskFormComponent
            },
            {
                path: 'taskAnalyte',
                component: TaskAnalyteComponent
            }

        ]
    },


];
