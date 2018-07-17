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
import { UsersComponent } from './users.component';
import { UsersRoutes } from './users.routing';
import { UsersService } from './users.service';
import { AddEditUserDialogComponent } from './add-edit-user-dialog/add-edit-user.dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(UsersRoutes),
    ChartsModule,
    NgxDatatableModule,
    FlexLayoutModule
  ],
  declarations: [ UsersComponent, AddEditUserDialogComponent ],
  providers: [UsersService],
  entryComponents: [AddEditUserDialogComponent]
})

export class UsersModule {}
