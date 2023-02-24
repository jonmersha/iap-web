import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class AuditYearService {

  private apiUrl=`${API_BASE_URL}`;
  constructor(private http: HttpClient) { }


  getData(end:String): Observable<any> {
    return this.http.get(`${this.apiUrl}/end`);
  }

  

 
}
