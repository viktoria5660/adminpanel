import {DialogsService} from './dialogs.service';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {ConfirmDialogComponent} from './confirm/confirm-dialog.component';
import {AlertDialogComponent} from './alert/alert-dialog.component';
import {PreviewDialogComponent} from './preview/preview-dialog.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        // Material
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
    ],
    declarations: [
        ConfirmDialogComponent,
        AlertDialogComponent,
        PreviewDialogComponent,
    ],
    exports: [
        ConfirmDialogComponent,
        AlertDialogComponent,
        PreviewDialogComponent,
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        ConfirmDialogComponent,
        AlertDialogComponent,
        PreviewDialogComponent,
    ],
})
export class DialogsModule {
}
