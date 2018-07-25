import {MatDialogRef} from '@angular/material';
import {Component, OnInit} from '@angular/core';
import {scale} from '../animations';

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
  animations: [
    scale
  ]
})
export class AlertDialogComponent implements OnInit {
  title: string;
  message: string;
  type: string;
  color: string;
  icon: string;
  initScale = false;

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>) {
  }

  ngOnInit() {
    // this.initScale = true;
    setTimeout(() => {
      this.initScale = true;
    }, 200);
    switch (this.type) {
      case 'error' :
        this.color = 'text-danger';
        this.icon = 'clear';
        break;
      case 'success':
        this.color = 'text-success';
        this.icon = 'done';
        break;
      case 'warning':
        this.color = 'text-warning';
        this.icon = 'error_outline';
        break;
      default:
        this.color = 'text-info';
        break;
    }
  }
}
