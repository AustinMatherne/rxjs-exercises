import {interval} from 'rxjs/Observable/interval';
import {Scheduler} from 'rxjs/Scheduler';

/*
  Expected Observable
  cold('---a--b--c-...', {a: 1, b: 2, c: 3})

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-interval
*/

export const intervalResult = (scheduler: Scheduler) => {
  return interval(3, scheduler);
};
