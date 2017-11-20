import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Bookings, Item_groups} from '../Blueprints/Order';

@Injectable()
export class DataCourierService
{
    private get_cors_Url='assets/data/courier.json';
    private user_check_Url='api/checkUser/';
    private book_Url="api/postBooking";

    constructor(private _http:Http){}

    getCorVals(): Observable<any[]>{
      return (this._http.get(this.get_cors_Url)
      .map((response: Response) => <any[]> response.json())
      .catch(this.handleError));
    }

    postOrder(ord:Bookings):Observable<Response>{
        let headers = new Headers({'Content-Type':'application/json'});
        let opts = new RequestOptions({headers : headers});
       
        return this._http.post(this.book_Url, JSON.stringify(ord),opts)
            .map((res:Response) => res)
            .catch(this.handleError);

    }

    checkUser(x:number):Observable<Response>{
        return this._http.get(this.user_check_Url+x.toString())
        .map((res:Response) => res)
        .catch(this.handleError);
    }

    getAdminCors(id:number):Observable<any[]>{
        return this._http.get("api/getAdminOrders/"+id.toString())
        .map((res:Response) => <any[]>res.json())
        .catch(this.handleError);
    }

    OrderStatusChange(cid:number, pstat, cstat):Observable<Response>{
        return this._http.get("api/statusChange/"+cid.toString()+"/"+pstat+"/"+cstat)
        .map((res:Response) => res)
        .catch(this.handleError);
    }

    getAllOrders():Observable<Bookings[]>{
        return this._http.get("api/getAllOrders")
                .map( (res:Response) => <Bookings[]>res.json() )
                .catch(this.handleError);
    }

    getUserCity(id:number):Observable<Response>{
        return this._http.get("api/getUserCity/"+id.toString())
                .map( (res:Response) => res)
                .catch(this.handleError);
    }

    getTrackData(id:number):Observable<Response>{
        return this._http.get("api/getTrackoObj/"+id.toString())
                .map( (res:Response) => res)
                .catch( this.handleError );
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
