import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { ContactComponent }     from './contact-component/contact.component';
import { PackageService }       from './package-service/package.service';
import { PackageComponent }     from './package-component/package.component';
import { DestinationComponent }     from './destination-component/destination.component';
import { HeaderComponent }      from './header-component/header.component';
import { CartService }          from './package-service/cart.service';




@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PackageComponent,
    DestinationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PackageService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
