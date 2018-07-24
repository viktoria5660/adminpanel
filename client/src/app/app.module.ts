import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';


import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {LoadingBarRouterModule} from '@ngx-loading-bar/router';

import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {AgmCoreModule} from '@agm/core';

import {MatSortModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BidiModule} from '@angular/cdk/bidi';

import {
    AccordionAnchorDirective,
    AccordionDirective,
    AccordionLinkDirective,
    AdminLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent,
    MenuComponent,
    NotificationComponent,
    OptionsComponent,
    SidebarComponent
} from './core';

import {AppRoutes} from './app.routing';
import {AppComponent} from './app.component';
import {ApiService} from './_services/api.service';
import {SharedModule} from './shared/shared.module';
import {CompaniesService} from './companies/companies.service';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
};

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        NotificationComponent,
        OptionsComponent,
        MenuComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective,
    ],
    imports: [
        SharedModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(AppRoutes),
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        LoadingBarRouterModule,
        FlexLayoutModule,
        BidiModule,
        MatSortModule,
        AgmCoreModule.forRoot({apiKey: 'YOURAPIKEY'}),
        PerfectScrollbarModule,
    ],
    providers: [
        ApiService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
