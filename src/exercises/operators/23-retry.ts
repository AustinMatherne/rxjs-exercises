import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('-#')

  Expected Observable
  cold('---#')

*/

export const retryResult = (obs: Observable<string>) => {
  return obs.retry(2);
};
