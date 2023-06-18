import { Component, OnInit } from '@angular/core';
import { Lop } from '../lop';
import { LopService } from '../lop.service';

declare var window: any;

@Component({
  selector: 'app-lop-list',
  templateUrl: './lop-list.component.html',
  styleUrls: ['./lop-list.component.css'],
})
export class LopListComponent implements OnInit {
  constructor(private lopService: LopService) {}

  lop: Lop[] = [];
  itemIdToDelete: string = '';
  deleteModal: any;

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.getAll();
  }

  getAll() {
    this.lopService.get().subscribe((data) => {
      this.lop = data;
    });
  }

  openDeleteModal(id: string) {
    this.itemIdToDelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.lopService.delete(this.itemIdToDelete).subscribe(() => {
      this.lop = this.lop.filter(
        (_) => _._id !== this.itemIdToDelete
      );
      this.deleteModal.hide();
    });
  }
}
