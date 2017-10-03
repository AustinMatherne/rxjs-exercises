import {expect} from "chai";
import {rxSandbox, RxSandboxInstance} from "rx-sandbox";
import "rxjs";
import {sandbox as sinonSandbox, SinonSandbox, SinonSpy} from "sinon";

import {ofResult} from "./1-of";
import {bindCallbackResult} from "./10-bind-callback";
import {createResult} from "./11-create";
import {fromResult} from "./2-from";
import {emptyResult} from "./3-empty";
import {neverResult} from "./4-never";
import {throwResult} from "./5-throw";
import {rangeResult} from "./6-range";
import {intervalResult} from "./7-interval";
import {timerResult} from "./8-timer";
import {deferResult} from "./9-defer";

describe("1 creating observables:", () => {
  const marbleAssert = rxSandbox.marbleAssert;
  let rx: RxSandboxInstance;
  let sandbox: SinonSandbox;
  let logSpy: SinonSpy;

  beforeEach(() => {
    rx = rxSandbox.create();
    sandbox = sinonSandbox.create();
    logSpy = sandbox.spy(console, "log");
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("1 observable of", () => {
    const result = rx.getMessages(ofResult);
    const expected = rx.e("(ab|)", {a: "hello", b: "world"});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("2 observable from", () => {
    const result = rx.getMessages(fromResult);
    const expected = rx.e("(abc|)", {a: 1, b: 2, c: 3});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("3 observable empty", () => {
    const result = rx.getMessages(emptyResult);
    const expected = rx.e("|");

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("4 observable never", () => {
    const result = rx.getMessages(neverResult);
    const expected = rx.e("-");

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("5 observable throw", () => {
    const result = rx.getMessages(throwResult);
    const expected = rx.e("#", null, "oh no!");

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("6 observable range", () => {
    const result = rx.getMessages(rangeResult);
    const expected = rx.e("(abcdef|)", {a: 96, b: 97, c: 98, d: 99, e: 100, f: 101});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("7 observable interval", () => {
    const result = rx.getMessages(intervalResult(rx.scheduler));
    const expected = rx.e("---a--b--c-", {a: 0, b: 1, c: 2});

    rx.advanceTo(9);
    marbleAssert(result).to.equal(expected);
  });

  it("8 observable timer", () => {
    const result = rx.getMessages(timerResult(rx.scheduler));
    const expected = rx.e("---a-b-c-d-e-f-", {a: 0, b: 1, c: 2, d: 3, e: 4, f: 5});

    rx.advanceTo(13);
    marbleAssert(result).to.equal(expected);
  });

  it("9 observable defer", () => {
    const randomStub = sandbox.stub(Math, "random");
    randomStub.onFirstCall().returns(0.1);
    randomStub.onSecondCall().returns(0.9);

    const firstResult = rx.getMessages(deferResult);
    const firstExpectation = rx.e("(a|)", {a: 0.1});
    rx.advanceTo(0);

    const secondResult = rx.getMessages(deferResult);
    const secondExpectation = rx.e("(a|)", {a: 0.9});
    rx.advanceTo(0);

    marbleAssert(firstResult).to.equal(firstExpectation);
    marbleAssert(secondResult).to.equal(secondExpectation);

  });

  it("10 observable bind callback", () => {
    const callback1 = bindCallbackResult("hello");
    const callback2 = bindCallbackResult("world");
    const result1 = rx.getMessages(callback1);
    const result2 = rx.getMessages(callback2);
    const expected1 = rx.e("(a|)", {a: "hello"});
    const expected2 = rx.e("(a|)", {a: "world"});

    rx.flush();

    marbleAssert(result1).to.equal(expected1);
    marbleAssert(result2).to.equal(expected2);
  });

  it("11 observable create", () => {
    const result = rx.getMessages(createResult);
    const expected = rx.e("(ab#)", {a: "hello", b: "world"}, "oh no!");

    rx.flush();

    marbleAssert(result).to.equal(expected);
    expect(logSpy.calledWith("tear down!")).to.be.true;
  });
});
