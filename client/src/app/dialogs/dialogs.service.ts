import {Observable} from 'rxjs/Observable';
import {ConfirmDialogComponent} from './confirm/confirm-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Injectable} from '@angular/core';
import {AlertDialogComponent} from './alert/alert-dialog.component';
import {PreviewDialogComponent} from './preview/preview-dialog.component';

@Injectable()
export class DialogsService {

    constructor(private dialog: MatDialog) {
    }

    confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MatDialogRef<ConfirmDialogComponent>;

        dialogRef = this.dialog.open(ConfirmDialogComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }



    /**
     * open alert with any title and message
     * @param {string} title
     * @param {string} message
     * @param {string} type - pass 'error' , 'warning' , 'success'. color and icon will appear accordingly. default is blue.
     * @param {timeout} timeout - if passed, automatically close dialog after timeout (in millisecond)
     * @returns {Observable<boolean>}
     */
    alert(title: string, message: string, type?: string, timeout?: number): Observable<boolean> {

        let dialogRef: MatDialogRef<AlertDialogComponent>;

        dialogRef = this.dialog.open(AlertDialogComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.type = type;
        if (timeout) {
            setTimeout(() => dialogRef.close(), timeout);
        }

        return dialogRef.afterClosed();
    }

    /**
     *
     * open dialog with image/video
     * @param {string} type - 'Image' or 'Video'
     * @param {string} src - asset src
     * @param {string} maxWidth - optional: max dialog width. ex: 400px
     * @returns {Observable<boolean>}
     */
    preview(type: string, src: string, maxWidth?: string): Observable<boolean> {

        let dialogRef: MatDialogRef<PreviewDialogComponent>;
        const options: any = {};
        if (maxWidth) {
            options.maxWidth = maxWidth;
        }

        dialogRef = this.dialog.open(PreviewDialogComponent, options);
        dialogRef.componentInstance.type = type;
        dialogRef.componentInstance.src = src;

        return dialogRef.afterClosed();
    }





}
