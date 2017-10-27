import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { ProfileComponent } from './profile/profile.component';
import { IndexComponent } from './index/index.component';
import { HouseComponent } from './house/house.component';

import { AuthService } from '../services/auth.service';
const routes: Routes = [
{ 
	path: '',
	component: HomepageComponent,
	data: {
		title: 'Home page',
		metas: [
		{ name: 'author',   content: 'bigdeveloper.com'},
		{ name: 'keywords', content: 'home'},
		{ name: 'description', content: 'This is my home!' }
		]
	},
	children: [{
		path: '',
		component: IndexComponent,
		data: {
			title: 'Index page',
			metas: [
			{ name: 'author',   content: 'bigdeveloper.com'},
			{ name: 'keywords', content: 'index'},
			{ name: 'description', content: 'This is my index!' }
			]
		}
	},
	{ 
		path: 'login',
		component: LoginComponent,
		data: {
			title: 'Login page',
			metas: [
			{ name: 'author',   content: 'bigdeveloper.com'},
			{ name: 'keywords', content: 'login'},
			{ name: 'description', content: 'This is my login!' }
			]
		}
	},
	{ 
		path: 'todo',
		component: TodoComponent,
		data: {
			title: 'Todo page',
			metas: [
			{ name: 'author',   content: 'bigdeveloper.com'},
			{ name: 'keywords', content: 'todo'},
			{ name: 'description', content: 'This is my todo!' }
			]
		},
		canActivate: [AuthService]
	},
	{ 
		path: 'profile',
		component: ProfileComponent,
		data: {
			title: 'Profile page',
			metas: [
			{ name: 'author',   content: 'bigdeveloper.com'},
			{ name: 'keywords', content: 'profile'},
			{ name: 'description', content: 'This is my profile!' }
			]
		},
		canActivate: [AuthService]
	},
	{ 
		path: 'house/:id',
		component: HouseComponent,
		data: {
			title: 'House details page',
			metas: [
			{ name: 'author',   content: 'bigdeveloper.com'},
			{ name: 'keywords', content: 'house details'},
			{ name: 'description', content: 'This is my House detais!' }
			]
		},
		canActivate: [AuthService]
	}]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomepageRoutingModule { }
