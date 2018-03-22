import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
  animations: [
    trigger('collections', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('500ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class CollectionsComponent implements OnInit {
  public collections: any;
   
  constructor(private _router: Router, private _unsplashService: UnsplashService) { 
  }
  
  ngOnInit() {
    this._unsplashService.getTopPopularCollections(10).subscribe(items => {
      this.collections = items;
    });
  }
  
  goToPhotos = (id: number) => {
    this._router.navigate(['/photos', id]);
  }

}
