import { Routes } from '@angular/router';

import { AdminwordComponent } from './word/adminword.component';
import { AdminComponent } from './admin.component';

export const AdminRoutes: Routes = [
  {
    path: 'adminword',
    component: AdminwordComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  }
];
