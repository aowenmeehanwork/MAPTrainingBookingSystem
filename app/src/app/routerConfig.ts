// routerConfig.ts

import { Routes } from '@angular/router';
import { KainosEmployeeComponent } from './kainos-employee/kainos-employee.component';
import { TrainerComponent } from './trainer/trainer.component';
import { MapComponent } from './map/map.component';
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { MapLandingComponent } from "./map-landing/map-landing.component";
import { MappingsContext } from 'source-list-map';

export const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: 'kainos-employee', 
    pathMatch: 'full' },
  { 
    path: 'kainos-employee', 
    component: KainosEmployeeComponent,
    children: [
      {
        path: '',
        redirectTo: 'course-list',
        pathMatch: 'full'
      },
      {
        path: 'course-list',
        component: CourseListComponent
      }
    ]
  },
  { 
    path: 'trainer', 
    component: TrainerComponent 
  },
  { 
    path: 'map',
    component: MapLandingComponent
  },
  {
    path: 'map-tools',
    component: MapComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'course-list'
      },
      {
        path: 'add-course',
        component: AddCourseComponent
      },
      {
        path: 'course-list',
        component: CourseListComponent
      }
    ]
  }
];
