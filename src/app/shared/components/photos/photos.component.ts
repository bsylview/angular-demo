import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public photos: any;

  constructor(private route: ActivatedRoute, private _unsplashService: UnsplashService, public config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit() {
    const collectionID: number  = +this.route.snapshot.paramMap.get('collectionID');
    
    this._unsplashService.getTopCollectionPhotos(collectionID, 10, 'popular').subscribe(items => {
      this.photos = items;
    });
  }

}
