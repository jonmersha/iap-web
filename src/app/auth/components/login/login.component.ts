import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HealthService } from '../../health.service';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string | undefined;
  constructor(
    private router:Router,
    private loginService:LoginService,
    private healthCheck:HealthService
    ){}
  ngOnInit(){
    this.healthCheck.checkHealth().toPromise().then((response)=>
    {
      this.user=response.message
      return true
    },(error:HttpErrorResponse)=>{
      console.log(error.error)
      this.user=`${error.message}`
      return false
    }).catch((error)=>{

      return false;
    })
  }
  logionControles=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  
  onlogin(){
    alert("Login")
  }
  onSubmit(){
   

let body={
  connector:"and",
  criateria:{
      is_active: 1,
      user_name: this.logionControles.value.email,
      pswd:this.logionControles.value.password
    
  },
  
  body:"user_id,user_name,pswd"  
}

 
    this.loginService.login(body).subscribe(data=>{

      if(data.data.success==false){
        localStorage.removeItem('token')
        this.user=data.data.message
      }
      else if(data.data.success==true){ 
        //console.log(data.data)
        localStorage.setItem('token',JSON.stringify(data.data))     
      }
      else{
        this.user='Error login To system';
        localStorage.removeItem('token')
      }
       this.router.navigate(['dash'])


    })
   

  }

}
