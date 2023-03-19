import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL, httpOptions } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private httpClinet: HttpClient) {}

  register(body: any, url: string): Observable<any> {
    return this.httpClinet.post(`${API_BASE_URL}${url}`, body, httpOptions);
  }
}
