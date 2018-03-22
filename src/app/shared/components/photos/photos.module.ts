import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PhotosComponent } from './photos.component';
import { UnsplashService } from '../../services/unsplash.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    PhotosComponent
  ],
  providers: [
    UnsplashService
  ]
})
export class PhotosModule { }