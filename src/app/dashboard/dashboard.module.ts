import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { OverviewComponent } from './dashboard-components/overview/overview.component';
import { LevelComponent } from './dashboard-components/level/level.component';
import { UserComponent } from './dashboard-components/user/user.component';
import { NotedComponent } from './dashboard-components/noted/noted.component';
import { DailyComponent } from './dashboard-components/daily/daily.component';
import { MaterialModule } from '../material-module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent, OverviewComponent, LevelComponent, UserComponent, NotedComponent, DailyComponent]
})
export class DashboardModule {}
