import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomepageRoutingModule } from './homepage-routing.module';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { ProfileComponent } from './profile/profile.component';
import { IndexComponent } from './index/index.component';
import { HeaderDrtDirective } from './header-drt.directive';
import { FooterDrtDirective } from './footer-drt.directive';

@NgModule({
	declarations: [
	LoginComponent,
	TodoComponent,
	ProfileComponent,
	IndexComponent,
	HeaderDrtDirective,
	FooterDrtDirective
	],
	imports: [
	CommonModule,
	FormsModule,
	HomepageRoutingModule,
	NgbModule,
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyADPPgcIAf7t6nIzf7Do467IWOU6OQkst8'
	})
	],
	bootstrap: [LoginComponent, TodoComponent, ProfileComponent, IndexComponent]
})
export class HomepageModule { }
