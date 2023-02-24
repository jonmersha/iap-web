import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  apiUrl=`${API_BASE_URL}`;
  
  constructor(private http: HttpClient) { }

    getData(url:String): Observable<any> {
    console.log(`${this.apiUrl}${url}`)
    return this.http.get(`${this.apiUrl}${url}`);
  }



  
}
