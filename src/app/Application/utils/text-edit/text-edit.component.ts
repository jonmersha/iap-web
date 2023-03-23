import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-edit',
  templateUrl: './text-edit.component.html',
  styleUrls: ['./text-edit.component.css'],
})
export class TextEditComponent {
  @Input() control: any;
  @Input() submitted: boolean = false;
  @Input() label: any;
  @Output() valueChange = new EventEmitter();
}
