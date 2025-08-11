import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskAnalyteComponent } from './task-analyte/task-analyte.component';

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
        component: TaskDashboardComponent,

        children: [
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
