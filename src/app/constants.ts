//export const API_BASE_URL = 'http://localhost:8080';

import { HttpHeaders } from "@angular/common/http";

//export const API_BASE_URL = 'https://iap.besheger.com';
export const API_BASE_URL = 'http://localhost:8080';

//export const API_BASE_URL = 'http://192.168.1.2:8080';
export const AUDIT_STATUSES = ['New', 'In Progress', 'Complete'];
export const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '0e9ef6df783b003d8c0300ac4656a142'
    })
  };