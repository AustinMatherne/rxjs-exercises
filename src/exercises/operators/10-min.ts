import {Observable} from 'rxjs/Observable';

/*
  Input Observable
  cold('a-b-c-d|', {a: 4, b: 6, c: 10, d: 3})

  Expected Observable
  cold('-------(a|)', {a: 3})

*/

export const minResult = (obs: Observable<number>) => {
  return obs.min();
};
