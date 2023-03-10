import { Component } from '@angular/core';

export class User {
  public name!: string;
  public email!: string;
  public password!: string;
  public hobbies!: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  model = new User();
  hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking',
  ];

  constructor(){}

  onSubmit(form: any) {
    console.log(form.value);
  }

}
