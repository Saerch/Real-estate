import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataPaymentService
{
    private get_pyts_Url='assets/data/payments.json';
   
    constructor(private _http:Http){}

    getPyVals(): Observable<any[]>{
      return (this._http.get(this.get_pyts_Url)
      .map((response: Response) => <any[]> response.json())
      .catch(this.handleError));
   }

    private extractData(res: Response) {
    let body = res.json();
            return body.data || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
    }
}