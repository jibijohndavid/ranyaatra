import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { PackageService } from '../package-service/package.service';
import { DestinationData }     from '../destination-component/DestinationData'

@Component({
  selector: 'app-detail-destination',
  templateUrl: './detail-destination.component.html',
  styleUrls: ['./detail-destination.component.scss']
})
export class DetailDestinationComponent implements OnInit {

  dataPackage : DestinationData;
  dataChk = this.dataPackage;

  constructor(
    private packageService: PackageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
      this.route.params
      .switchMap((params: Params) => this.packageService.getDestinationDetails(+params['id']))
      .subscribe(dataPackage => this.dataPackage = dataPackage);
  }

}
