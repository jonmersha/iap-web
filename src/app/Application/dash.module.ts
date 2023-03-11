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
import { InputComponent } from './utils/input/input.component';
import { OuComponent } from './setting/ou/ou.component';
import { ComboItemsComponent } from './utils/combo-items/combo-items.component';
import { AnualPlanComponent } from './audit/audit-plan/anual-plan/anual-plan.component';
import { ObjectComponent } from './audit/object/object.component';
import { SubjectComponent } from './audit/subject/subject.component';
import { ChecklistComponent } from './audit/checklist/checklist.component';
import { CreateComponent } from './audit/program/create/create.component';
import { ApproveComponent } from './audit/program/approve/approve.component';
import { NewEngamentComponent } from './audit/engament/new-engament/new-engament.component';
import { EngamentListComponent } from './audit/engament/engament-list/engament-list.component';
import { NewFindingComponent } from './audit/finding/new-finding/new-finding.component';
import { FindingListComponent } from './audit/finding/finding-list/finding-list.component';
import { FindingEditComponent } from './audit/finding/finding-edit/finding-edit.component';
import { NewRecomendationComponent } from './audit/recomndation/new-recomendation/new-recomendation.component';
import { EditRecomendationComponent } from './audit/recomndation/edit-recomendation/edit-recomendation.component';
import { PageNotFoundComponent } from '../collection/page-not-found/page-not-found.component';
import { TeamComponent } from './setting/team/team.component';
import { AudteesComponent } from './setting/audtees/audtees.component';
import { UserComponent } from './setting/user/user.component';




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
    InputComponent,
    OuComponent,
    ComboItemsComponent,
    AnualPlanComponent,
    ObjectComponent,
   //AuditeesComponent

    
    SubjectComponent,
    ChecklistComponent,
   
    CreateComponent,
    ApproveComponent,
    NewEngamentComponent,
    EngamentListComponent,
    NewFindingComponent,
    FindingListComponent,
    FindingEditComponent,
    NewRecomendationComponent,
    EditRecomendationComponent,
    PageNotFoundComponent,
    TeamComponent,
    AudteesComponent,
    UserComponent,


  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class DashModule { }
