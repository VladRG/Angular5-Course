import { Component, OnInit } from '@angular/core';
import { User, UserResponse } from '@app/models';
import { UserService } from '@app/core';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { COLUMNS } from './column.definition';
import { HasLoadingSpinnerBase } from '@app/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListUsersComponent extends HasLoadingSpinnerBase implements OnInit {

  dataSource: MatTableDataSource<User>;
  columns = [];
  columnDefs = [];
  editing = false;
  actionColumnWidth = 160;

  filter: User = new User();

  // pagination properties
  total = 0;
  page = 0;
  rows = 10;

  constructor(private service: UserService) {
    super();
  }

  ngOnInit() {
    this.setColumns();
    this.dataSource = new MatTableDataSource([]);
    this.wrapObservableWithSpinner(this.service.get())
      .subscribe((response: UserResponse) => {
        this.updateDataSource(response);
      });
  }

  changePage(pageEvent: PageEvent) {
    this.page = pageEvent.pageIndex;
    this.rows = pageEvent.pageSize;
    this.service.get(this.page, this.rows)
      .subscribe((response: UserResponse) => {
        this.updateDataSource(response);
      });
  }

  search() {
    console.log(this.filter);
  }

  private setColumns() {
    this.columnDefs = COLUMNS.slice();
    this.columnDefs.forEach(element => {
      this.columns.push(element.property);
    });
    this.columns.push('actions');
  }

  private updateDataSource(response: UserResponse) {
    this.dataSource.data = response.data as Array<User>;
    this.total = response.total;
  }
}
