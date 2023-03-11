import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/components/login/login.component';



//import { HomeComponent } from './layout/home/home.component';

//import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
//import { FoterComponent } from './layout/foter/foter.component';
////import { ASideComponent } from './layout/a-side/a-side.component';

//import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { AnualPlanListComponent } from './Application/audit/audit-plan/anual-plan-list/anual-plan-list.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { HttpClientModule } from '@angular/common/http';
//import { UploadAnualPlanComponent } from './Application/audit/audit-plan/upload-anual-plan/upload-anual-plan.component';

//import { PlanDetailsComponent } from './Application/audit/audit-plan/plan-details/plan-details.component';
import { ObjectComponent } from './Application/audit/object/object.component';
//import { AuditeesComponent } from './components/user/auditees/auditees.component';
//import { SubjectComponent } from './Application/audit/subject/subject.component';
//import { ChecklistComponent } from './Application/audit/checklist/checklist.component';
//import { ListComponent } from './Application/audit/program/list/list.component';
//import { CreateComponent } from './Application/audit/program/create/create.component';
//import { ApproveComponent } from './Application/audit/program/approve/approve.component';
//import { NewEngamentComponent } from './Application/audit/engament/new-engament/new-engament.component';
//import { EngamentListComponent } from './Application/audit/engament/engament-list/engament-list.component';
//import { NewFindingComponent } from './Application/audit/finding/new-finding/new-finding.component';
//import { FindingListComponent } from './Application/audit/finding/finding-list/finding-list.component';
//import { FindingEditComponent } from './Application/audit/finding/finding-edit/finding-edit.component';
//import { NewRecomendationComponent } from './Application/audit/recomndation/new-recomendation/new-recomendation.component';
//import { EditRecomendationComponent } from './Application/audit/recomndation/edit-recomendation/edit-recomendation.component';
//import { PageNotFoundComponent } from './collection/page-not-found/page-not-found.component';

// import { TeamComponent } from './Application/setting/team/team.component';
// import { AudteesComponent } from './Application/setting/audtees/audtees.component';
// import { UserComponent } from './Application/setting/user/user.component';
// import { SignupComponent } from './auth/components/signup/signup.component';
// import { ChangeAssWordComponent } from './auth/components/change-ass-word/change-ass-word.component';
// import { DeactivateEmployeComponent } from './auth/components/deactivate-employe/deactivate-employe.component';






@NgModule({
  declarations: [
    AppComponent,
    AnualPlanListComponent,
    NewUserComponent,
    UserEditComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
