import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/max';

/*
  Input Observable
  cold('a-b-c-d|', {a: 4, b: 6, c: 10, d: 3})

  Expected Observable
  cold('-------(a|)', {a: 10})

*/

export const maxResult = (obs: Observable<number>) => {
  return obs.max();
};
