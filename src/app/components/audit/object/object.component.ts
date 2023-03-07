import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/dash/services/audit/plan/registration.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.sass']
})
export class ObjectComponent {
  constructor(private registration:RegistrationService){}
addObject() {
  var addobject={
    audit_cat:this.audit_cat,
    name:this.name.value,
    description:this.description.value
    
  }
  this.registration.register(addobject,'/object/add').subscribe(response=>{
    console.log()
  })

  

}
  audit_cat=new FormControl(Validators.required)
  name=new FormControl(Validators.required)
  description=new FormControl(Validators.required)

}
