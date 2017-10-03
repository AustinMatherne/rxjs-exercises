import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('-a-b-c|', {a: 0, b: 1, c: 2})))

  Expected Observable
  cold('-(abc)-(de)-f|', {a: 0, b: 1, c: 2, d: 1, e: 2, f: 2})

*/

export const expandResult = (obs: Observable<number>) => {
  return obs.expand((x) => x >= 2 ? Observable.empty() : Observable.of(x + 1));
};
