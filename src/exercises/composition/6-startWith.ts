import {Observable} from 'rxjs/Observable';

/*
  Input Observable
  cold('a-b-c|')
  'beginning!'

  Expected Observable
  cold('(sa)-b-c|', {s: 'beginning!'})

*/

export const startWithResult = (obs1: Observable<string>, initialValue: string) => {
  return obs1.startWith(initialValue);
};
