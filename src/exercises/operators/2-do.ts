import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('a-b-c-d-e-f-...', {a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, ...})

  Expected Observable // all values should be passed to console.log
  cold('a-b-c-d-e-f-...', {a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, ...})

*/

export const doResult = (obs: Observable<number>) => {
  return obs.do(console.log);
};
