import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomSliderComponent } from "../components/custom-slider/custom-slider.component";
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatButtonModule, CustomSliderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm !: FormGroup;


  wallpaperImages: string[] = [
'https://images.pexels.com/photos/7550886/pexels-photo-7550886.jpeg' ,
'https://cdni.iconscout.com/illustration/premium/thumb/business-task-management-5685838-4744556.png','https://img.freepik.com/free-vector/students-employees-adding-events-deadlines-calendar-app-young-people-using-time-organizer-planner-flat-illustration_74855-20735.jpg?semt=ais_hybrid&w=740&q=80' ];

  constructor(private fb: FormBuilder,private authService: AuthService
    ,private router: Router
  ) {
   this.formInit();
  }

  /**
   * Initialize the login form.
   */
  formInit():void{
    this.loginForm = this.fb.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }




  /**
   * Handle the login form submission.
   */
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('userId', JSON.stringify(response.userId));
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Login failed!', error);
        }
      });
    }
  }

}
