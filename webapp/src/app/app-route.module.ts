import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreloadStrategyService } from './services/preload-strategy.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotfoundComponent } from './layout/page-notfound/page-notfound.component';

const appRoutes: Routes = [
{
	path: 'admin', component: DashboardComponent, data: {title: 'Dashboard'}
},
{ path: '', component: HomepageComponent, data: {title: 'Home page'} },
{ path: '**', component: PageNotfoundComponent, data: {title: 'Not found'} }
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
