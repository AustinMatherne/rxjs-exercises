import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('ab-|', {a: cold('a-b--|'), b: cold('-y-z-|')})

  Expected Observable
  cold('----abc-|', {a: ['a', 'y'], b: ['b', 'y'], c: ['b', 'z']})

*/

export const combineAllResult = (obs: Observable<Observable<string>>) => {
  return obs.combineAll();
};
