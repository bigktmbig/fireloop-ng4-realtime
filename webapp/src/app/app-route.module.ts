import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreloadStrategyService } from './services/preload-strategy.service';

import { PageNotfoundComponent } from './layout/page-notfound/page-notfound.component';

import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { HomepageRoutingModule } from './homepage/homepage-routing.module';

const appRoutes: Routes = [
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
	DashboardRoutingModule,
	HomepageRoutingModule,
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
