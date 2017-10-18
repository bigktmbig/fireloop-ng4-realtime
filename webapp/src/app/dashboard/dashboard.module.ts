import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

import { AuthAdminService } from '../services/auth-admin.service';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { FooterDrtDirective } from './footer-drt.directive';
import { HeaderDrtDirective } from './header-drt.directive';

@NgModule({
	imports: [
	CommonModule,
	FormsModule,
	DashboardRoutingModule
	],
	declarations: [UserComponent, IndexComponent, LoginComponent, FooterDrtDirective, HeaderDrtDirective],
	providers: [AuthService,CookieService,AuthAdminService]
})
export class DashboardModule { }
