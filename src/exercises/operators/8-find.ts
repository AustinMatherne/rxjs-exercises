import {Observable} from 'rxjs/Observable';

/*
  Input Observable
  cold('-a-b-c-d-e-...')

  Expected Observable
  cold('------(d|)')

*/

export const findResult = (obs: Observable<string>) => {
  return obs.find(l => l === 'd');
};
