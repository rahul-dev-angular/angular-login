import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'http://localhost:4200/';

  constructor(private http: HttpClient) { }

  getLog(parameter): Observable<User[]> {
    return this.http.post<User[]>(this.baseUrl, parameter);
  }
}
