import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PackageData } from '../package-component/PackageData'
import { DestinationData } from '../destination-component/DestinationData'

import { packages } from '../../assets/api/MOCK_DATA'


@Injectable()
export class PackageService {

  private packageUrl ='api/MOCK_DATA'

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPackages (): Promise<PackageData[]> {
      return Promise.resolve(packages);     
  }
  getDestination (): Promise<DestinationData[]> {
      return Promise.resolve(packages);     
  }
}

