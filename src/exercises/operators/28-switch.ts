import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('ab-|', {a: cold('a-b--|'), b: cold('-y-z-|')})

  Expected Observable
  cold('a-y-z-|')

*/

export const switchResult = (obs: Observable<Observable<string>>) => {
  return obs.switch();
};
