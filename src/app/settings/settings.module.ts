import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SettingsComponent } from './settings.component';
import { SettingsRoutes } from './settings.routing';
import { SettingsService } from './settings.service';
////////////////////////////////
import { FormValidationComponent } from './settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRoutes } from './settings.routing';
///////////////////////


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes),
    RouterModule.forChild(FormRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    ChartsModule,
    ReactiveFormsModule,
    // // FormBuilder,
    // FormGroup,
    // FormArray,
    // FormControl,
    FormsModule,
    // NgForm,
    NgxDatatableModule,
    FlexLayoutModule
  ],
  declarations: [ SettingsComponent, FormValidationComponent ],
  providers: [SettingsService]
})

export class SettingsModule {}
