import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../collection/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

import { DashBoardComponent } from './layout/container/dash-board.component';

const routes: Routes = [

{path:'',component:DashBoardComponent,children:[
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/dash/home',pathMatch :'full'},
  {path:'**',component:PageNotFoundComponent}
]}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashRoutingModule { }

