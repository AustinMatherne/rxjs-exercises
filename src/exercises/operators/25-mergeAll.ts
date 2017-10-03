import {Observable} from 'rxjs/Observable';

/*
  Input Observable
  cold('(ab)---|', {a: cold('-a-b-c--|'), b: cold('--x-y-z-|')})

  Expected Observable
  cold('-axbycz-|')

*/

export const mergeAllResult = (obs: Observable<Observable<string>>) => {
  return obs.mergeAll();
};
