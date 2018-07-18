import {ModuleWithProviders, NgModule} from '@angular/core';
import {CompanyService} from './company.service';
@NgModule({
    imports: [],
    declarations: [],
})

export class CompanyModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CompanyModule,
            providers: [
                CompanyService
            ]
        };
    }
}
