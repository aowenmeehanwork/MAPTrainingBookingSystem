import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from  '@angular/router';
import { KainosEmployeeComponent } from './kainos-employee/kainos-employee.component';

import { TrainerComponent } from './trainer/trainer.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './routerConfig';
import { NavComponent } from './nav/nav.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddCourseDirective } from './directives/add-course.directive';
import { AddCourseLocationDirective } from './directives/add-course-location.directive';
import { AddCourseDateDirective } from './directives/add-course-date.directive';
import { AddCourseDescriptionDirective } from './directives/add-course-description.directive';
import { AddCourseAimDirective } from './directives/add-course-aim.directive';
import { AddCourseTrainerDirective } from './directives/add-course-trainer.directive';
import { CourseListComponent } from './course-list/course-list.component';
import { MapLandingComponent } from './map-landing/map-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KainosEmployeeComponent,
    TrainerComponent,
    HomeComponent,
    MapComponent,
    NavComponent,
    AddCourseComponent,
    AddCourseDirective,
    AddCourseLocationDirective,
    AddCourseDateDirective,
    AddCourseDescriptionDirective,
    AddCourseAimDirective,
    AddCourseTrainerDirective,
    CourseListComponent,
    MapLandingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
