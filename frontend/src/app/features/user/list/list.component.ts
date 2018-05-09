import { Component, OnInit } from '@angular/core';
import { User, UserResponse } from '@app/models';
import { UserService } from '@app/core';
import { MatTableDataSource } from '@angular/material';
import { COLUMNS } from './column.definition';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListUsersComponent implements OnInit {

  dataSource: MatTableDataSource<User>;
  columns = [];
  columnDefs = [];
  editing = false;
  actionColumnWidth = 160;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.setColumns();
    this.dataSource = new MatTableDataSource([]);
    this.service.get().subscribe((response: UserResponse) => {
      this.dataSource.data = response.data as Array<User>;
    });
  }

  private setColumns() {
    this.columnDefs = COLUMNS.slice();
    this.columnDefs.forEach(element => {
      this.columns.push(element.property);
    });
    this.columns.push('actions');
  }
}
