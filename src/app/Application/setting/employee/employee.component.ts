import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import Validation from 'src/app/utils/validation';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empForms: FormGroup = new FormGroup({
    emp_id: new FormControl('',[Validators.required]),
    firist_name: new FormControl('',this.Vlist(2,20)),
    last_name: new FormControl('',this.Vlist(2,20)),
    password: new FormControl('',this.Vlist(2,20)),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

 //emp_id= new FormControl('',[Validators.required])


  empForm : FormGroup = new FormGroup({
  emp_id: new FormControl('',[Validators.required]),
  firist_name: new FormControl('',this.Vlist(2,20)),
  midle_name: new FormControl('',this.Vlist(2,20)),
  last_name: new FormControl('',this.Vlist(2,20)),
  employee_ou: new FormControl('',this.Vlist(2,20)),
  job_title: new FormControl('',this.Vlist(2,20)),
  is_auditor: new FormControl('',this.Vlist(2,20)),
  email_id: new FormControl('',this.Vlist(2,20)),
  phone_number: new FormControl('',this.Vlist(2,20)),
  office_location: new FormControl('',this.Vlist(2,20)),
  is_email_confirmed:new FormControl('',this.Vlist(2,20)),
  organ_type: new FormControl('',this.Vlist(2,20))

  })




  // form: FormGroup = new FormGroup({
  //   fullname: new FormControl(''),
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   acceptTerms: new FormControl(false),
  // });


  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  

  // ngOnInit(): void {
  //   this.empForm = this.formBuilder.group(
  //     {
  //       fullname: ['', Validators.required],
  //       username: [
  //         '',
  //         [
  //           Validators.required,
  //           Validators.minLength(6),
  //           Validators.maxLength(20)
  //         ]
  //       ],
  //       email: ['', [Validators.required, Validators.email]],
  //       password: [
  //         '',
  //         [
  //           Validators.required,
  //           Validators.minLength(6),
  //           Validators.maxLength(40)
  //         ]
  //       ],
  //       confirmPassword: ['', Validators.required],
  //       acceptTerms: [false, Validators.requiredTrue]
  //     },
  //     {
  //       validators: [Validation.match('password', 'confirmPassword')]
  //     }
  //   );
    
  // }

  get f(): { [key: string]: AbstractControl } {
    return this.empForm.controls;
  }

  onSubmit(): void {
    //console.log(this.emp.value)
    this.submitted = true;

    if (this.empForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.empForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.empForm.reset();
  }

  Vlist(minLen:number,maxLen:number){
    return [Validators.required,Validators.minLength(minLen),Validators.maxLength(maxLen)]
  }
  

  
 
}
