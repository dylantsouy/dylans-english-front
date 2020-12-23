import { Routes } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { ErrorComponent } from './components/error/error.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./pages/certificate/certificate.module').then(m => m.CertificateComponentsModule)
      },
      {
        path: '',
        loadChildren:
          () => import('./pages/login/login.module').then(m => m.LoginComponentsModule)
      },
      {
        path: '',
        loadChildren:
          () => import('./pages/admin/admin.module').then(m => m.AdminComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: '404',
        component: ErrorComponent,
      },
      {
        path: '**',
        redirectTo: '/404',
      },
    ]
  }
];
