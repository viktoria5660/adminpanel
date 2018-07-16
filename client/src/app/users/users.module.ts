import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule,
  MatTableModule, MatSortModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UsersComponent } from './users.component';
import { UsersRoutes } from './users.routing';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatProgressBarModule,
    MatMenuModule,
    ChartsModule,
    NgxDatatableModule,
    FlexLayoutModule
  ],
  declarations: [ UsersComponent ],
  providers: [UsersService]
})

export class UsersModule {}
