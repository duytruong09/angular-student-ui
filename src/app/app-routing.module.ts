import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinhVienListComponent } from './sinh-vien/sinh-vien-list/sinh-vien-list.component';

const routes: Routes = [{
  path: '',
  component: SinhVienListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
