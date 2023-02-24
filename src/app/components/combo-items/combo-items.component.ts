import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuditPlanService } from 'src/app/services/audit-paln/audit-plan.service';
import { CommonService } from 'src/app/services/combo/common.service';

@Component({
  selector: 'app-combo-items',
  templateUrl: './combo-items.component.html',


})
export class ComboItemsComponent implements OnInit{
  @Input() url!:String;
  @Input() ServiceEnd:any;
  @Input() control!: FormControl;
 
  @Output() valueChange = new EventEmitter();

  //service: CommonService=new CommonService();
  items: any;
  constructor(private service:CommonService){
  }
  ngOnInit(){
    this.service.getData(this.url).subscribe(resp=>{
      this.items=resp.data
      console.log(this.items)
    })
}
 
}


