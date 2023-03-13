import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-menu',
  templateUrl: './link-menu.component.html',
  styleUrls: ['./link-menu.component.css']
})
export class LinkMenuComponent {
  @Input() function:(any)
  @Input() component:any
  @Input() path:any
  @Input() destination:any;
  @Input() description:any;
  @Input() title_label:any

  constructor(private router: Router){

  }

  navigateTo(base:any,named:any,componenet:any){
    this.router.navigate([`${base}`, { outlets: { [named]: [componenet] } }]);
  }

}
