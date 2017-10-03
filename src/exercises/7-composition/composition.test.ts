import {expect} from 'chai';
import {sandbox as sinonSandbox, SinonSandbox, SinonSpy} from 'sinon';
import {ColdObservable} from 'rxjs/testing/ColdObservable';
import {rxSandbox, RxSandboxInstance} from 'rx-sandbox';

import {mergeResult} from './1-merge';
import {zipResult} from './2-zip';
import {concatResult} from './3-concat';
import {combineLatestResult} from './4-combineLatest';
import {withLatestFromResult} from './5-withLatestFrom';
import {startWithResult} from './6-startWith';
import {partitionResult} from './7-partition';
import {groupByResult} from './8-groupBy';


describe('7 composition:', () => {
  const marbleAssert = rxSandbox.marbleAssert;
  let rx: RxSandboxInstance;
  let sandbox: SinonSandbox;
  let logSpy: SinonSpy;
  let obs1$: ColdObservable<string>;
  let obs2$: ColdObservable<string>;
  let number$: ColdObservable<number>;

  beforeEach(() => {
    rx = rxSandbox.create();
    sandbox = sinonSandbox.create();
    logSpy = sandbox.spy(console, 'log');

    obs1$ = rx.cold('a-b-c|');
    obs2$ = rx.cold('x-y-z|');
    number$ = rx.cold('a-b-c-d|', {a: 0, b: 1, c: 2, d: 3});
  });

  afterEach(() => {
    sandbox.restore();
  })

  it('1 composition merge', () => {
    const result = rx.getMessages(mergeResult(obs1$, obs2$));
    const expected = rx.e('(ax)-(by)-(cz)|');

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it('2 composition zip', () => {
    const result = rx.getMessages(zipResult(obs1$, obs2$));
    const expected = rx.e('a-b-c|', {a: ['a', 'x'], b: ['b', 'y'], c: ['c', 'z']});

    rx.flush();

    marbleAssert(result).to.equal(<any>expected);
  });

  it('3 composition concat', () => {
    const result = rx.getMessages(concatResult(obs1$, obs2$));
    const expected = rx.e('a-b-cx-y-z|');

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it('4 composition combineLatest', () => {
    const result = rx.getMessages(combineLatestResult(obs1$, obs2$));
    const expected = rx.e('a-(bc)-(de)|', {
        a: ['a', 'x'], b: ['b', 'x'], c: ['b', 'y'], d: ['c', 'y'], e: ['c', 'z']
    });

    rx.flush();

    marbleAssert(result).to.equal(<any>expected);
  });

  it('5 composition withLatestFrom', () => {
    const result = rx.getMessages(withLatestFromResult(obs1$, obs2$));
    const expected = rx.e('a-b-c|', {a: ['a', 'x'], b: ['b', 'y'], c: ['c', 'z']});

    rx.flush();

    marbleAssert(result).to.equal(<any>expected);
  });

  it('6 composition startWith', () => {
    const result = rx.getMessages(startWithResult(obs1$, 'beginning!'));
    const expected = rx.e('(sa)-b-c|', {s: 'beginning!'});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it('7 composition partition', () => {
    const [obs1, obs2] = partitionResult(number$);
    const result1 = rx.getMessages(obs1);
    const result2 = rx.getMessages(obs2);
    const expected1 = rx.e('a---b--|', {a: 0, b: 2});
    const expected2 = rx.e('--a---b|', {a: 1, b: 3});

    rx.flush();

    marbleAssert(result1).to.equal(expected1);
    marbleAssert(result2).to.equal(expected2);
  });

  it('8 composition groupBy', () => {
    const dataSource$ = rx.cold('a-b-c-|', {a: {id: 5}, b: {id: 2}, c: {id: 5}});
    const expected1 = rx.e('     a---c-|', {a: {id: 5}, c: {id: 5}});
    const expected2 = rx.e('       b---|', {b: {id: 2}});
    const expected = rx.e('      a-b---|', {a: expected1, b: expected2});
    const result = rx.getMessages(groupByResult(dataSource$));

    rx.flush();

    marbleAssert(result).to.equal(<any>expected);
  });
});
