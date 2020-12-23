
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
import { SharedModule } from './shared/shared.module';
/* component */
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { AddnotedComponent } from './components/addnoted/addnoted.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    DetailComponent,
    AddnotedComponent,
    ErrorComponent
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
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 1500 } },
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
