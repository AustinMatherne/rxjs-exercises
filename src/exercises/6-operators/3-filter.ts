import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

/*
  Input Observable
  cold('a-b-c-d-e-f-...', {a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, ...})

  Expected Observable
  cold('a---b---c---...', {a: 0, b: 2, c: 4, ...})

*/

export const filterResult = (obs: Observable<number>) => {
  return obs.filter(i => !(i % 2));
};
