import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('     a-b-c-|', {a: {id: 5}, b: {id: 2}, c: {id: 5}})

  Expected Observable
  cold('     a-b---|', {
    a: cold('a---c-|', {a: {id: 5}, c: {id: 5}}),
    b: cold('  b---|', {b: {id: 2}})
  })

*/

export const groupByResult = (obs: Observable<{id: number}>) => {
  return obs.groupBy((value) => value.id);
};
