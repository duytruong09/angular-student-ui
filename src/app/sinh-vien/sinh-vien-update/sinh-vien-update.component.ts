import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SinhVienService } from './../sinh-vien.service';
import { SinhVienCreateUpdate } from '../sinh-vien-create-update';

@Component({
  selector: 'app-sinh-vien-update',
  templateUrl: './sinh-vien-update.component.html',
  styleUrls: ['./sinh-vien-update.component.css'],
})
export class SinhVienUpdateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sinhVienService: SinhVienService,
    private router: Router
  ) {}

  itemId: string = '';
  sinhVien: SinhVienCreateUpdate = {
    tinh: '',
    hocBong: 0,
    ngaySinh: '',
    nu: '',
    hoTen: '',
    maLop: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.itemId = params.get('id') ?? '';
    });
    this.getById();
  }

  getById() {
    this.sinhVienService.getById(this.itemId).subscribe((data) => {
      this.sinhVien.hoTen = data.hoTen;
      this.sinhVien.ngaySinh = data.ngaySinh;
      this.sinhVien.nu = data.nu;
      this.sinhVien.hocBong = data.hocBong;
      this.sinhVien.tinh = data.tinh;
      this.sinhVien.maLop = data.maLop;
    });
  }

  update() {
    this.sinhVienService.update(this.itemId, this.sinhVien).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/']);
    });
  }
}
