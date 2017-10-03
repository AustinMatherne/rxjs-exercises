import {Observable} from 'rxjs/Observable';

/*
  Input Observable
  cold('ab-|', {a: cold('a-b--|'), b: cold('-y-z-|')})

  Expected Observable
  cold('a-b--|')

*/

export const exhaustResult = (obs: Observable<Observable<string>>) => {
  return obs.exhaust();
};
