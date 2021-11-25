import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { todo } from './type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<todo[] | any> {
    return this.http.get('/assets/sample.json');
  }
}
