import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-button',
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

@Input()btnName:string = '';
@Output() clickEventEmitter = new EventEmitter<void>();

  onClick() {
    this.clickEventEmitter.emit();
  }
}
