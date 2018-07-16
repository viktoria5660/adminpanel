import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatCardModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {ChartsModule} from 'ng2-charts/ng2-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {SettingsComponent} from './settings.component';
import {SettingsRoutes} from './settings.routing';
import {SettingsService} from './settings.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SettingsRoutes),
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatProgressBarModule,
        MatMenuModule,
        ChartsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        NgxDatatableModule,
        FlexLayoutModule
    ],
    declarations: [SettingsComponent],
    providers: [SettingsService]
})

export class SettingsModule {
}
