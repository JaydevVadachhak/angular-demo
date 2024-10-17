import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private CartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.params;
    const productIdFromRoute = Number(routeParams['productId']);
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.CartService.addToCart(product);
    // console.log(product);
    window.alert('Your Product Has Been Added to Cart');
  }
}
