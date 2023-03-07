import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './components/home/home.component';
import { ASideComponent } from './a-side/a-side.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PlanDashBordComponent } from './components/plan/plan-dash-bord/plan-dash-bord.component';


@NgModule({
  declarations: [
    DashBoardComponent,
    HomeComponent,
    ASideComponent,
    FooterComponent,
    NavBarComponent,
    SideMenuComponent,
    PlanDashBordComponent,
  ],
  imports: [
    CommonModule,
    DashRoutingModule
  ]
})

export class DashModule { }
