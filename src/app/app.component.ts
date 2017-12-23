import { Component, OnInit } from '@angular/core';
import { Shop } from './Shop';
import { Point } from './Point';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  shops: Shop[];
  selectedShop: Shop;
  point = new Point([]);
  x:number;
  y:number;
  po= new Point([]);

  constructor(private dataService: DataService) {}

  getShops() {
    this.reset();
    this.point.coordinates.push(0);
    this.point.coordinates.push(0);

     return this.dataService.getShops().then(shops =>{ this.shops = shops })
  }

  search()  {
    return this.dataService.postShops(this.x,this.y)
    .then(shops =>{ this.shops = shops }) 
    
   // this.http.post("http://www.testtttt.com", body).subscribe((data) => {});

  }  

  ngOnInit(): void {
    
     this.getShops();
  }

  onSelect(shop: Shop): void {
    this.selectedShop = shop;
  }
  private reset() {
  this.point.coordinates = [];	 
}   

}
