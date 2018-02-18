import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../shared/services/unsplash.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public photos: any;

  constructor(private _unsplashService: UnsplashService, public config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit() {
    this._unsplashService.getPhotos().subscribe(items => {
      this.photos = items;
    });
  }
}
