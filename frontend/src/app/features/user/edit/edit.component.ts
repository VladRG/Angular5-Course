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
      this.getUser(params.id);
    });
  }

  user: User;

  ngOnInit() { }

  save(user: User) {
    this.service.update(user).subscribe(
      (response: any) => {
        this.redirectToList();
      },
      (errorResponse) => {

      }
    );
  }

  cancel() {
    this.redirectToList();
  }

  private redirectToList() {
    this.router.navigateByUrl('user');
  }

  private getUser(id: string) {
    const idInt = parseInt(id, 10);
    this.service.find(idInt).subscribe((response: User) => {
      this.user = response;
    }, console.error);
  }
}
