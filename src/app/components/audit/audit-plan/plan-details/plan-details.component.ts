import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuditObjectService } from 'src/app/services/combo/audit-object.service';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.sass']
})
export class PlanDetailsComponent implements OnInit{

  object: any;
  auditDetails:any;
  js:any;

  constructor(private route:ActivatedRoute,private auditService:AuditObjectService){
    
  }

  ngOnInit(){
    this.object=this.route.snapshot.paramMap.get('id');
     this.js=JSON.parse(this.object)
    console.log(this.js)


  }
  getDate(date:any){
    const format = 'dd/MM/yyyy';
//const myDate = '2019-06-29';
const locale = 'en-US';
const formattedDate = formatDate(date, format, locale);
    return formattedDate;
  }
  getAuditDetails(id:any){
    this.auditService.getData();
    
      }
      getDataById(id:any){
        this.auditService.getDataById(id).subscribe(response=>{
          this.auditDetails=response.data[0];
          console.log(this.auditDetails.description)
        })

      }

}
