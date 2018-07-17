import {Routes} from '@angular/router';

import {AdminLayoutComponent, AuthLayoutComponent} from './core';

export const AppRoutes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
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
                path: 'questions',
                loadChildren: './questions/questions.module#QuestionsModule'
            },
            {
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }
        ]
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'session',
                loadChildren: './session/session.module#SessionModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/404'
    }
];
