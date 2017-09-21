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

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    DependencyComponent,
    DependencyAsyncComponent,
    InputAndOutputComponent,
    DashboardHeroComponent,
    DashboardHeroTestHostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
