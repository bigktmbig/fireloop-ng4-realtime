import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SDKBrowserModule } from './shared/sdk/index';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { Router } from '@angular/router';
import { AppRouteModule } from './app-route.module';
import { PageNotfoundComponent } from './layout/page-notfound/page-notfound.component';
import { Title } from '@angular/platform-browser';

@NgModule({
  declarations: [
  AppComponent,
  DashboardComponent,
  HomepageComponent,
  HeaderComponent,
  FooterComponent,
  PageNotfoundComponent
  ],
  imports: [
  BrowserModule,
  HttpModule,
  FormsModule,
  AppRouteModule,
  SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})

export class AppModule {
  constructor(router: Router, titleService: Title) {
    console.log(router.config);
    for (var i = 0; i < router.config.length; ++i) {
      // if(router.currentRouterState.snapshot.url == router.config[i].path) {
      //   titleService.setTitle(router.config[i].data.title);
      // }
    }
  }
}
