// routerConfig.ts

import { Routes } from '@angular/router';
import { KainosEmployeeComponent } from './kainos-employee/kainos-employee.component';
import { TrainerComponent } from './trainer/trainer.component';
import { MapComponent } from './map/map.component';
import { AddCourseComponent } from "./add-course/add-course.component";
import { MapLandingComponent } from "./map-landing/map-landing.component";

export const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: 'kainos-employee', 
    pathMatch: 'full' },
  { 
    path: 'kainos-employee', 
    component: KainosEmployeeComponent
  },
  { 
    path: 'trainer', 
    component: TrainerComponent 
  },
  { 
    path: 'map',
    component: MapComponent,
    children: [
      {
        path: 'map-landing',
        pathMatch: 'full',
        component: MapLandingComponent
      },
      {
        path: 'add-course',
        component: AddCourseComponent
      }
    ]
  }
];
