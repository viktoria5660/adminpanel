import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {ChartsModule} from 'ng2-charts/ng2-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {SettingsComponent} from './settings.component';
import {SettingsRoutes} from './settings.routing';
import {SettingsService} from './settings.service';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(SettingsRoutes),
        FormsModule,
        ChartsModule,
        NgxDatatableModule,
        FlexLayoutModule
    ],
    declarations: [SettingsComponent],
    providers: [SettingsService]
})

export class SettingsModule {
}
