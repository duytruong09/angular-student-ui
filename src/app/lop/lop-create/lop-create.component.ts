import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LopCreateUpdate } from './../lop-create-update';
import { LopService } from '../lop.service';

@Component({
  selector: 'app-lop-create',
  templateUrl: './lop-create.component.html',
  styleUrls: ['./lop-create.component.css'],
})
export class LopCreateComponent {
  constructor(private lopService: LopService, private router: Router) {}

  lop: LopCreateUpdate = {
    tenLop: '',
    maKhoa: '',
  };

  create() {
    this.lopService.create(this.lop).subscribe(() => {
      return this.router.navigate(['/lops']);
    });
  }
}
