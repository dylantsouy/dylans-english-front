import { Routes } from '@angular/router';

import { AdminwordComponent } from './word/adminword.component';
import { AdminDailySentenceComponent } from './dailysentence/admindailysentence.component';
import { AdminDailyWordComponent } from './dailyword/admindailyword.component';
import { AdminDailyArticleComponent } from './dailyarticle/admindailyarticle.component';
import { AdminComponent } from './admin.component';

export const AdminRoutes: Routes = [
  {
    path: 'adminword',
    component: AdminwordComponent,
  },
  {
    path: 'admindailysentence',
    component: AdminDailySentenceComponent,
  },
  {
    path: 'admindailyword',
    component: AdminDailyWordComponent,
  },
  {
    path: 'admindailyarticle',
    component: AdminDailyArticleComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  }
];
