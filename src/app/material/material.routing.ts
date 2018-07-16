import { Routes } from '@angular/router';

import {
  ComponentExamplesComponent,
  ComponentViewerComponent
} from './pages/component-viewer/component-viewer';

export const MaterialRoutes: Routes = [
  {
    path: ':id',
    component: ComponentViewerComponent,
    children: [
      {
        path: '', component: ComponentExamplesComponent, pathMatch: 'full'
      },
    ]
  },
];
