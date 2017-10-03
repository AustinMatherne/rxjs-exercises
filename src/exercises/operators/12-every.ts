import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/every';

/*
  Input Observable
  cold('a-b-c|', {a: 0, b: 1, c: 2})
  cold('a-b-c|', {a: 0, b: -1, c: -2})

  Expected Observable
  cold('-----(a|)', {a: true})
  cold('--(a|)', {a: false})

*/

export const everyResult = (obs: Observable<number>) => {
  return obs.every(i => i >= 0);
};
