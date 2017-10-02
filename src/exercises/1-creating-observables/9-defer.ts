import {defer} from 'rxjs/Observable/defer';
import {of} from 'rxjs/Observable/of';

/*
  Expected Observable
  cold('a', {a: Math.random()}) // should be evaluated per subscriber.

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-defer
*/

export const deferResult = defer(() => of(Math.random()));
