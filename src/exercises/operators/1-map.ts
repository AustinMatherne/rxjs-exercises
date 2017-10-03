import {Observable} from 'rxjs/Observable';

/*
  Input Observable
  cold('a-b-c-d-e-f-...', {a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, ...})

  Expected Observable
  cold('a-b-c-d-e-f-...', {a: 0, b: 10, c: 20, d: 30, e: 40, f: 50, ...})

*/

export const mapResult = (obs: Observable<number>) => {
  return obs.map(i => i * 10);
};
