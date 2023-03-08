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

    //alert('submit clicked')
    //alert(body)
    this.loginService.login(body).subscribe(data=>{
     // alert(data);
      if(data.data.success==false){
        //alert(data.data.success)
        this.user=data.data.message
      }
      else{
        //getting the details of the employees from dtsvse based on the emplyees 
        
        this.router.navigate(['dash'])
      }
    })
   

  }

}
