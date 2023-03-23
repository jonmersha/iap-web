import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { PageNotFoundComponent } from './collection/page-not-found/page-not-found.component';
import { HomeComponent } from './layout/home/home.component';
import { PlanListComponent } from './plan-list/plan-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dash',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./Application/dash.module').then((x) => x.DashModule),
  },
  // {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
