import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LopCreateUpdate } from '../lop-create-update';
import { LopService } from '../lop.service';

@Component({
  selector: 'app-lop-update',
  templateUrl: './lop-update.component.html',
  styleUrls: ['./lop-update.component.css'],
})
export class LopUpdateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private lopService: LopService,
    private router: Router
  ) {}

  itemId: string = '';
  lop: LopCreateUpdate = {
    tenLop: '',
    maKhoa: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.itemId = params.get('id') ?? '';
    });
    this.getById();
  }

  getById() {
    this.lopService.getById(this.itemId).subscribe((data) => {
      console.log(data);
      this.lop.tenLop = data.tenLop;
      this.lop.maKhoa = data.maKhoa;
    });
  }

  update() {
    this.lopService.update(this.itemId, this.lop).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/lops']);
    });
  }
}
