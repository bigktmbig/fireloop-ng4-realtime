import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';

import { AuthAdminService } from '../services/auth-admin.service';
const routes: Routes = [
{
	path: 'admin', 
	component: DashboardComponent, 
	data: {
		title: 'Dashboard',
		metas: [
		{ name: 'author',   content: 'bigdeveloper.com'},
		{ name: 'keywords', content: 'admin'},
		{ name: 'description', content: 'This is my admin!' }
		]
	},
	children: [{
		path: 'users',
		component: UserComponent,
		data: {
			title: 'Users page',
			metas: [
			{ name: 'author',   content: 'bigdeveloper.com'},
			{ name: 'keywords', content: 'users'},
			{ name: 'description', content: 'This is my users!' }
			]
		},
		canActivate: [AuthAdminService]
	},{
		path: 'index',
		component: IndexComponent,
		data: {
			title: 'Index page',
			metas: [
			{ name: 'author',   content: 'bigdeveloper.com'},
			{ name: 'keywords', content: 'index'},
			{ name: 'description', content: 'This is my index!' }
			]
		},
		canActivate: [AuthAdminService]
	},{
		path: '**',
		component: LoginComponent,
		data: {
			title: 'Login page',
			metas: [
			{ name: 'author',   content: 'bigdeveloper.com'},
			{ name: 'keywords', content: 'login'},
			{ name: 'description', content: 'This is my login!' }
			]
		}
	}]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
