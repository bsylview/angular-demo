import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminComponent } from './components/admin/admin.component';
import { AppComponent } from './app.component';

import { AuthGuard } from './shared/guards/auth-guard.guard';
import { UnsplashService } from './shared/services/unsplash.service';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './components/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [
    UnsplashService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
