import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/groupBy'

/*
  Input Observable
  cold('a-b-c-|', {a: {id: 'blue'}, b: {id: 'green'}, c: {id: 'blue'}})

  Expected Observable
  cold('a-b----|', {a: cold('a---c--|', {a: 'blue, c: 'blue'}), b: cold('b----|', {b: 'green'})})

*/

export const groupByResult = (obs: Observable<{id: string}>) => {
  return obs.groupBy(value => value.id);
};
