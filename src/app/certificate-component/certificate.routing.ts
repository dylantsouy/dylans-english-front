import { Routes } from '@angular/router';

import { OrangeComponent } from './orange/orange.component';
import { BrownComponent } from './brown/brown.component';
import { GreenComponent } from './green/green.component';
import { BlueComponent } from './blue/blue.component';
import { GoldComponent } from './gold/gold.component';
import { DetailComponent } from './detail/detail.component';

export const CertificateRoutes: Routes = [
  {
    path: 'orange',
    component: OrangeComponent
  },
  {
    path: 'brown',
    component: BrownComponent
  },
  {
    path: 'green',
    component: GreenComponent
  },
  {
    path: 'blue',
    component: BlueComponent
  },
  {
    path: 'gold',
    component: GoldComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
];
