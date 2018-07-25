import {MatDialogRef} from '@angular/material';
import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.scss']
})
export class PreviewDialogComponent {
  type: string;
  src: string;
  @ViewChild('videoPlayer') player: any;
  constructor(public dialogRef: MatDialogRef<PreviewDialogComponent>) {
  }

  toggleVideo(event: any): void {
    this.player.nativeElement.paused ? this.player.nativeElement.play() : this.player.nativeElement.pause();
  }
}
