import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class AuditObjectService {

  private apiUrl=`${API_BASE_URL}/object/get/`;
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  
  getDataById(id:any): Observable<any> {
    return this.http.get(`${this.apiUrl}id/?id=${id}`);
  }
}
