import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL, httpOptions } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  

  constructor(private httpClient:HttpClient) {

   }
   getEmployee(body:any):Observable<any> {
    return this.httpClient.post(`${API_BASE_URL}/employe/get/one`,body,httpOptions)
  
    }
}
