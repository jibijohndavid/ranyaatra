import { Component, OnInit }  from '@angular/core';
import { CartService }        from '../package-service/cart.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor (private cartService: CartService) {
    this.cartService = cartService;
  }

  cart = {
    items:[],
    count:0
  }

  getCartItems () {
    this.cart = this.cartService.getCartItems();
  }

  viewCart () {
    console.log(this.cart);
  }

  ngOnInit(): void {
    this.getCartItems();
  }
}
