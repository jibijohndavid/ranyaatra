import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }
  selectedDays: number;
  selectedPersons: string;
  selectedTypes: string;


  days = [
    {value: '4', viewValue: '1-4 Days'},
    {value: '7', viewValue: '5-7 Days'},
    {value: '14', viewValue: '9-14 Days'},
    {value: '21', viewValue: '2-3 Weeks'},
    {value: '30', viewValue: '> 3 Weeks'}
  ];

  persons = [
    {value: '5', viewValue: 'Less than 5'},
    {value: '10', viewValue: 'More than 5'},
    {value: '15', viewValue: 'More than 10'}
  ];

  types = [
    {value: 'Family Vacation', viewValue: 'Family Vacation'},
    {value: 'Honeymoon', viewValue: 'Honeymoon'},
    {value: 'Casual Vacation', viewValue: 'Casual Vacation'},
    {value: 'Business Traveller', viewValue: 'Business Traveller'}
  ];

  ngOnInit() {
  }

}
