import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productList = products;
  constructor(private router: Router) {}

  public productId: number = 0;
  public productName: string = '';
  public productPrice: number = 0;
  public productDescription: string = '';

  ngOnInit(): void {}

  addProduct(): void {
    //product: Product
    // this.productList.push(product);
    console.log('form working');
    this.productList.push({
      id: Number(this.productId),
      name: this.productName.toString(),
      price: Number(this.productPrice),
      description: this.productDescription.toString(),
    });
    console.log(this.productList);
    setTimeout(() => {
      this.router.navigate(['list']);
    }, 1000);
  }
}
