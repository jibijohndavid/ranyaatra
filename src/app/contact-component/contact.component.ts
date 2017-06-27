import { Component } from '@angular/core';


import { PackageService } 	from '../package-service/package.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})
export class ContactComponent {
	selectedAdult: string;
	selectedChildren: string;

	adults = [
	    {value: '1', viewValue: '1'},
	    {value: '2', viewValue: '2'},
	    {value: '3', viewValue: '3'},
	    {value: '4', viewValue: '4'},
	    {value: '5', viewValue: '5'}
	  ];
	  childrens = [
	      {value: '1', viewValue: '1'},
	      {value: '2', viewValue: '2'},
	      {value: '3', viewValue: '3'},
	      {value: '4', viewValue: '4'},
	      {value: '5', viewValue: '5'}
	    ];

}
