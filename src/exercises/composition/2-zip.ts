import {Observable} from 'rxjs/Observable';

/*
  Input Observable
  cold('a-b-c|')
  cold('x-y-z|')

  Expected Observable
  cold('a-b-c|', {a: ['a', 'x'], b: ['b', 'y'], c: ['c', 'z']})

*/

export const zipResult = (obs1: Observable<string>, obs2: Observable<string>) => {
  return Observable.zip(obs1, obs2);
};
