import {Injectable} from '@angular/core'

declare var jquery:any;
declare var $ :any;


@Injectable()
export class CartService {

   constructor() {}

   cartItems = {
     items:[],
     count:0
   };

   pushToCart (items) {
     this.cartItems.items = items;
     this.countAdded();
   }

   getCartItems() {
     return this.cartItems;
   }

   countAdded() {
    this.cartItems.count = 0;
    for (var i = 0; i < this.cartItems.items.length; ++i) {
      if (this.cartItems.items[i]['added'] == true){
        this.cartItems.count++;
      };
    }
   }

   removeItem(item) {
     $.each(this.cartItems.items, function(index, value){
       if(value.id == item) {
         value.added = false;
       }
     });
     this.countAdded();
   }
}