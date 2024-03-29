import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-audtees',
  templateUrl: './audtees.component.html',
  styleUrls: ['./audtees.component.css'],
})
export class AudteesComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    organ_level: new FormControl(''),
    parent_ou: new FormControl(''),
    organ_type: new FormControl(''),
    ou_leader: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
