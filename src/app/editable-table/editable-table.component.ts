import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

export interface PeriodicElement {
  name: string;
  age: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'John', age: 25},
  {name: 'Jane', age: 30},
];

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule
  ]
})
export class EditableTableComponent implements OnInit {
  ngOnInit(): void {
    console.log('EditableTable ngOnInit');
    // throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['name', 'age'];
  dataSource = ELEMENT_DATA;
}
