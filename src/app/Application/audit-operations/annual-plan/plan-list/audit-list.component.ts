import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditPlanService } from '../../service/audit-plan.service';

@Component({
  selector: 'app-audit-list',
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css'],
})
export class AuditListComponent implements OnInit {
  planDetails(plan_id: any) {
    this.router.navigate(['dash/plan_details', plan_id]);
  }
  planList: any;
  constructor(private planServce: AuditPlanService, private router: Router) {}
  ngOnInit(): void {
    this.getPlanList();
  }

  getPlanList() {
    this.planServce.getAll('plan/view').subscribe((data) => {
      this.planList = data.data;
      //console.log(this.planList);
    });
  }
}
