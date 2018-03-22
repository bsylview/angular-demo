import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthGuard } from './shared/guards/auth-guard.guard';
import { UnsplashService } from './shared/services/unsplash.service';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './components/login/login.module';
import { AdminModule } from './components/admin/admin.module';
import { CollectionsModule } from './shared/components/collections/collections.module';
import { PhotosModule } from './shared/components/photos/photos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AdminModule,
    CollectionsModule,
    PhotosModule,
    AppRoutingModule,
  ],
  providers: [
    UnsplashService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
