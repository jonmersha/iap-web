import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashBoardComponent } from './layout/container/dash-board.component';
import { HomeComponent } from './components/home/home.component';
import { ASideComponent } from './layout/a-side/a-side.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { PlanDashBordComponent } from './components/plan/plan-dash-bord/plan-dash-bord.component';
import { SettingMenuComponent } from './setting/setting-menu/setting-menu.component';
import { SetingDashComponent } from './setting/seting-dash/seting-dash.component';
import { PasswordRessetComponent } from './setting/password-resset/password-resset.component';
import { CreateAccountComponent } from './setting/create-account/create-account.component';
import { AuditObjectComponent } from './setting/audit-object/audit-object.component';
import { EmployeeComponent } from './setting/employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashBoardComponent,
    HomeComponent,
    ASideComponent,
    FooterComponent,
    NavBarComponent,
    SideMenuComponent,
    PlanDashBordComponent,
    SettingMenuComponent,
    SetingDashComponent,
    PasswordRessetComponent,
    CreateAccountComponent,
    AuditObjectComponent,
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class DashModule { }
