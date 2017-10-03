import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/Observable/merge';

/*
  Input Observable
  cold('a-b-c|');
  cold('x-y-z|')

  Expected Observable
  cold('(ax)-(by)-(cz)|')

*/

export const mergeResult = (obs1: Observable<string>, obs2: Observable<string>) => {
  return merge(obs1, obs2);
};
