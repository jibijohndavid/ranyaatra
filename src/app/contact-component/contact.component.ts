import { Component } from '@angular/core';

import { PackageService } 	from '../package-service/package.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})
export class ContactComponent {

	selected = {
		duration  : "",
		tourStyle : ""
	};
	availableOptions = {
		duration  : 
			[{code: 1, days: "1-4 Days"},
			 {code: 2, days: "5-7 Days"},
			 {code: 3, days: "9-14 Days"},
			 {code: 4, days: "2-3 Weeks"},
			 {code: 5, days: "> 3 Weeks"}],
		tourStyle :
			[{code: 1, style: "Family Vacation"},
			 {code: 2, style: "Honeymoon"},
			 {code: 3, style: "Casual Vacation"},
			 {code: 4, style: "Business Traveller"}]
	}
}
