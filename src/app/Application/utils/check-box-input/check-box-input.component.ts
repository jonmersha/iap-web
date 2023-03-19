import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-box-input',
  templateUrl: './check-box-input.component.html',
  styleUrls: ['./check-box-input.component.css'],
})
export class CheckBoxInputComponent {
  @Input() control: any;
  @Input() submitted: boolean = false;
  @Input() label: any;
  @Output() valueChange = new EventEmitter();
}
