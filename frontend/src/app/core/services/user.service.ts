import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User, UserResponse } from '@app/models';
import { BaseHttpService } from '@app/core/services/base-http.service';

@Injectable()
export class UserService extends BaseHttpService<UserResponse> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, 'user');
  }
}
