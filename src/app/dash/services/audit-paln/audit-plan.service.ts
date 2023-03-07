import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'src/app/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditPlanService {
  private apiUrl=`${API_BASE_URL}/plan/view`;
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
