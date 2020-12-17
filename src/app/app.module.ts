
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { StoreService } from './shared/store';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DefaultComponent } from './layouts/default/default.component';
import { AppHeaderComponent } from './layouts/default/header/header.component';
import { AppSidebarComponent } from './layouts/default/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { DetailComponent } from './detail/detail.component';
import { AddnotedComponent } from './addnoted/addnoted.component';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    DetailComponent,
    AddnotedComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
