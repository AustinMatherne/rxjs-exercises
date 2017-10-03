import {Observable} from 'rxjs/Observable';
import {Scheduler} from 'rxjs/Scheduler';
import 'rxjs/add/operator/delay';

/*
  Input Observable
  cold('-a--b-c-----------')

  Expected Observable
  cold('------a--b-c------')

*/

export const delayResult = (obs: Observable<string>, scheduler: Scheduler) => {
  return obs.delay(5, scheduler);
};
