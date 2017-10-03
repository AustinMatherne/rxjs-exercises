import {Observable} from "rxjs/Observable";

/*
  Expected Observable
  result('hello')
  cold('(a|)', {a: 'hello'})

  result('world')
  cold('(a|)', {a: 'world'})

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-bindCallback
*/

const func = (x: string, cb: (value: string) => void) => cb(x);

export const bindCallbackResult = Observable.bindCallback(func);
