import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserComponent } from './user/user.component';

import { AuthAdminService } from '../services/auth-admin.service';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
	imports: [CommonModule, FormsModule, DashboardRoutingModule],
	declarations: [UserComponent],
	providers: [AuthService, CookieService, AuthAdminService]
})
export class DashboardModule { }
