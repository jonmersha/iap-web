import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL,httpOptions  } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClinet:HttpClient) {
    
   }
   login(body:any):Observable<any>{
    return this.httpClinet.post(`${API_BASE_URL}/user/login`,body,httpOptions)
   }
}
