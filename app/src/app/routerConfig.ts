// routerConfig.ts

import { Routes } from '@angular/router';
import { KainosEmployeeComponent } from './kainos-employee/kainos-employee.component';
import { TrainerComponent } from './trainer/trainer.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  { path: 'kainos-employee',
    component: KainosEmployeeComponent
  },
  { path: 'trainer',
    component: TrainerComponent
  },
  { path: 'map',
    component: MapComponent
  },
  { path: 'login',
    component: LoginComponent
  }
];
