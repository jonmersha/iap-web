import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { HomeComponent } from './layout/home/home.component';

import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FoterComponent } from './layout/foter/foter.component';
import { ASideComponent } from './layout/a-side/a-side.component';

//import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { AnualPlanComponent } from './components/audit/audit-plan/anual-plan/anual-plan.component';
import { AnualPlanListComponent } from './components/audit/audit-plan/anual-plan-list/anual-plan-list.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { AuditPlanService } from './dash/services/audit-paln/audit-plan.service';
import { HttpClientModule } from '@angular/common/http';
import { ComboItemsComponent } from './components/combo-items/combo-items.component';
import { UploadAnualPlanComponent } from './components/audit/audit-plan/upload-anual-plan/upload-anual-plan.component';

import { PlanDetailsComponent } from './components/audit/audit-plan/plan-details/plan-details.component';
import { ObjectComponent } from './components/audit/object/object.component';
import { AuditeesComponent } from './components/user/auditees/auditees.component';
import { SubjectComponent } from './components/audit/subject/subject.component';
import { ChecklistComponent } from './components/audit/checklist/checklist.component';
import { ListComponent } from './components/audit/program/list/list.component';
import { CreateComponent } from './components/audit/program/create/create.component';
import { ApproveComponent } from './components/audit/program/approve/approve.component';
import { NewEngamentComponent } from './components/audit/engament/new-engament/new-engament.component';
import { EngamentListComponent } from './components/audit/engament/engament-list/engament-list.component';
import { NewFindingComponent } from './components/audit/finding/new-finding/new-finding.component';
import { FindingListComponent } from './components/audit/finding/finding-list/finding-list.component';
import { FindingEditComponent } from './components/audit/finding/finding-edit/finding-edit.component';
import { NewRecomendationComponent } from './components/audit/recomndation/new-recomendation/new-recomendation.component';
import { EditRecomendationComponent } from './components/audit/recomndation/edit-recomendation/edit-recomendation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './collection/page-not-found/page-not-found.component';
import { OuComponent } from './components/setting/ou/ou.component';
import { OuStructureComponent } from './components/setting/ou-structure/ou-structure.component';
import { TeamComponent } from './components/setting/team/team.component';
import { AudteesComponent } from './components/setting/audtees/audtees.component';
import { UserComponent } from './components/setting/user/user.component';
import { LoginComponent } from './auth/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    
    NavBarComponent,
    FoterComponent,
    ASideComponent,
    PlanListComponent,
    AnualPlanComponent,
    AnualPlanListComponent,
    NewUserComponent,
    UserEditComponent,
    ComboItemsComponent,
    UploadAnualPlanComponent,
    PlanDetailsComponent,
    ObjectComponent,
    AuditeesComponent,
    SubjectComponent,
    ChecklistComponent,
    ListComponent,
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
    OuComponent,
    OuStructureComponent,
    TeamComponent,
    AudteesComponent,
    UserComponent,
    LoginComponent
    
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
