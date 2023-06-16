import { SinhVienService } from './../sinh-vien.service';
import { Component, OnInit } from '@angular/core';
import { SinhVien } from '../sinh-vien';

@Component({
  selector: 'app-sinh-vien-list',
  templateUrl: './sinh-vien-list.component.html',
  styleUrls: ['./sinh-vien-list.component.css']
})
export class SinhVienListComponent implements OnInit {

  constructor(private sinhVienService: SinhVienService) {};
  
  sinhVien: SinhVien[] = [];
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.sinhVienService.get().subscribe((data) => {
      this.sinhVien = data;
    })
  }
}