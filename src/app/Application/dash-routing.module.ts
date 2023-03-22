import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../collection/page-not-found/page-not-found.component';
import { HomeComponent } from '../layout/home/home.component';
import { CreateAnnualPlanComponent } from './audit-oprations/create-annual-plan/create-annual-plan.component';

import { DashBoardComponent } from './layout/container/dash-board.component';
import { AuditObjectComponent } from './setting/audit-object/audit-object.component';
import { AudteesComponent } from './setting/audtees/audtees.component';
import { CreateAccountComponent } from './setting/create-account/create-account.component';

import { EmployeeComponent } from './setting/employee/employee.component';
import { OuComponent } from './setting/ou/ou.component';
import { PasswordRessetComponent } from './setting/password-resset/password-resset.component';
import { PlanYearComponent } from './setting/plan-year/plan-year.component';
import { SetingDashComponent } from './setting/seting-dash/seting-dash.component';

const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cap', component: CreateAnnualPlanComponent },
      { path: 'py', component: PlanYearComponent },

      {
        path: 'setting',
        component: SetingDashComponent,

        children: [
          { path: '', component: OuComponent, outlet: 'sub' },
          { path: 'emp', component: EmployeeComponent, outlet: 'sub' },
          { path: 'pwr', component: PasswordRessetComponent, outlet: 'sub' },
          { path: 'acc', component: CreateAccountComponent, outlet: 'sub' },
          { path: 'auditees', component: AudteesComponent, outlet: 'sub' },

          { path: 'object', component: AuditObjectComponent, outlet: 'sub' },
          { path: '**', component: PageNotFoundComponent },
        ],
      },

      { path: '', redirectTo: '/dash/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashRoutingModule {}
