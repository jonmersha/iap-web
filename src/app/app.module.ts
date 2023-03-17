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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

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
    BrowserAnimationsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
