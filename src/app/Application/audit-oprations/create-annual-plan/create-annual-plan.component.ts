import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-annual-plan',
  templateUrl: './create-annual-plan.component.html',
  styleUrls: ['./create-annual-plan.component.css'],
})
export class CreateAnnualPlanComponent {
  form: FormGroup = new FormGroup({
    audit_subject: new FormControl('', [Validators.required]),
    auditees: new FormControl(''),
    team_id: new FormControl(''),
    audit_year: new FormControl(''),
    risk_score: new FormControl(''),
    risk_level: new FormControl(''),
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
