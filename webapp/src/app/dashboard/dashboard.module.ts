import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShareDashboardModule } from '../shared/share-dashboard/share-dashboard.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

import { AuthAdminService } from '../services/auth-admin.service';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
	imports: [
	CommonModule,
	FormsModule,
	ShareDashboardModule,
	DashboardRoutingModule
	],
	declarations: [
	UserComponent,
	IndexComponent,
	LoginComponent
	],
	providers: [
	AuthService,
	CookieService,
	AuthAdminService
	]
})
export class DashboardModule { }
