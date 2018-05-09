import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';

export class HasLoadingSpinnerBase {
  constructor() {
    this.isLoading = false;
    this.message = 'Loading...';
  }

  isLoading: boolean;
  message: string;

  public setMessage(message: string) {
    this.message = message;
  }

  public wrapObservableArrayWithSpinner(observables: Array<Observable<any>>): Observable<any> {
    this.startSpinner();
    return forkJoin(observables).finally(() => {
      this.stopSpinner();
    });
  }

  public wrapObservableWithSpinner(observable: Observable<any>): Observable<any> {
    this.startSpinner();
    return observable.finally(() => {
      this.stopSpinner();
    });
  }

  private startSpinner() {
    this.isLoading = true;
  }

  private stopSpinner() {
    this.isLoading = false;
  }
}
