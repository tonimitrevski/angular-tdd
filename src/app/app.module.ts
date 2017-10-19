import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { DependencyComponent } from './dependency/dependency.component';
import { UsersService } from './dependency/user.service';
import { DependencyAsyncComponent } from './dependency-async/dependency-async.component';
import {DashboardHeroComponent} from './input-and-output/dashboard-hero/dashboard-hero.component';
import {InputAndOutputComponent} from './input-and-output/input-and-output.component';
import {DashboardHeroTestHostComponent} from './input-and-output/dashboard-hero-test-host-component/dashboard-hero-test-host-com.component';
import {RouterComponentComponent} from './router-component/router-component.component';
import {HeroDetailComponent} from './hero/hero-detail.component';
import {AppRoutingModule} from "./app-routing.module";
import { PropertyClassBindingComponent } from './integrationTesting/property-class-binding/property-class-binding.component';

@NgModule({
  declarations: [
      AppComponent,
      SimpleComponent,
      DependencyComponent,
      DependencyAsyncComponent,
      InputAndOutputComponent,
      DashboardHeroComponent,
      DashboardHeroTestHostComponent,
      RouterComponentComponent,
      HeroDetailComponent,
      PropertyClassBindingComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
  ],
  providers: [
      UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
