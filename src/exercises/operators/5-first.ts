import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('a-b-c-d-e-f-...')

  Expected Observable
  cold('(a|))

*/

export const firstResult = (obs: Observable<string>) => {
  return obs.first();
};
