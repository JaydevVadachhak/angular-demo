import { Component, OnInit } from '@angular/core';
import { products, Product } from '../products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  productList: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.params;
    const productIdFromRoute = Number(routeParams['productEditId']);
    this.productList = products.find(
      (productList) => productList.id === productIdFromRoute
    );
    console.log(productIdFromRoute);
  }

  editProduct(): void {
    console.log(this.productList);
    this.router.navigate(['list']);
  }
}
