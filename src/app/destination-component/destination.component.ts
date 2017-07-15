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

		this.packageService.getDestination().then(dataPackage => {
			this.dataPackage = dataPackage;
			this.setValue();
			this.shareData();
		});	
	}

	setValue(): void {
		for (var i = 0; i < this.dataPackage.length; ++i) {
			this.dataPackage[i]['added'] = false;
		}
	}

	shareData(): void {
		this.cartService.pushToCart(this.dataPackage);
	}

	addToCart (item) {
		item['added'] = true;
		this.shareData();
	}

	removePackage(item) {
		this.cartService.removeItem(item.id);
	}

	ngOnInit(): void {
		this.getData();
	}

}