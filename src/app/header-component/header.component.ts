import { Component, OnInit, Optional}  from '@angular/core';
import { CartService }        from '../package-service/cart.service';
import { MdDialog, MdDialogRef } from '@angular/material';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor (
    private cartService: CartService,
    private _dialog: MdDialog,
  ) {
    this.cartService = cartService;
  }

  cart = {};

  getCartItems () {
    this.cart = this.cartService.getCartItems();
  }

  openDialog() {
    this._dialog.open(DialogContent);
  }

  ngOnInit(): void {
    this.getCartItems();

    $(window).scroll(function() {
      if ($(document).scrollTop() > 110) {
        $('header').addClass('shrink-nav');
      } else {
        $('header').removeClass('shrink-nav');
      }
    });

    $('.ham-icon').click(function(){
      $('.page-nav').toggleClass('page-nav-visible');
    });

  }
}

@Component({
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class DialogContent implements OnInit  {
  constructor( 
      @Optional() public dialogRef: MdDialogRef<DialogContent>,
       private cartService: CartService) 
  { this.cartService = cartService; }

    cart = {};

    getCartItems () {
    this.cart = this.cartService.getCartItems();
  }

    ngOnInit(): void {
    this.getCartItems();
  }

  removePackage(item) {
    this.cartService.removeItem(item.id);
  }

}