import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { DetailComponent }   from './detail/detail.component';
import { DetailDestinationComponent }   from './detail-destination/detail-destination.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home',  component: HomeComponent },
   { path: 'detail/:id',     component: DetailComponent },
   { path: 'detail-destination/:id',     component: DetailDestinationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}