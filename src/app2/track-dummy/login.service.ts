import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {LoginDetails} from './LoginDetails';
import {Shipment} from './Shipment';

@Injectable()
export class LoginService
{

private purl="http://localhost:8080/newuser";
private shipurl="http://localhost:8080/newdata";

constructor(private _http:Http){}

postUser(nusr:LoginDetails):Observable<any>
{
	let headers = new Headers({"Content-Type":"application/json"});
    let opts = new RequestOptions({headers: headers});
    return (this._http.post(this.purl , JSON.stringify(nusr) , opts)
    .map((res:Response) => console.log(res))
                .catch(this.handleError));

}

postShip(s:Shipment):Observable<any>
{
  
  let headers = new Headers({"Content-Type":"application/json"});
  let opts = new RequestOptions({headers : headers});
   return (this._http.post(this.shipurl,JSON.stringify(s),opts)
  .map((res:Response) =>console.log(res))
  .catch(this.handleError)); 



}


private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error());
   }
    
}