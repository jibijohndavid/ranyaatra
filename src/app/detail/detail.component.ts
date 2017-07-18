import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { PackageService } from '../package-service/package.service';
import { PackageData } 		from '../package-component/PackageData'

declare var jquery:any;
declare var $ :any;

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


      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });
      
      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        directionNav: false,
        sync: "#carousel",
        start: function(slider) {
          slider.resize();
        }
      });

      // $('#carousel li').on("click", function (event) {
      //   $('#slider').flexslider().resize();
      //   $('#slider').fadeIn(500);
      // })
  }
}
