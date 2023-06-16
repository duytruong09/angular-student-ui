import { SinhVien } from './sinh-vien';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SinhVienService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<SinhVien[]>('http://localhost:3000/v1/sinhviens/');
  }

  post() {
    return this.http.post<SinhVien[]>('http://localhost:3000/v1/sinhviens/', {x:1});
  }
}
