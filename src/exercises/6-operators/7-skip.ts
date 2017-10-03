import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/skip';

/*
  Input Observable
  cold('a-b-c-d-e-f-...', {a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, ...})

  Expected Observable
  cold('------a-b-c-...', {a: 3, b: 4, c: 5, ...})

*/

export const skipResult = (obs: Observable<number>) => {
  return obs.skip(3);
};
