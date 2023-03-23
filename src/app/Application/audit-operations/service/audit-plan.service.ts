import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL, httpOptions } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class AuditPlanService {
  constructor(private httpClinet: HttpClient) {}

  getAll(url: any): Observable<any> {
    return this.httpClinet.get(`${API_BASE_URL}/${url}`, httpOptions);
  }
  getOne(body: any, url: any): Observable<any> {
    return this.httpClinet.post(`${API_BASE_URL}/${url}`, body, httpOptions);
  }
  addPlan(body: any, url: any): Observable<any> {
    return this.httpClinet.post(`${API_BASE_URL}/${url}`, body, httpOptions);
  }
}
