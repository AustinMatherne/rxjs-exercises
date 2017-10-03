import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/distinct';

/*
  Input Observable
  cold('a-b-a-b-a-b-...', {a: 0, b: 1})

  Expected Observable
  cold('a-b---------...', {a: 0, b: 1})

*/

export const distinctResult = (obs: Observable<number>) => {
  return obs.distinct();
};
