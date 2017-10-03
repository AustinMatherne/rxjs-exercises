import {Observable} from 'rxjs/Observable';

/*
  Expected Observable
  cold('#', null, 'oh no!')

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-throw
*/

export const throwResult = Observable.throw('oh no!');
