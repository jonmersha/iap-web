import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { EMPLOYE } from 'src/app/constants';
import Validation from 'src/app/utils/validation';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  empForm: FormGroup = new FormGroup({
    emp_id: new FormControl('', [Validators.required]),
    firist_name: new FormControl('', this.Vlist(2, 20)),
    midle_name: new FormControl('', this.Vlist(2, 20)),
    last_name: new FormControl('', this.Vlist(2, 20)),

    employee_ou: new FormControl('', this.Vlist(2, 20)),
    job_title: new FormControl('', this.Vlist(2, 20)),
    is_auditor: new FormControl('', this.Vlist(2, 20)),

    email_id: new FormControl('', this.Vlist(2, 20)),
    phone_number: new FormControl('', this.Vlist(2, 20)),
    office_location: new FormControl('Head', this.Vlist(2, 20)),

    is_email_confirmed: new FormControl('0', this.Vlist(2, 20)),
    organ_type: new FormControl('', this.Vlist(2, 20)),
  });

  submitted = false;

  constructor(private empReistration: RegistrationService) {}

  get f(): { [key: string]: AbstractControl } {
    return this.empForm.controls;
  }

  onSubmit(): void {
    //console.log(this.emp.value)
    this.submitted = true;

    if (this.empForm.valid) {
      console.log(this.empForm.invalid);
      console.log(JSON.stringify(this.empForm.value, null, 2));

      return;
    }
    console.log(JSON.stringify(this.empForm.value, null, 2));
    this.empReistration
      .register(JSON.stringify(this.empForm.value, null, 2), `${EMPLOYE}/add`)
      .subscribe((data) => {
        alert(data.status);
      });
  }

  onReset(): void {
    this.submitted = false;
    this.empForm.reset();
  }

  Vlist(minLen: number, maxLen: number) {
    return [
      Validators.required,
      Validators.minLength(minLen),
      Validators.maxLength(maxLen),
    ];
  }
}
