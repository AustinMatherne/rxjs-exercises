import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/reduce';

/*
  Input Observable
  cold('a-b-c-(d|)', {a: 0, b: 1, c: 2, d: 3})

  Expected Observable
  cold('------(a|)', {a: 6})

*/

export const reduceResult = (obs: Observable<number>) => {
  return obs.reduce((acc, value) => acc + value);
};
