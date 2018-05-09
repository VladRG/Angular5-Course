import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseResponse, BaseEntity } from '@app/models';

export class BaseHttpService<TResponse extends BaseResponse> {
  constructor(private client: HttpClient, private url: string) { }

  get(page?: number, rows?: number): Observable<TResponse> {
    return this.client.get<TResponse>(`${this.url}?page=${page ? page : 0}&rows=${rows ? rows : 10}`);
  }

  find(id: number): Observable<BaseEntity> {
    return this.client.get<BaseEntity>(`${this.url}/${id}`);
  }

  store(entity: BaseEntity): Observable<any> {
    return this.client.post(this.url, entity);
  }

  update(entity: BaseEntity): Observable<any> {
    return this.client.put(`${this.url}/${entity.id}`, entity);
  }

  delete(entity: BaseEntity): Observable<any> {
    return this.client.delete(`${this.url}/${entity.id}`);
  }
}
