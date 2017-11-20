import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class userDashboard{
 
    static userid=0;
    static orderid=0;
    static trackid=0;

    private user_data_Url='assets/data/userDash.json';

    constructor(private _http:Http){}

    getUserOrders(id:number):Observable<any[]>{
        return this._http.get("api/getUserOrders/"+id.toString())
                .map( (res:Response) => <any[]>res.json() )
                .catch(this.handleError);
    }

    getDataSvc():Observable<any[]>{
        return this._http.get(this.user_data_Url)
                .map( (res:Response) => <any[]> res.json() )
                .catch(this.handleError);
    }

    getTrackData(id:number):Observable<Response>{
        return this._http.get("api/getTrackoObj/"+id.toString())
                .map( (res:Response) => res)
                .catch( this.handleError );
    }

    getTrackOrder(id:number):Observable<Response>{
        return this._http.get("api/getTrackOrder/"+id.toString())
                .map( (res:Response) => res)
                .catch( this.handleError );
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
    }
}