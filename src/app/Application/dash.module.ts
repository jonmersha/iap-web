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
import { SubjectComponent } from './audit-operations/subject/subject.component';
import { ChecklistComponent } from './audit-operations/checklist/checklist.component';
import { NewEngamentComponent } from './audit-operations/engament/new-engament/new-engament.component';
import { EngamentListComponent } from './audit-operations/engament/engament-list/engament-list.component';

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

import { MatSelectModule } from '@angular/material/select';
import { CreateAnnualPlanComponent } from './audit-operations/annual-plan/create-annual-plan/create-annual-plan.component';
import { HomeComponent } from '../layout/home/home.component';
import { PlanFormComponent } from './audit-operations/annual-plan/plan-form/plan-form.component';
import { AuditListComponent } from './audit-operations/annual-plan/plan-list/audit-list.component';
import { DetailsComponent } from './audit-operations/annual-plan/details/details.component';
import { PlanContainerComponent } from './audit-operations/annual-plan/plan-container/plan-container.component';
import { ObjectContainerComponent } from './audit-operations/annual-plan/object-container/object-container.component';
import { ChecklistContainerComponent } from './audit-operations/annual-plan/checklist-container/checklist-container.component';
import { TextEditComponent } from './utils/text-edit/text-edit.component';

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

    SubjectComponent,
    ChecklistComponent,

    NewEngamentComponent,
    EngamentListComponent,
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
    DetailsComponent,
    PlanContainerComponent,
    ObjectContainerComponent,
    ChecklistContainerComponent,
    TextEditComponent,
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
