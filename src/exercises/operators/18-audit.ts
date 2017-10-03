import {Observable} from 'rxjs/Observable';
import {Scheduler} from 'rxjs/Scheduler';

/*
  Input Observable
  cold('-a-b-c---d-e-')
  cold('---|')

  Expected Observable
  cold('----b---c---e')

*/

export const auditResult = (obs: Observable<string>, audit$: Observable<string>) => {
  return obs.audit(() => audit$);
};
