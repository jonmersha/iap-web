import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(
    private authService:LoginService,
    private route:Router
    ){}
logout() {
  this.authService.logOut()
  this.route.navigate(['login'])




}

}
