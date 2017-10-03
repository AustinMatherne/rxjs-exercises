import {Observable} from 'rxjs/Observable';
import {empty} from 'rxjs/Observable/empty';
import {of} from 'rxjs/Observable/of';

/*
  Input Observable
  cold('-a-b-c|', {a: 0, b: 1, c: 2})))

  Expected Observable
  cold('-(abc)-(de)-f|', {a: 0, b: 1, c: 2, d: 1, e: 2, f: 2})

*/

export const expandResult = (obs: Observable<number>) => {
  return obs.expand(x => x >= 2 ? empty() : of(x + 1));
};
