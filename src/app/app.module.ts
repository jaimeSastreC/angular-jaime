import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponentComponent } from './premier-component/premier-component.component';
import { AppareilComponent } from './appareil/appareil.component';
// ajouter pour bidirectionnal binding
import { FormsModule} from '@angular/forms';
import { AppareilService} from './services/appareil.service';
import {AuthService} from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', component: AppareilViewComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PremierComponentComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
