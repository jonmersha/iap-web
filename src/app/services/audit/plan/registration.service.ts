import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  
  
  private apiUrl=`${API_BASE_URL}/plan/add`;
  constructor(private http: HttpClient) { }

 register(body:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.post(this.apiUrl,body,httpOptions)
 }
}
