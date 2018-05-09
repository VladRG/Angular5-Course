export class BaseResponse {
  total: number;
  data: Array<BaseEntity>;
}

export class BaseEntity {
  id: number;
  editing: boolean;
}
