import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }

  getTodos(): Observable<any> {
    return this.http.get('http://api.cursodeionic.com.br/todos');
  }

}
