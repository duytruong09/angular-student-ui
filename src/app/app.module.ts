import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinhVienListComponent } from './sinh-vien/sinh-vien-list/sinh-vien-list.component';
import { SinhVienCreateComponent } from './sinh-vien/sinh-vien-create/sinh-vien-create.component';
import { FormsModule } from '@angular/forms';
import { SinhVienUpdateComponent } from './sinh-vien/sinh-vien-update/sinh-vien-update.component';
import { LopListComponent } from './lop/lop-list/lop-list.component';
import { LopCreateComponent } from './lop/lop-create/lop-create.component';
import { LopUpdateComponent } from './lop/lop-update/lop-update.component';

@NgModule({
  declarations: [
    AppComponent,
    SinhVienListComponent,
    SinhVienCreateComponent,
    SinhVienUpdateComponent,
    LopListComponent,
    LopCreateComponent,
    LopUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
