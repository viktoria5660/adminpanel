import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [`    
    .form-actions {
      text-align: center;
    }
  `]
})
export class ConfirmDialogComponent {

  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {

  }
}
