import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('a-b-c-d|', {a: 0, b: 1, c: 2, d: 3})

  Expected Observable
  cold('a---c--|', {a: 0, c: 2})
  cold('--b---d|', {b: 1, d: 3})

*/

export const partitionResult = (obs: Observable<number>) => {
  return obs.partition((value) => value % 2 === 0);
};
