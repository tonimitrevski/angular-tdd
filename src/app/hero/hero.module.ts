import { NgModule } from '@angular/core';
import { routedComponents, HeroRoutingModule } from './hero-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports:      [ SharedModule, HeroRoutingModule ],
  declarations: [ routedComponents ]
})
export class HeroModule { }
