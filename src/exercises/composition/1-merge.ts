import {Observable} from 'rxjs/Observable';

/*
  Input Observable
  cold('a-b-c|');
  cold('x-y-z|')

  Expected Observable
  cold('(ax)-(by)-(cz)|')

*/

export const mergeResult = (obs1: Observable<string>, obs2: Observable<string>) => {
  return Observable.merge(obs1, obs2);
};
