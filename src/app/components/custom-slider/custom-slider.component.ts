import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-custom-slider',
  imports: [MatButtonModule],
  templateUrl: './custom-slider.component.html',
  styleUrl: './custom-slider.component.scss'
})
export class CustomSliderComponent implements OnInit {
  currentIndex:number = 0;
  @Input()imageUrl!:string[];

  images: string[] = [
'https://images.pexels.com/photos/7550886/pexels-photo-7550886.jpeg' ,
'https://cdni.iconscout.com/illustration/premium/thumb/business-task-management-5685838-4744556.png','https://img.freepik.com/free-vector/students-employees-adding-events-deadlines-calendar-app-young-people-using-time-organizer-planner-flat-illustration_74855-20735.jpg?semt=ais_hybrid&w=740&q=80' ];
 private intervalId: any;
  constructor() {}


  /**
   * Lifecycle hook that is called when the component is initialized.
   */
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 20000);
      
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   */
   ngOnDestroy(): void {
    // Clear the interval when component is destroyed to avoid memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * Show the next image in the slider.
   */
  next():void{
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  /**
   * Show the previous image in the slider.
   */
  previous():void  {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
