import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('a-b-c-d|')

  Expected Observable
  cold('-------(a|)', {a: 4})

*/

export const countResult = (obs: Observable<string>) => {
  return obs.count();
};
