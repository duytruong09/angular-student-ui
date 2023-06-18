import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LopCreateComponent } from './lop/lop-create/lop-create.component';
import { LopListComponent } from './lop/lop-list/lop-list.component';
import { LopUpdateComponent } from './lop/lop-update/lop-update.component';
import { SinhVienCreateComponent } from './sinh-vien/sinh-vien-create/sinh-vien-create.component';
import { SinhVienListComponent } from './sinh-vien/sinh-vien-list/sinh-vien-list.component';
import { SinhVienUpdateComponent } from './sinh-vien/sinh-vien-update/sinh-vien-update.component';

const routes: Routes = [
  {
    path: '',
    component: SinhVienListComponent,
  },
  {
    path: 'sinh-vien-create',
    component: SinhVienCreateComponent,
  },
  {
    path: 'sinh-vien-update/:id',
    component: SinhVienUpdateComponent,
  },
  {
    path: 'lops',
    component: LopListComponent
  },
  {
    path: 'lop-create',
    component: LopCreateComponent
  },
  {
    path: 'lops/lop-update/:id',
    component: LopUpdateComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
