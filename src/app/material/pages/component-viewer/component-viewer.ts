import {BreakpointObserver} from '@angular/cdk/layout';
import {CommonModule} from '@angular/common';
import {
  Component,
  ElementRef,
  NgModule,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {ActivatedRoute, Params, Router, RouterModule} from '@angular/router';
import {combineLatest, Observable, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {DocViewerModule} from '../../shared/doc-viewer/doc-viewer-module';
import {DocItem, DocumentationItems} from '../../shared/documentation-items/documentation-items';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.html',
  encapsulation: ViewEncapsulation.None,
})
export class ComponentViewerComponent implements OnDestroy {
  componentDocItem: DocItem;
  sections: Set<string> = new Set(['overview', 'api']);
  private _destroyed = new Subject();

  constructor(_route: ActivatedRoute,
              private router: Router,
              public docItems: DocumentationItems,
              ) {
    // Listen to changes on the current route for the doc id (e.g. button/checkbox) and the
    // parent route for the section (material/cdk).
    combineLatest(_route.params, _route.parent.params).pipe(
        map((p: [Params, Params]) => ({id: p[0]['id'], section: p[1]['section']})),
        map(p => ({doc: docItems.getItemById(p.id, p.section), section: p.section}),
        takeUntil(this._destroyed))
        ).subscribe(d => {
          this.componentDocItem = d.doc;
          if (this.componentDocItem) {
            this.componentDocItem.examples.length ?
                this.sections.add('examples') :
                this.sections.delete('examples');
          } else {
            this.router.navigate(['/' + d.section]);
          }
        });
  }

  ngOnDestroy(): void {
    this._destroyed.next();
  }
}

@Component({
  selector: 'app-component-examples',
  templateUrl: './component-examples.html',
  encapsulation: ViewEncapsulation.None,
})
export class ComponentExamplesComponent implements OnInit {
  @ViewChild('intialFocusTarget') focusTarget: ElementRef;

  constructor(public componentViewer: ComponentViewerComponent) {

  }

  ngOnInit() {
    // 100ms timeout is used to allow the page to settle before moving focus for screen readers.
    setTimeout(() => this.focusTarget.nativeElement.focus(), 100);
  }
}

@NgModule({
  imports: [
    RouterModule,
    DocViewerModule,
    CommonModule,
  ],
  exports: [ComponentViewerComponent],
  declarations: [ComponentViewerComponent, ComponentExamplesComponent],
  providers: [DocumentationItems],
})
export class ComponentViewerModule {}
