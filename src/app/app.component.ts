import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  ngOnInit(): void {
      $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false
      });
  }
}
