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

  isDarkTheme: boolean = false;
  lastDialogResult: string;
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
  }
}

@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})
export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}