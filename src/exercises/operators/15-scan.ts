import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

/*
  Input Observable
  cold('a-b-c-(d|)', {a: 0, b: 1, c: 2, d: 3})

  Expected Observable
  cold('a-b-c-(d|)', {a: 0, b: 1, c: 3, d: 6})

*/

export const scanResult = (obs: Observable<number>) => {
  return obs.scan((acc, value) => acc + value);
};
