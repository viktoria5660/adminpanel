import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FileSelectDirective} from 'ng2-file-upload';

import {FlexLayoutModule} from '@angular/flex-layout';

import {ChartsModule} from 'ng2-charts/ng2-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {QuestionsComponent} from './questions.component';
import {QuestionsRoutes} from './questions.routing';
import {QuestionsService} from './questions.service';
import {AddEditQuestionDialogComponent} from './add-edit-question-dialog/add-edit-question.dialog.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(QuestionsRoutes),
        ChartsModule,
        NgxDatatableModule,
        FlexLayoutModule
    ],
    declarations: [QuestionsComponent, AddEditQuestionDialogComponent, FileSelectDirective],
    providers: [QuestionsService],
    entryComponents: [AddEditQuestionDialogComponent]
})

export class QuestionsModule {
}
