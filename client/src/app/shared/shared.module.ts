import {ModuleWithProviders, NgModule} from '@angular/core';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule,
    MatInputModule, MatListModule,
    MatMenuModule, MatOptionModule,
    MatProgressBarModule, MatSelectModule, MatSortModule,
    MatSidenavModule, MatSlideToggleModule, MatTableModule, MatTabsModule, MatToolbarModule, MatProgressSpinnerModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MatSortModule,
        // material
        MatSidenavModule,
        MatCardModule,
        MatMenuModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatListModule,
        MatSlideToggleModule,
        MatTableModule,
        MatSelectModule,
        MatOptionModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDialogModule,
    ],
    declarations: [],
    exports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatCardModule,
        MatMenuModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatListModule,
        MatSlideToggleModule,
        MatTableModule,
        MatSelectModule,
        MatOptionModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
