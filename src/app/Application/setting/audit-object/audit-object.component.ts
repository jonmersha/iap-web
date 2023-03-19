import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { EMPLOYE } from 'src/app/constants';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-audit-object',
  templateUrl: './audit-object.component.html',
  styleUrls: ['./audit-object.component.css'],
})
export class AuditObjectComponent {
  auditObject: FormGroup = new FormGroup({
    audit_cat: new FormControl('', this.Vlist(2, 20)),
    name: new FormControl('', this.Vlist(2, 20)),
    description: new FormControl('', this.Vlist(50, 500)),
  });

  submitted = false;

  constructor(private empReistration: RegistrationService) {}

  get f(): { [key: string]: AbstractControl } {
    return this.auditObject.controls;
  }

  onSubmit(): void {
    //console.log(this.emp.value)
    this.submitted = true;

    if (this.auditObject.valid) {
      console.log(this.auditObject.invalid);
      console.log(JSON.stringify(this.auditObject.value, null, 2));

      return;
    }
    console.log(JSON.stringify(this.auditObject.value, null, 2));
    this.empReistration
      .register(
        JSON.stringify(this.auditObject.value, null, 2),
        `${EMPLOYE}/add`
      )
      .subscribe((data) => {
        alert(data.status);
      });
  }

  onReset(): void {
    this.submitted = false;
    this.auditObject.reset();
  }

  Vlist(minLen: number, maxLen: number) {
    return [
      Validators.required,
      Validators.minLength(minLen),
      Validators.maxLength(maxLen),
    ];
  }
}
