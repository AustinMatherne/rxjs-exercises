import {Observable} from 'rxjs/Observable';

/*
  Expected Observable
  cold('a', {a: Math.random()}) // should be evaluated per subscriber.

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-defer
*/

export const deferResult = Observable.defer(() => Observable.of(Math.random()));
