import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule,
  MatTableModule, MatSortModule, MatFormFieldModule, MatSelectModule, MatDialogModule, MatInputModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReportsComponent } from './reports.component';
import { ReportsRoutes } from './reports.routing';
import { ReportsService } from './reports.service';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ReportsRoutes),
    ChartsModule,
    NgxDatatableModule,
    FlexLayoutModule
  ],
  declarations: [ ReportsComponent],
  providers: [ReportsService]
})

export class ReportsModule {}
