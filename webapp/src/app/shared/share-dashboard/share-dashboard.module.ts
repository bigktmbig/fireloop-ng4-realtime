import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from '../../dashboard/dashboard-routing.module';
import { HeaderDashboardComponent } from '../../layout/header-dashboard/header-dashboard.component';
import { FooterDashboardComponent } from '../../layout/footer-dashboard/footer-dashboard.component';
@NgModule({
	imports: [
	CommonModule,
	DashboardRoutingModule
	],
	declarations: [
	HeaderDashboardComponent,
	FooterDashboardComponent
	],
	exports: [
	DashboardRoutingModule,
	HeaderDashboardComponent,
	FooterDashboardComponent
	],
})
export class ShareDashboardModule { }
