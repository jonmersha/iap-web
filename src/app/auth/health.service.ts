import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL,httpOptions  } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor(private httpClient:HttpClient) { }
 
  checkHealth():Observable<any>{
   return this.httpClient.get(`${API_BASE_URL}/health`,httpOptions)
  }
}
