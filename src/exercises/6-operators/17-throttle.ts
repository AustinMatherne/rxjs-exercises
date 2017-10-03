import {Observable} from 'rxjs/Observable';
import {Scheduler} from 'rxjs/Scheduler';
import 'rxjs/add/operator/throttle';

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
