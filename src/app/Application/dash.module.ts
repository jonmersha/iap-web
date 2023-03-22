import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashBoardComponent } from './layout/container/dash-board.component';

import { ASideComponent } from './layout/a-side/a-side.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';

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
import { AnualPlanComponent } from './audit-oprations/audit-plan/anual-plan/anual-plan.component';
import { ObjectComponent } from './audit-oprations/object/object.component';
import { SubjectComponent } from './audit-oprations/subject/subject.component';
import { ChecklistComponent } from './audit-oprations/checklist/checklist.component';
import { CreateComponent } from './audit-oprations/program/create/create.component';
import { ApproveComponent } from './audit-oprations/program/approve/approve.component';
import { NewEngamentComponent } from './audit-oprations/engament/new-engament/new-engament.component';
import { EngamentListComponent } from './audit-oprations/engament/engament-list/engament-list.component';
import { NewFindingComponent } from './audit-oprations/finding/new-finding/new-finding.component';
import { FindingListComponent } from './audit-oprations/finding/finding-list/finding-list.component';
import { FindingEditComponent } from './audit-oprations/finding/finding-edit/finding-edit.component';
import { NewRecomendationComponent } from './audit-oprations/recomndation/new-recomendation/new-recomendation.component';
import { EditRecomendationComponent } from './audit-oprations/recomndation/edit-recomendation/edit-recomendation.component';
import { PageNotFoundComponent } from '../collection/page-not-found/page-not-found.component';
import { TeamComponent } from './setting/team/team.component';
import { AudteesComponent } from './setting/audtees/audtees.component';
import { UserComponent } from './setting/user/user.component';
import { LinkMenuComponent } from './utils/link-menu/link-menu.component';
import { MatRadioModule } from '@angular/material/radio';
import { CheckBoxInputComponent } from './utils/check-box-input/check-box-input.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PlanYearComponent } from './setting/plan-year/plan-year.component';

import { AuditListComponent } from './audit-oprations/audit-list/audit-list.component';

import { PlanDetailComponent } from './audit-oprations/plan-detail/plan-detail.component';
import { MatSelectModule } from '@angular/material/select';
import { CreateAnnualPlanComponent } from './audit-oprations/create-annual-plan/create-annual-plan.component';
import { HomeComponent } from '../layout/home/home.component';
import { PlanFormComponent } from './audit-oprations/plan-form/plan-form.component';

@NgModule({
  declarations: [
    DashBoardComponent,
    HomeComponent,
    ASideComponent,
    FooterComponent,
    NavBarComponent,
    SideMenuComponent,
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
    LinkMenuComponent,
    CheckBoxInputComponent,
    PlanYearComponent,
    CreateAnnualPlanComponent,
    AuditListComponent,
    PlanFormComponent,
    PlanDetailComponent,
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
  ],
})
export class DashModule {}
