import {_throw} from 'rxjs/Observable/throw';

/*
  Expected Observable
  cold('#', null, 'oh no!')

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-throw
*/

export const throwResult = _throw('oh no!');
