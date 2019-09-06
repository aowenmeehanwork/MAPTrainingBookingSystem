// routerConfig.ts

import { Routes } from '@angular/router';
import { KainosEmployeeComponent } from './kainos-employee/kainos-employee.component';
import { TrainerComponent } from './trainer/trainer.component';
import { MapComponent } from './map/map.component';
import { AddCourseComponent } from "./add-course/add-course.component";

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
        path: '',
        redirectTo: 'add-course',
        pathMatch: 'full'
      },
      {
        path: 'add-course',
        component: AddCourseComponent
      }
    ]
  }
];
