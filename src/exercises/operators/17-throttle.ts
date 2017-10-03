import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('-a--b-c--d-e-')
  cold('--|')

  Expected Observable
  cold('-a--b----d---')

*/

export const throttleResult = (obs: Observable<string>, throttle$: Observable<string>) => {
  return obs.throttle(() => throttle$);
};
