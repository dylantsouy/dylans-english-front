import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutes } from './admin.routing';

import { AdminwordComponent } from './word/adminword.component';
import { AdminDailySentenceComponent } from './dailysentence/admindailysentence.component';
import { AdminDailyWordComponent } from './dailyword/admindailyword.component';
import { AdminDailyArticleComponent } from './dailyarticle/admindailyarticle.component';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  entryComponents: [],
  declarations: [
    AdminwordComponent, AdminComponent, AdminDailySentenceComponent, AdminDailyWordComponent, AdminDailyArticleComponent
  ]
})
export class AdminComponentsModule { }
