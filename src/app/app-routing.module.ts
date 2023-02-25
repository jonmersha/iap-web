import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './collection/page-not-found/page-not-found.component';
import { AnualPlanComponent } from './components/audit/audit-plan/anual-plan/anual-plan.component';
import { PlanDetailsComponent } from './components/audit/audit-plan/plan-details/plan-details.component';
import { ObjectComponent } from './components/audit/object/object.component';
import { HomeComponent } from './layout/home/home.component';
import { PlanListComponent } from './plan-list/plan-list.component';


const routes: Routes = [
  {path:'',component:HomeComponent}, 
  {path:'Plan',component:AnualPlanComponent},
  {path:'planlist',component:PlanListComponent},
  {path:'detail/:id',component:PlanDetailsComponent},
  {path:'audit_object',component:ObjectComponent},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
