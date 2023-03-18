import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL, httpOptions } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  apiUrl=`${API_BASE_URL}`;
  
  constructor(private http: HttpClient) { }

    getData(url:String): Observable<any> {
      console.log(`${API_BASE_URL}/${url}`,httpOptions)
    return this.http.get(`${API_BASE_URL}/${url}`,httpOptions);
  }



  
}
