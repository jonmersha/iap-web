import { Component, OnInit } from '@angular/core';
import { AuditPlanService } from '../service/audit-plan.service';

@Component({
  selector: 'app-audit-list',
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css'],
})
export class AuditListComponent implements OnInit {
  planList: any;
  constructor(private planServce: AuditPlanService) {}
  ngOnInit(): void {
    this.getPlanList();
  }

  getPlanList() {
    this.planServce.getAll('plan/view').subscribe((data) => {
      this.planList = data.data;
      console.log(this.planList);
    });
  }
}
