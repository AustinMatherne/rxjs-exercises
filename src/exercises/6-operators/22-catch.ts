import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/Observable/of';
import 'rxjs/add/operator/catch';

/*
  Input Observable
  cold('-#')

  Expected Observable
  cold('-(a|)', {a: 'error handled'})

*/

export const catchResult = (obs: Observable<string>) => {
  return obs.catch(err => of('error handled'));
};
