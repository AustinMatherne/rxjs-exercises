import {Observable} from 'rxjs/Observable';


/*
  Input Observable
  cold('-a-b-c-d-e-', {a: 'library', b: 'hotel', c: 'bob', d: 'taxi', e: 'gozer'})

  Expected Observable // each ghost should be passed to console.log
  cold('-a-b-c-d-e-', {a: 'library', b: 'hotel', c: 'bob', d: 'taxi', e: 'gozer'})

*/

const ghostLogger = (obs: Observable<string>): Observable<string> => {
  const ghosts: {[k: string]: string} = {
    LIBRARY: 'Eleanor Twitty',
    HOTEL: 'Slimer',
    TAXI: 'Dawdle',
    GOZER: 'Tubby Soft-Squeeze'
  };

  return obs.do(value => {
    const ghost = ghosts[value.toUpperCase()];
    ghost ? console.log(ghost) : null;
  });
};

export const letResult = (obs: Observable<string>) => {
  return obs.let(ghostLogger);
};
