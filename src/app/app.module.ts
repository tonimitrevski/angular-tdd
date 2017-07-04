import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { DependencyComponent } from './dependency/dependency.component';
import { UsersService } from './dependency/user.service';
import { InputAndOutputComponent } from './input-and-output/input-and-output.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    DependencyComponent,
    InputAndOutputComponent
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
