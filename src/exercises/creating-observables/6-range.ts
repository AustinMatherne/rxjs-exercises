import {range} from 'rxjs/Observable/range';

/*
  Expected Observable
  cold('(abcdef|)', {a: 96, b: 97, c: 98, d: 99, e: 100, f: 101})

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-range
*/

export const rangeResult = range(96, 6);
