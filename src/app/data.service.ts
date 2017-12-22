import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shop } from './Shop';

@Injectable()
export class DataService {

  headers = new Headers({ 'Content-Type': 'application/json' });

  data=[1,2];

  private shopsUrl = 'api/shop';  // URL to web API

  constructor(private http: Http) { }

  // Get all shops
  getShops(): Promise<Shop[]> {
    return this.http.post(this.shopsUrl, { x:{y:1,z:2} } , {headers : this.headers})
               .toPromise()
               .then(response => response.json() as Shop[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
