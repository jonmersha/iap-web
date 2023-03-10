import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/auth/employee.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  user_name:string | undefined
  constructor(private employee:EmployeeService){}
  ngOnInit(){
    const key ='token'

const value = localStorage.getItem(key);
const data=JSON.parse(value!)
//console.log(`Key: ${key}, Value: ${value?.toString}`);
//console.log(data.user[0].user_name)
//parform call on the employe table 
this.user_name='Yohannes'
let body={
  id:data.user[0].user_id
}
this.employee.getEmployee(body).subscribe(response=>{

  //console.log(response.data);
  localStorage.setItem('employee',JSON.stringify(response.data[0]))

  const employe=JSON.parse(localStorage.getItem('employee')!)
  this.user_name=`${employe.firist_name} ${employe.midle_name} ${employe.last_name}`
  
  console.log(employe)
  
})

  }

}
