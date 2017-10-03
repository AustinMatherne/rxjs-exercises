import {Observable} from 'rxjs/Observable';

/*
  Input Observable
  cold('a-b-c-d-e-f-...', {a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, ...})

  Expected Observable
  cold('a-b-(c|)', {a: 0, b: 1, c: 2})

*/

export const takeResult = (obs: Observable<number>) => {
  return obs.take(3);
};
