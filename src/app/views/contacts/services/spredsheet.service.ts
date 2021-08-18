import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Contact} from '@app/core/models';
import {environment} from '@app/env';
import { GoogleApiService } from 'ng-gapi';


@Injectable()
export class SpreadSheetService {

  constructor(private http: HttpClient ) { 

  }


  getSpreadsheet(data:Array<any>): Observable<any> {
    let params = new HttpParams();
    data.forEach((range)=>{
      params = params.append('ranges', range);
    });
    return this.http.get<Contact[]>(`${environment.appApi.baseUrl+environment.spreadsheetId}/values:batchGet`,{params: params});
  }

  

}
