// routerConfig.ts

import { Routes } from '@angular/router';
import { KainosEmployeeComponent } from './kainos-employee/kainos-employee.component';
import { TrainerComponent } from './trainer/trainer.component';

const appRoutes: Routes = [
  { path: 'kainos-employee',
    component: KainosEmployeeComponent
  },
  { path: 'trainer',
    component: TrainerComponent
  }
];

export default appRoutes;
