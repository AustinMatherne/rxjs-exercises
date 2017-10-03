import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom'

/*
  Input Observable
  cold('a-b-c|')
  cold('x-y-z|')

  Expected Observable
  cold('a-b-c|', {a: ['a', 'x'], b: ['b', 'y'], c: ['c', 'z']})

*/

export const withLatestFromResult = (obs1: Observable<string>, obs2: Observable<string>) => {
  return obs1.withLatestFrom(obs2);
};
