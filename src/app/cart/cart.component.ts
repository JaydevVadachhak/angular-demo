import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from '../products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearItems();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
