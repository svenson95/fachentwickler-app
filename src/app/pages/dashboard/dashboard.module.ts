import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { PostLinkModule } from '../../components/post-link/post-link.module';
import { SchoolWeekCardModule } from '../../components/school-week-card/school-week-card.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
        CommonModule,
        FormsModule,
        DashboardRoutingModule,
        AngularMaterialModule,
        PostLinkModule,
        SchoolWeekCardModule
    ]
})
export class DashboardModule { }
