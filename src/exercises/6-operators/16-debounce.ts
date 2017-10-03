import {Observable} from 'rxjs/Observable';
import {Scheduler} from 'rxjs/Scheduler';
import 'rxjs/add/operator/debounce';

/*
  Input Observable
  cold('-a--b-c--d-e-')
  cold('--|')

  Expected Observable
  cold('---a----c----e-')

*/

export const debounceResult = (obs: Observable<string>, debounce$: Observable<string>) => {
  return obs.debounce(() => debounce$);
};
