import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { PackageService } from '../package-service/package.service';
import { PackageData } 		from '../package-component/PackageData'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  dataPackage : PackageData;
  dataChk = this.dataPackage;

  constructor(
    private packageService: PackageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

      this.route.params
      .switchMap((params: Params) => this.packageService.getPackageDetails(+params['id']))
      .subscribe(dataPackage => this.dataPackage = dataPackage);
  }
}
