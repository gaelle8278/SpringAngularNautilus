import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookComponent } from './components/new-book/new-book.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewBookComponent
  ],
  exports: [
    NewBookComponent
  ]
})
export class BookManagementModule { }
