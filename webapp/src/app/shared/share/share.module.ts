import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from '../../homepage/homepage-routing.module';

import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
@NgModule({
	imports: [
	CommonModule,
	HomepageRoutingModule
	],
	declarations: [
	HeaderComponent,
	FooterComponent
	],
	exports: [
	HomepageRoutingModule,
	HeaderComponent,
	FooterComponent
	],
})
export class ShareModule { }
