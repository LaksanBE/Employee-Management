import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    apiUrl = 'http://192.168.0.199:7000/';
  constructor(private http: HttpClient) { }
  getMethod(url: string) {
    return this.http.get(this.apiUrl + url);
  }
  postMethod(url: string, data: any) {
    return this.http.post(this.apiUrl + url, data);
  }
}
