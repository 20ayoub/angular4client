import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shop } from './Shop';
import { Point } from './Point';


@Injectable()
export class DataService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  
  coord = new Point([1,2]) ;
  


  private shopsUrl = 'api/shop';  // URL to web API

  constructor(private http: Http) { }

 

  // Get all shops
  getShops(): Promise<Shop[]> {
    console.log(this.http.post(this.shopsUrl, this.coord, {headers : this.headers})
    .toPromise().then( response => response.json() as Shop[])
    .catch(this.handleError));
    return this.http.post(this.shopsUrl, this.coord, {headers : this.headers})
               .toPromise()
               .then( response => response.json() as Shop[])
               .catch(this.handleError);
  }

  postShops(x : number,y:number): Promise<Shop[]> {
    let po = new Point([Number(x),Number(y)]);
   

    return this.http.post(this.shopsUrl, po , {headers : this.headers})
    .toPromise()
    .then(response => response.json() as Shop[])
    .catch(this.handleError);
  }
  

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
