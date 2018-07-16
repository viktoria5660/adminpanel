import {DocViewerComponent} from './doc-viewer';
import {ExampleViewerComponent} from '../example-viewer/example-viewer';
import {
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatTooltipModule,
  MatSnackBarModule,
} from '@angular/material';
import {PortalModule} from '@angular/cdk/portal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HeaderLinkComponent} from './header-link';
import {CopierService} from '../copier/copier.service';


// ExampleViewer is included in the DocViewerModule because they have a circular dependency.
@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTabsModule,
    MatCardModule,
    CommonModule,
    PortalModule
  ],
  providers: [CopierService],
  declarations: [DocViewerComponent, ExampleViewerComponent, HeaderLinkComponent],
  entryComponents: [ExampleViewerComponent, HeaderLinkComponent],
  exports: [DocViewerComponent, ExampleViewerComponent, HeaderLinkComponent],
})
export class DocViewerModule { }
