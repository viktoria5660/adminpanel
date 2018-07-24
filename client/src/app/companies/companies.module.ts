import {NgModule, ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule,
    MatTableModule, MatSortModule, MatFormFieldModule, MatSelectModule, MatDialogModule, MatInputModule
  } from '@angular/material';
import { AddCompanyDialogComponent } from './add-company-dialog/add-company.dialog.component';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {CompaniesComponent} from './companies.component';
import {CompaniesRoutes} from './companies.routing';
import {CompaniesService} from './companies.service';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(CompaniesRoutes),
        FormsModule,
        ChartsModule,
        NgxDatatableModule,
        FlexLayoutModule
    ],
    declarations: [CompaniesComponent, AddCompanyDialogComponent],
    entryComponents: [AddCompanyDialogComponent]

})

export class CompaniesModule {
}
