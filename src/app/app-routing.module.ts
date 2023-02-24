import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnualPlanComponent } from './components/audit/audit-plan/anual-plan/anual-plan.component';
import { PlanDetailsComponent } from './components/audit/audit-plan/plan-details/plan-details.component';
import { HomeComponent } from './layout/home/home.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { LoginComponent } from './security/login/login.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent}, 
  {path:'Plan',component:AnualPlanComponent},
  {path:'planlist',component:PlanListComponent},
  {path:'login',component:LoginComponent},
  {path:'detail/:id',component:PlanDetailsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
