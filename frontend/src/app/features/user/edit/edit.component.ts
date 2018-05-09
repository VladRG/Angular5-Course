import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/models';
import { UserService } from '@app/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {
    this.route.params.subscribe((params) => {
      this.getUser(parseInt(params.id, 10));
    });
  }

  user: User;
  message: string;

  ngOnInit() { }

  save(user: User) {
    this.service.update(user).subscribe(
      (response: any) => {
        this.redirectToList();
      },
      (errorResponse) => {
        this.message = errorResponse.error;
      }
    );
  }

  cancel() {
    this.redirectToList();
  }

  private redirectToList() {
    this.router.navigateByUrl('user');
  }

  private getUser(id: number) {
    this.service.find(id).subscribe((response: User) => {
      this.user = response;
    }, console.error);
  }
}
