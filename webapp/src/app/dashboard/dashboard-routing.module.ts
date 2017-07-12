import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
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
	}
},
{ 
	path: 'admin/user',
	component: UserComponent,
	data: {
		title: 'User page',
		metas: [
		{ name: 'author',   content: 'bigdeveloper.com'},
		{ name: 'keywords', content: 'user'},
		{ name: 'description', content: 'This is my user!' }
		]
	} 
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
