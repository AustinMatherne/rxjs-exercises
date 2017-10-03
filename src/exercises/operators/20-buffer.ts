import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('-a-b-c-d-e-...', {a: 0, b: 1, c: 2, d: 3, e: 4, ...})
  cold('----a-----a...')

  Expected Observable
  cold('----(a)-----(b)...', {a: [0, 1], b: [2, 3, 4], ...})

*/

export const bufferResult = (obs: Observable<number>, buffer$: Observable<string>) => {
  return obs.buffer(buffer$);
};
