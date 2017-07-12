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

  cart = {
    items:[],
    count:0
  }

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

    cart = {
    items:[],
    count:0
  }

    getCartItems () {
    this.cart = this.cartService.getCartItems();
  }

    ngOnInit(): void {
    this.getCartItems();
  }

  removePackage($event: any) {
      // $('#packageNo'+ $event +'').fadeOut(900).delay(900).remove();
      // console.log(this.cart.items[($event)-1].id);
      // console.log(this.cart.items);
      // if(this.cart.items)
      // console.log($event);
      // $.each(this.cart.items, function(index, value){
      //   if(value.id == $event) {
      //     value.splice(index,1);
      //   }
      // });
      // this.cart.count--;
    }

}