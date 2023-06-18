import { SinhVienCreateUpdate } from './sinh-vien-create-update';
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

  create(sinhvien: SinhVienCreateUpdate) {
    return this.http.post('http://localhost:3000/v1/sinhviens', sinhvien);
  }

  getById(id: string) {
    return this.http.get<SinhVien>(`http://localhost:3000/v1/sinhviens/${id}`);
  }

  update(id: string, sinhvien: SinhVienCreateUpdate) {
    return this.http.put<SinhVien>(`http://localhost:3000/v1/sinhviens/${id}`, sinhvien);
  }

  delete(id: string) {
    return this.http.delete(`http://localhost:3000/v1/sinhviens/${id}`);
  }
}
