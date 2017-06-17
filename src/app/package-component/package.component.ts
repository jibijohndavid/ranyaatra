import {Component, OnInit} 	from '@angular/core';
import { PackageService } 	from '../package-service/package.service'
import { PackageData } 		from './PackageData'
import { CartService }      from '../package-service/cart.service';



@Component({
	selector: 'app-packages',
	templateUrl: './package.component.html',
	styleUrls: ['./package.component.css']
})

export class PackageComponent implements OnInit {

	dataPackage : PackageData[];

	constructor ( 
		private packageService: PackageService,
		private cartService: CartService
	 ) {
		this.cartService = cartService;
	}

	getData (): void {
		this.packageService.getPackages().then(dataPackage => this.dataPackage = dataPackage);	
	}

	ngOnInit(): void {
		this.getData();
	}

	addToCart (item) {
		this.cartService.pushToCart(item);
	}

}