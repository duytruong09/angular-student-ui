import { Component, OnInit } from '@angular/core';
import { SinhVien } from '../sinh-vien';
import { SinhVienService } from '../sinh-vien.service';

declare var window: any;

@Component({
  selector: 'app-sinh-vien-list',
  templateUrl: './sinh-vien-list.component.html',
  styleUrls: ['./sinh-vien-list.component.css'],
})
export class SinhVienListComponent implements OnInit {
  constructor(private sinhVienService: SinhVienService) {}

  sinhVien: SinhVien[] = [];
  itemIdToDelete: string = '';
  deleteModal: any;

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.getAll();
  }

  getAll() {
    this.sinhVienService.get().subscribe((data) => {
      this.sinhVien = data;
    });
  }

  openDeleteModal(id: string) {
    this.itemIdToDelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.sinhVienService.delete(this.itemIdToDelete).subscribe(() => {
      this.sinhVien = this.sinhVien.filter(
        (_) => _._id !== this.itemIdToDelete
      );
      this.deleteModal.hide();
    });
  }
}