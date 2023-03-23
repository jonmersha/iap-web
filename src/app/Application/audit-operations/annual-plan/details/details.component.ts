import { Component, OnInit } from '@angular/core';
import { AuditPlanService } from '../../service/audit-plan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private auditService: AuditPlanService,
    private route: ActivatedRoute
  ) {}
  planId: number | undefined;

  planDetails: any;
  objectDetail: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.planId = params['id']; // capture the "id" route parameter value
    });
    let body = {
      connector: 'or',
      criteria: {
        plan_id: this.planId,
      },
    };
    this.auditService.getOne(body, 'plan/view/one').subscribe((data) => {
      this.planDetails = data.data[0];
      // console.log(this.planDetails);
      // console.log(`object/get/id?id=${this.planDetails.audit_id}`);

      this.auditService
        .getAll(`object/get/id?id=${this.planDetails.audit_id}`)
        .subscribe((data) => {
          this.objectDetail = data.data[0];
          console.log(this.objectDetail);
        });
    });
    //console.log(thi)
  }
}
