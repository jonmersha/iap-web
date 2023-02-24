import { Component, OnInit } from '@angular/core';
import { FormControl, Validators  } from '@angular/forms';
import { AuditPlanService } from 'src/app/services/audit-paln/audit-plan.service';
import { RegistrationService } from 'src/app/services/audit/plan/registration.service';

@Component({
  selector: 'app-anual-plan',
  templateUrl: './anual-plan.component.html',
  styleUrls: ['./anual-plan.component.css']
})
export class AnualPlanComponent implements OnInit{

  planList:any;

  getAnnualPlanList(){
    this.planListServiec.getData().subscribe(resp=>{
      this.planList=resp.data;
      //console.log(this.plan);
     })
  }
  audit_subject= new FormControl(Validators.required);
  auditees= new FormControl(Validators.required);
  team_id= new FormControl('2',Validators.required); 
  audit_type= new FormControl(Validators.required); 
  audit_year= new FormControl(Validators.required); 
  risk_score= new FormControl(Validators.required); 
  risk_level= new FormControl(Validators.required);
 

constructor(private reistration:RegistrationService,private planListServiec:AuditPlanService){}
  ngOnInit() {
    this.getAnnualPlanList()
   
  }
 // myControl=new FormControl('');
 response:any;
 registerAnnualPlan(){
  
 }
 addAnualPlan(){
  var jsonData={
     audit_subject: this.audit_subject.value,
      auditees: this.auditees.value,
      team_id: this.team_id.value, 
      audit_type: this.audit_type.value, 
      audit_year: this.audit_year.value, 
      risk_score: this.risk_score.value, 
      risk_level: this.risk_level.value  
 }
 console.log(jsonData)
 this.reistration.register(jsonData).subscribe(response=>{
  this.response=response;
  this.getAnnualPlanList()  
 })

  }
}

