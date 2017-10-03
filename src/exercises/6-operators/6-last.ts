import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/last';

/*
  Input Observable
  cold('-a-b-c|')

  Expected Observable
  cold('------(c|)')

*/

export const lastResult = (obs: Observable<string>) => {
  return obs.last();
};
