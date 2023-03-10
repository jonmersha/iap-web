import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-menu',
  templateUrl: './setting-menu.component.html',
  styleUrls: ['./setting-menu.component.css']
})
export class SettingMenuComponent {
  constructor(private router: Router){

  }

  navigateTo(base:any,named:any,componenet:any){
    this.router.navigate([`${base}`, { outlets: { [named]: [componenet] } }]);
  }

}
