import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

import Validation from 'src/app/utils/validation';

@Component({
  selector: 'app-ou',
  templateUrl: './ou.component.html',
  styleUrls: ['./ou.component.css'],
})
export class OuComponent implements OnInit {
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
