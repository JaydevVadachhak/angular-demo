import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList = products;
  constructor() {}

  ngOnInit(): void {}

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  delete() {
    window.alert('You will be notified when the product is deleted');
  }

  edit() {
    window.alert('You will be notified when the product is updated');
  }
}
