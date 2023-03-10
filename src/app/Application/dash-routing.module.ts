import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../collection/page-not-found/page-not-found.component';
import { AuditeesComponent } from '../components/user/auditees/auditees.component';
import { HomeComponent } from './components/home/home.component';

import { DashBoardComponent } from './layout/container/dash-board.component';
import { AuditObjectComponent } from './setting/audit-object/audit-object.component';
import { CreateAccountComponent } from './setting/create-account/create-account.component';
import { EmployeeComponent } from './setting/employee/employee.component';
import { OuComponent } from './setting/ou/ou.component';
import { PasswordRessetComponent } from './setting/password-resset/password-resset.component';
import { SetingDashComponent } from './setting/seting-dash/seting-dash.component';

const routes: Routes = [

{path:'',component:DashBoardComponent,children:[
  {path:'home',component:HomeComponent},
  {path:'setting',component:SetingDashComponent,
  
  children:[
    {path: '', component: OuComponent,outlet:'sub'},
    {path: 'emp', component: EmployeeComponent,outlet:'sub'},
    {path: 'pwr', component: PasswordRessetComponent,outlet:'sub'},
    {path: 'acc', component: CreateAccountComponent,outlet:'sub'},
    {path: 'audites', component: AuditeesComponent,outlet:'sub'},
    {path: 'audit-object', component: AuditObjectComponent,outlet:'sub'},
    {path:'**',component:PageNotFoundComponent}


    
  ]
   
        
},      
  
 
  {path:'',redirectTo:'/dash/home',pathMatch :'full'},
  {path:'**',component:PageNotFoundComponent}

]}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashRoutingModule { }

