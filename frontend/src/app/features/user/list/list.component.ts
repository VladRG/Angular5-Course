import { Component, OnInit } from '@angular/core';
import { User, UserResponse } from '@app/models';
import { UserService } from '@app/core';
import { MatTableDataSource, PageEvent, MatDialog } from '@angular/material';
import { COLUMNS } from './column.definition';
import { HasLoadingSpinnerBase } from '@app/shared';
import { ModalConfirmationComponent } from '@app/shared/components/modal-confirmation/modal-confirmation.component';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private service: UserService, private dialog: MatDialog, private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.setColumns();
    this.dataSource = new MatTableDataSource([]);

    // this.route.data.subscribe((data: any) => {
    //   this.updateDataSource(data.users as UserResponse);
    // });

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

  }

  delete(user: User) {
    this.dialog.open(ModalConfirmationComponent, {
      width: '400px',
      height: '200px',
      data: user
    }).afterClosed().subscribe((response) => {
      if (response) {
        // stergem
        this.service.delete(user).subscribe(() => {
          this.ngOnInit();
        }, console.error);
      }
    });
  }

  private setColumns() {
    this.columnDefs = COLUMNS.slice();
    this.columns = [];
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
