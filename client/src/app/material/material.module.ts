import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material';

import { ExampleModule } from '../../../material-examples';
import { ComponentViewerModule } from './pages/component-viewer/component-viewer';

import { MaterialRoutes } from './material.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MatNativeDateModule,
    ExampleModule,
    ComponentViewerModule,
  ],
})

export class MaterialComponentsModule {}
