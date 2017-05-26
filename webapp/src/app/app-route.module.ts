import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreloadStrategyService } from './services/preload-strategy.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotfoundComponent } from './layout/page-notfound/page-notfound.component';

const appRoutes: Routes = [
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
	path: '',
	component: HomepageComponent,
	data: {
		title: 'Home page',
		metas: [
		{ name: 'author',   content: 'bigdeveloper.com'},
		{ name: 'keywords', content: 'home'},
		{ name: 'description', content: 'This is my home!' }
		]
	} 
},
{ 
	path: '**', 
	component: PageNotfoundComponent, 
	data: {
		title: 'Not found',
		metas: [
		{ name: 'author',   content: 'bigdeveloper.com'},
		{ name: 'keywords', content: 'not found'},
		{ name: 'description', content: 'This is my Not found!' }
		]
	} 
}
];

@NgModule({
	imports: [
	CommonModule,
	RouterModule.forRoot(
		appRoutes,
		{ preloadingStrategy: PreloadStrategyService }
		)
	],
	declarations: [],
	exports: [
	RouterModule
	],
	providers: [
	PreloadStrategyService
	]
})
export class AppRouteModule { }
