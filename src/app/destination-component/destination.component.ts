import {Component, OnInit} 	from '@angular/core';
import { PackageService } 	from '../package-service/package.service'
import { DestinationData } 		from './DestinationData'
import { CartService }      from '../package-service/cart.service';



@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['./destination.component.css']
})

export class DestinationComponent implements OnInit {

	dataPackage : DestinationData[];

	constructor ( 
		private packageService: PackageService,
		private cartService: CartService
	 ) {
		this.cartService = cartService;
	}

	getData (): void {
		this.packageService.getDestination().then(dataPackage => this.dataPackage = dataPackage);	
	}

	ngOnInit(): void {
		this.getData();
	}

	addToCart (item) {
		this.cartService.pushToCart(item);
	}

}