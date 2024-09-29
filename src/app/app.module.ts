import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // EditableTableComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
//   bootstrap: [AppComponent]
})
export class AppModule { }
