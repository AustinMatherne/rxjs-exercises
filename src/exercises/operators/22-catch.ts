import {Observable} from 'rxjs/Observable';

/*
  Input Observable
  cold('-#')

  Expected Observable
  cold('-(a|)', {a: 'error handled'})

*/

export const catchResult = (obs: Observable<string>) => {
  return obs.catch(() => Observable.of('error handled'));
};
