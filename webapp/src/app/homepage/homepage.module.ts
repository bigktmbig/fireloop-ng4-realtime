import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomepageRoutingModule } from './homepage-routing.module';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	imports: [
	CommonModule,
	FormsModule,
	HomepageRoutingModule,
	NgbModule,
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyADPPgcIAf7t6nIzf7Do467IWOU6OQkst8'
	})
	],
	bootstrap: [LoginComponent, TodoComponent, ProfileComponent],
	declarations: [LoginComponent, TodoComponent, ProfileComponent]
})
export class HomepageModule { }
