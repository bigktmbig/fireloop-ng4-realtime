import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomepageRoutingModule } from './homepage-routing.module';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	imports: [
	CommonModule,
	FormsModule,
	HomepageRoutingModule
	],
	declarations: [LoginComponent, TodoComponent, ProfileComponent]
})
export class HomepageModule { }
