import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/count';

/*
  Input Observable
  cold('a-b-c-d|')

  Expected Observable
  cold('-------(a|)', {a: 4})

*/

export const countResult = (obs: Observable<string>) => {
  return obs.count();
};
