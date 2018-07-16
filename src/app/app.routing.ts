import {Routes} from '@angular/router';

import {AdminLayoutComponent, AuthLayoutComponent} from './core';

export const AppRoutes: Routes = [{
    path: '',
    component: AdminLayoutComponent,
    children: [{
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
        {
            path: 'apps',
            loadChildren: './apps/apps.module#AppsModule'
        },
        {
            path: 'settings',
            loadChildren: './settings/settings.module#SettingsModule'
        },
        {
            path: 'users',
            loadChildren: './users/users.module#UsersModule'
        },
        {
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }]
}, {
    path: '',
    component: AuthLayoutComponent,
    children: [{
        path: 'session',
        loadChildren: './session/session.module#SessionModule'
    }]
}, {
    path: '**',
    redirectTo: 'session/404'
}];
