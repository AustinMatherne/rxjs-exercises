import {Observable} from "rxjs/Observable";

/*
  Expected Observable
  cold('|')

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-empty
*/

export const emptyResult = Observable.empty();
