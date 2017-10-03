import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/first';

/*
  Input Observable
  cold('a-b-c-d-e-f-...')

  Expected Observable
  cold('(a|))

*/

export const firstResult = (obs: Observable<string>) => {
  return obs.first();
};
