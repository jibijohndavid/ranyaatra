import { Component, OnInit, enableProdMode} from '@angular/core';

declare var jquery:any;
declare var $ :any;
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
}
