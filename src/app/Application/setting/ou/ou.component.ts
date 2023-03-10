import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ou',
  templateUrl: './ou.component.html',
  styleUrls: ['./ou.component.css']
})

export class OuComponent implements OnInit{
  userForm = new FormGroup({
    userName: new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)])	 
 });
  constructor(){}


  

  ngOnInit(){
    
    
  }
submitForm(){}

  
 
}
