import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ShareModule } from '../shared/share/share.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { ProfileComponent } from './profile/profile.component';
import { IndexComponent } from './index/index.component';
import { HouseComponent } from './house/house.component';

@NgModule({
	declarations: [
	LoginComponent,
	TodoComponent,
	ProfileComponent,
	IndexComponent,
	HouseComponent,
	],
	imports: [
	CommonModule,
	FormsModule,
	ShareModule,
	HomepageRoutingModule,
	NgbModule,
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyADPPgcIAf7t6nIzf7Do467IWOU6OQkst8'
	})
	],
	bootstrap: [
	LoginComponent,
	TodoComponent,
	ProfileComponent,
	IndexComponent,
	HouseComponent
	]
})
export class HomepageModule { }
