import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CertificateRoutes } from './certificate.routing';

import { OrangeComponent } from './orange/orange.component';
import { BrownComponent } from './brown/brown.component';
import { GreenComponent } from './green/green.component';
import { BlueComponent } from './blue/blue.component';
import { GoldComponent } from './gold/gold.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CertificateRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [
    OrangeComponent, BrownComponent, GreenComponent, BlueComponent, GoldComponent
  ]
})
export class CertificateComponentsModule { }
