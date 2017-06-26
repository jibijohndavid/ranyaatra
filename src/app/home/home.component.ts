import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false
      });
  }

  choose_us = [
      {text: 'Diverse Destinations', cols: 1, rows: 1, icon: 'handshake-o'},
      {text: 'Value for Money', cols: 1, rows: 1, icon: 'money'},
      {text: 'Beautiful Places', cols: 1, rows: 1, icon: 'binoculars'},
      {text: 'Passionate Travel', cols: 1, rows: 1, icon: 'heart'}
    ];

}
