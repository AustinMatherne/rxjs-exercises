import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

/*
  Expected Observable - should return a tear down function that executes console.log('tear down!')
  cold('(ab#)', {a: 'hello', b: 'world}, 'oh no!')

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-create
*/

export const createResult = Observable.create((observer: Observer<string>) => {
  observer.next("hello");
  observer.next("world");
  observer.error("oh no!");

  return () => {
    console.log("tear down!");
  };
});
