import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Contact} from '@app/core/models';
import {environment} from '@app/env';


@Injectable()
export class ContactsService {

  constructor(private http: HttpClient ) { }


  getSpreadsheet(): Observable<Contact[]> {
    let params = new HttpParams();
    params = params.append('ranges', "Data!A2:A50");
    
    return this.http
        .get<Contact[]>(`${environment.appApi.baseUrl+environment.spreadsheetId}/values:batchGet`,{params: params});
  }

  // show(conactId: number): Observable<Contact> {
  //   return this.http
  //       .get<Contact>(`${environment.appApi.baseUrl}/contacts/${conactId}`);
  // }

  // create(contact: Contact): Observable<Contact> {
  //   return this.http.post<Contact>(`${environment.appApi.baseUrl}/contacts`, contact);
  // }

  // update(contact: Partial<Contact>): Observable<Contact> {
  //   return this.http.patch<Contact>(`${environment.appApi.baseUrl}/contacts/${contact.id}`, contact);
  // }


  // destroy(id: number): Observable<Contact> {
  //   return this.http.delete<Contact>(`${environment.appApi.baseUrl}/contacts/${id}`);
  // }

}
