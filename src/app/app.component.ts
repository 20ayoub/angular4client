import { Component, OnInit } from '@angular/core';
import { Shop } from './Shop';
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

  constructor(private dataService: DataService) {}

  getShops() {
     return this.dataService.getShops().then(shops => this.shops = shops);
  }

  ngOnInit(): void {
     this.getShops();
  }

  onSelect(shop: Shop): void {
    this.selectedShop = shop;
  }
}
