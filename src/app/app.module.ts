import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { ContactComponent }     from './contact-component/contact.component';
import { PackageService }       from './package-service/package.service';
import { PackageComponent }     from './package-component/package.component';
import { DestinationComponent }     from './destination-component/destination.component';
import { HeaderComponent, DialogContent}      from './header-component/header.component';
import { CartService }          from './package-service/cart.service';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PackageComponent,
    DestinationComponent,
    HeaderComponent,
    HomeComponent,
    DetailComponent,
    DialogContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [PackageService,CartService],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
