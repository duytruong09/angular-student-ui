import { SinhVienCreateUpdate } from './../sinh-vien-create-update';
import { SinhVienService } from './../sinh-vien.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinh-vien-create',
  templateUrl: './sinh-vien-create.component.html',
  styleUrls: ['./sinh-vien-create.component.css']
})
export class SinhVienCreateComponent implements OnInit {
  constructor(
    private sinhVienService: SinhVienService,
    private router: Router,
  ) { }
  
  sinhVien: SinhVienCreateUpdate = {
    tinh: '',
    hocBong: 0,
    ngaySinh: '',
    nu: '',
    hoTen: '',
    maLop: ''
  }

  ngOnInit(): void { }

  create() {
    this.sinhVienService.create(this.sinhVien).subscribe(() => {
      return this.router.navigate(['/']);
    })
  }
}
