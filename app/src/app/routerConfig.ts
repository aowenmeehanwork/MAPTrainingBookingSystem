// routerConfig.ts

import { Routes } from '@angular/router';
import { KainosEmployeeComponent } from './kainos-employee/kainos-employee.component';
import { TrainerComponent } from './trainer/trainer.component';
import { MapComponent } from './map/map.component';
import { AddCourseComponent } from "./add-course/add-course.component";
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' },
  {
    path: 'kainos-employee',
    component: KainosEmployeeComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
