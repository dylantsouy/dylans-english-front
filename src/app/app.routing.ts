import { Routes } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';

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
          () => import('./certificate/certificate.module').then(m => m.CertificateComponentsModule)
      },
      {
        path: '',
        loadChildren:
          () => import('./login/login.module').then(m => m.LoginComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
