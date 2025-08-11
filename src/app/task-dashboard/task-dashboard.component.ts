import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';



@Component({
  selector: 'app-task-dashboard',
  imports: [MatButtonModule, MatSidenavModule, NavbarComponent, RouterModule, MatIcon],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.scss'
})
export class TaskDashboardComponent {
}
