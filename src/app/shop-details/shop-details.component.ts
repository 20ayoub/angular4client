
import { Component, OnInit, Input } from '@angular/core';

import { Shop } from '../shop';
import { DataService } from '../data.service';

import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'shop-detail',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css'],
  providers: [DataService]
})
export class ShopDetailsComponent {

  @Input() shop: Shop;
}