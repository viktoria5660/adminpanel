import { Routes } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { FormValidationComponent } from './settings.component';


export const SettingsRoutes: Routes = [{
  path: '',
  component: SettingsComponent
},
{
  path: '',
  component: FormValidationComponent
},
];

export const FormRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'validation',
      component: FormValidationComponent
    }
  ]
  }
];

