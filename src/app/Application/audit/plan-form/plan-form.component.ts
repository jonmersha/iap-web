import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { team_id } from 'src/app/constants';
import { AuditPlanService } from '../service/audit-plan.service';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css'],
})
export class PlanFormComponent {
  yearId: any;
  year: any;
  id: any;

  form: FormGroup = new FormGroup({
    audit_subject: new FormControl('', [Validators.required]),
    auditees: new FormControl('', [Validators.required]),
    team_id: new FormControl(''),
    audit_year: new FormControl(''),
    risk_score: new FormControl('', [Validators.required, Validators.min(1)]),
    risk_level: new FormControl('', [Validators.required]),
  });
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private auditPlanService: AuditPlanService
  ) {}

  ngOnInit() {
    this.auditPlanService.getAll('setting/year/get').subscribe((data) => {
      this.yearId = data.data[0].id;
      this.year = data.data[0].name;
      this.id = team_id;
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.form.controls['audit_year'].setValue(this.yearId);
    this.form.controls['team_id'].setValue(this.id.team_id);

    console.log(JSON.stringify(this.form.value, null, 2));
    this.auditPlanService
      .addPlan(JSON.stringify(this.form.value, null, 2), 'plan/add')
      .subscribe((data) => {
        console.log(data);
      });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
