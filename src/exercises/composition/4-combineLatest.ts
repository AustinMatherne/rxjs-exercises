import {Observable} from 'rxjs/Observable';
import {combineLatest} from 'rxjs/Observable/combineLatest';

/*
  Input Observable
  cold('a-b-c|')
  cold('x-y-z|')

  Expected Observable
  cold('a-(bc)-(de)|', {a: ['a', 'x'], b: ['b', 'x'], c: ['b', 'y'], d: ['c', 'y'], e: ['c', 'z']})

*/

export const combineLatestResult = (obs1: Observable<string>, obs2: Observable<string>) => {
  return combineLatest(obs1, obs2);
};
