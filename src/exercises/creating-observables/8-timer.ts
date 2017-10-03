import {timer} from 'rxjs/Observable/timer';
import {Scheduler} from 'rxjs/Scheduler';

/*
  Expected Observable
  cold('---a-b-c-...', {a: 0, b: 1, c: 2, ...})

  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-timer
*/

export const timerResult = (scheduler: Scheduler) => {
  return timer(3, 2, scheduler);
};
