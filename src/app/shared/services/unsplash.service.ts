import { Injectable } from '@angular/core';
import Unsplash from 'unsplash-js';

import { Observable ,  from as fromPromise } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

const unsplash = new Unsplash({
  applicationId: environment.unsplash.applicationId,
  secret: environment.unsplash.secret,
  callbackUrl: environment.unsplash.callbackUrl
});

@Injectable()
export class UnsplashService {

  constructor() { }

  /** Get photos from unsplash server */
  getPhotos = (): Observable<any> => {
    return fromPromise(unsplash.photos.listPhotos(2, 15, 'latest'))
    .pipe(switchMap((json: any) => json.json()));
  }

  /** Get top 10 popular collections */
  getTopPopularCollections = (number: number): Observable<any> => {
    return fromPromise(unsplash.collections.listCuratedCollections(1, number))
      .pipe(
        switchMap((json: any) => json.json())
      );
  }

  getTopCollectionPhotos = (id: number, photos: number, orderBy: string): Observable<any> => {
    return fromPromise(unsplash.collections.getCuratedCollectionPhotos(id, 1, photos, orderBy))
      .pipe(
        switchMap((json: any) => json.json())
      );
  }

}
