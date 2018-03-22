import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollectionsComponent } from './collections.component';
import { UnsplashService } from '../../services/unsplash.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [
    UnsplashService
  ]
})
export class CollectionsModule { }