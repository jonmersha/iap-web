import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:string | undefined;
  constructor(private router:Router,private loginService:LoginService){}
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

        localStorage.setItem('token',data.data)     

      }
      else{
        this.user='Error login To system';
        localStorage.removeItem('token')
      }


       this.router.navigate(['dash'])



    })
   

  }

}
