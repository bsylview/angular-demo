import { Injectable } from '@angular/core';
import Unsplash from 'unsplash-js';
import { each} from 'lodash';

import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { catchError, map, tap, switchMap } from 'rxjs/operators';

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
    .pipe(
      switchMap((json: any) => json.json())
    );
  }
}