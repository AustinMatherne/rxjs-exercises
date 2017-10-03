import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

/*
  Input Observable
  cold('-#')

  Expected Observable
  cold('---#')

*/

export const retryResult = (obs: Observable<string>) => {
  return obs.retry(2);
};
