import {Observable} from 'rxjs/Observable';

/*
  Expected Observable
  cold('(abc|)', {a: 1, b: 2, c: 3})

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-from
*/

const numbers = [1, 2, 3];

export const fromResult = Observable.from(numbers);
