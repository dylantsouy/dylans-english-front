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

import { CertificateComponent } from './certificate.component';
import { DetailComponent } from '../detail/detail.component';
import { TestComponent } from './test/test.component';

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
  entryComponents: [DetailComponent],
  declarations: [
    CertificateComponent, TestComponent
  ]
})
export class CertificateComponentsModule { }
