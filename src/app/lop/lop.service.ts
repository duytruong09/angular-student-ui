import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lop } from './lop';
import { LopCreateUpdate } from './lop-create-update';

@Injectable({
  providedIn: 'root'
})
export class LopService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Lop[]>('http://localhost:3000/v1/lops');
  }

  create(lop: LopCreateUpdate) {
    return this.http.post('http://localhost:3000/v1/lops', lop);
  }

  getById(id: string) {
    return this.http.get<Lop>(`http://localhost:3000/v1/lops/${id}`);
  }

  update(id: string, lop: LopCreateUpdate) {
    return this.http.put<Lop>(`http://localhost:3000/v1/lops/${id}`, lop);
  }

  delete(id: string) {
    return this.http.delete(`http://localhost:3000/v1/lops/${id}`);
  }
}
