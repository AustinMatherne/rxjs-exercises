import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('a-b-c|')
  cold('x-y-z|')

  Expected Observable
  cold('a-b-cx-y-z|')

*/

export const concatResult = (obs1: Observable<string>, obs2: Observable<string>) => {
  return Observable.concat(obs1, obs2);
};
