import {Injectable} from '@angular/core'


@Injectable()
export class CartService {

   constructor() {
     console.log('cart service started');
   }

   cartItems = {
     items:[],
     count:0
   };

   pushToCart (item) {
     this.cartItems.items.push(item);
     this.cartItems.count++;
   }

   getCartItems () {
     return this.cartItems;
   }


}