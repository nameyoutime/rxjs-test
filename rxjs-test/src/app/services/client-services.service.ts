import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {
  // get data from server with http client
  constructor(private http: HttpClient) {
  }
  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/') as Observable<any>;
  }

  getData2(): Observable<any> {
    return this.http.get('http://localhost:3000/test') as Observable<any>;
  }
}
