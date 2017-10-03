import {Observable} from 'rxjs/Observable';

/*
  Input Observable
  cold('-a--b-c--d-e-')
  cold('---a--a----a-')

  Expected Observable
  cold('---a--c----e-')

*/

export const sampleResult = (obs: Observable<string>, sample$: Observable<string>) => {
  return obs.sample(sample$);
};
