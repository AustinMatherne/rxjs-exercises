import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('-a-b-c|')

  Expected Observable
  cold('------(c|)')

*/

export const lastResult = (obs: Observable<string>) => {
  return obs.last();
};
