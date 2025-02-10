import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public BASE_URL = 'http://hungerfreeworld.alltok.in/';
  constructor(private http: HttpClient) {}
 
   public Contact(data: any):Observable<any>{
     return this.http.post<any>(this.BASE_URL + `api/contact-form`,data);
   }
   
}
