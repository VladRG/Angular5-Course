import { BaseResponse, BaseEntity } from './BaseResponse';

export class UserResponse extends BaseResponse {

}

export class User extends BaseEntity {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}
