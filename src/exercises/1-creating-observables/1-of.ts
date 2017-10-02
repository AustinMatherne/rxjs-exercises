import {of} from 'rxjs/Observable/of';

/*
  Expected Observable
  cold('(ab|)', {a: 'hello', b: 'world'})

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-of
*/

export const ofResult = of('hello', 'world');
