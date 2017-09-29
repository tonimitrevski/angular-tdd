import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule'}
        ])
    ],
    exports: [ RouterModule ] // re-export the module declarations
})
export class AppRoutingModule { };
