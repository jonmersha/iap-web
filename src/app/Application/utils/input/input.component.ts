import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  

  @Input() control: any;
  @Input() submitted: boolean = false;
  @Input() label:any
  @Output() valueChange = new EventEmitter();
}
