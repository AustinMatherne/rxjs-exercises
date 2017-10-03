import {expect} from "chai";
import {rxSandbox, RxSandboxInstance} from "rx-sandbox";
import "rxjs";
import {ColdObservable} from "rxjs/testing/ColdObservable";
import {sandbox as sinonSandbox, SinonSandbox, SinonSpy} from "sinon";

import {mapResult} from "./1-map";
import {minResult} from "./10-min";
import {countResult} from "./11-count";
import {everyResult} from "./12-every";
import {distinctResult} from "./13-distinct";
import {reduceResult} from "./14-reduce";
import {scanResult} from "./15-scan";
import {debounceResult} from "./16-debounce";
import {throttleResult} from "./17-throttle";
import {auditResult} from "./18-audit";
import {sampleResult} from "./19-sample";
import {doResult} from "./2-do";
import {bufferResult} from "./20-buffer";
import {delayResult} from "./21-delay";
import {catchResult} from "./22-catch";
import {retryResult} from "./23-retry";
import {expandResult} from "./24-expand";
import {mergeAllResult} from "./25-mergeAll";
import {combineAllResult} from "./26-combineAll";
import {concatAllResult} from "./27-concatAll";
import {switchResult} from "./28-switch";
import {exhaustResult} from "./29-exhaust";
import {filterResult} from "./3-filter";
import {letResult} from "./30-let";
import {takeResult} from "./4-take";
import {firstResult} from "./5-first";
import {lastResult} from "./6-last";
import {skipResult} from "./7-skip";
import {findResult} from "./8-find";
import {maxResult} from "./9-max";

describe("2 operators:", () => {
  const marbleAssert = rxSandbox.marbleAssert;
  let rx: RxSandboxInstance;
  let sandbox: SinonSandbox;
  let logSpy: SinonSpy;
  let number$: ColdObservable<number>;
  let letter$: ColdObservable<string>;

  beforeEach(() => {
    rx = rxSandbox.create();
    sandbox = sinonSandbox.create();
    logSpy = sandbox.spy(console, "log");

    letter$ = rx.cold("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z|");
    number$ = rx.cold("a-b-c-d-e-f-g-h-i-j-", {
      a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9,
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("1 operator map", () => {
    const result = rx.getMessages(mapResult(number$));
    const expected = rx.e("a-b-c-d-e-f-g-h-i-j-", {
      a: 0, b: 10, c: 20, d: 30, e: 40, f: 50, g: 60, h: 70, i: 80, j: 90,
    });

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("2 operator do", () => {
    const result = rx.getMessages(doResult(number$));
    const expected = rx.e("a-b-c-d-e-f-g-h-i-j-", {
      a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9,
    });

    rx.flush();

    marbleAssert(result).to.equal(expected);
    expect(logSpy.callCount).to.equal(10);
    expect(logSpy.firstCall.calledWith(0)).to.be.true;
    expect(logSpy.lastCall.calledWith(9)).to.be.true;
  });

  it("3 operator filter", () => {
    const result = rx.getMessages(filterResult(number$));
    const expected = rx.e("a---b---c---d---e-", {
      a: 0, b: 2, c: 4, d: 6, e: 8,
    });

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("4 operator take", () => {
    const result = rx.getMessages(takeResult(number$));
    const expected = rx.e("a-b-(c|)", {a: 0, b: 1, c: 2});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("5 operator first", () => {
    const result = rx.getMessages(firstResult(letter$));
    const expected = rx.e("(a|)");

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("6 operator last", () => {
    const result = rx.getMessages(lastResult(rx.cold("-a-b-c|")));
    const expected = rx.e("------(c|)");

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("7 operator skip", () => {
    const result = rx.getMessages(skipResult(number$));
    const expected = rx.e("------a-b-c-d-e-f-g-", {
      a: 3, b: 4, c: 5, d: 6, e: 7, f: 8, g: 9,
    });

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("8 operator find", () => {
    const result = rx.getMessages(findResult(letter$));
    const expected = rx.e("------(d|)");

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("9 operator max", () => {
    const result = rx.getMessages(maxResult(rx.cold("a-b-c-d|", {a: 4, b: 6, c: 10, d: 3})));
    const expected = rx.e("-------(a|)", {a: 10});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("10 operator min", () => {
    const result = rx.getMessages(minResult(rx.cold("a-b-c-d|", {a: 4, b: 6, c: 10, d: 3})));
    const expected = rx.e("-------(a|)", {a: 3});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("11 operator count", () => {
    const result = rx.getMessages(countResult(rx.cold("a-b-c-d|")));
    const expected = rx.e("-------(a|)", {a: 4});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("12 operator every", () => {
    const result1 = rx.getMessages(everyResult(rx.cold("a-b-c|", {a: 0, b: 1, c: 2})));
    const firstExpectation = rx.e("-----(a|)", {a: true});

    const result2 = rx.getMessages(everyResult(rx.cold("a-b-c|", {a: 0, b: -1, c: -2})));
    const secondExpectation = rx.e("--(a|)", {a: false});

    rx.flush();

    marbleAssert(result1).to.equal(firstExpectation);
    marbleAssert(result2).to.equal(secondExpectation);
  });

  it("13 operator distinct", () => {
    const result = rx.getMessages(distinctResult(rx.cold("a-b-a-b-a-b-a-b-a-b-", {a: 0, b: 1})));
    const expected = rx.e("a-b-", {a: 0, b: 1});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("14 operator reduce", () => {
    const result = rx.getMessages(reduceResult(number$.take(4)));
    const expected = rx.e("------(a|)", {a: 6});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("15 operator scan", () => {
    const result = rx.getMessages(scanResult(number$.take(4)));
    const expected = rx.e("a-b-c-(d|)", {a: 0, b: 1, c: 3, d: 6});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("16 operator debounce", () => {
    const dataSource$ = rx.cold("-a--b-c--d-e-");
    const debounce$ = rx.cold("  --|");
    const expected = rx.e("      ---a----c----e-");
    const result = rx.getMessages(debounceResult(dataSource$, debounce$));

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("17 operator throttle", () => {
    const dataSource$ = rx.cold("-a--b-c--d-e-");
    const throttle$ = rx.cold("  --|");
    const expected = rx.e("      -a--b----d---");
    const result = rx.getMessages(throttleResult(dataSource$, throttle$));

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("18 operator audit", () => {
    const dataSource$ = rx.cold("-a-b-c---d-e-");
    const audit$ = rx.cold("     ---|");
    const expected = rx.e("     ----b---c---e");
    const result = rx.getMessages(auditResult(dataSource$, audit$));

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("19 operator sample", () => {
    const dataSource$ = rx.cold("-a--b-c--d-e-");
    const sample$ = rx.cold("---a--a----a-");
    const expected = rx.e("---a--c----e-");
    const result = rx.getMessages(sampleResult(dataSource$, sample$));

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("20 operator buffer", () => {
    const dataSource$ = rx.cold("-a-b-c-d-e-", {a: 0, b: 1, c: 2, d: 3, e: 4});
    const buffer$ = rx.cold("    ----a-----a");
    const expected = rx.e("      ----a-----b", {a: [0, 1], b: [2, 3, 4]});
    const result = rx.getMessages(bufferResult(dataSource$, buffer$));

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("21 operator delay", () => {
    const dataSource$ = rx.cold("-a--b-c-----------");
    const expected = rx.e("      ------a--b-c------");
    const result = rx.getMessages(delayResult(dataSource$, rx.scheduler));

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("22 operator catch", () => {
    const result = rx.getMessages(catchResult(rx.cold("-#")));
    const expected = rx.e("-(a|)", {a: "error handled"});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("23 operator retry", () => {
    const result = rx.getMessages(retryResult(rx.cold("-#")));
    const expected = rx.e("---#");

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("24 operator expand", () => {
    const result = rx.getMessages(expandResult(rx.cold("-a-b-c|", {a: 0, b: 1, c: 2})));
    const expected = rx.e("-(abc)-(de)-f|", {a: 0, b: 1, c: 2, d: 1, e: 2, f: 2});

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("25 operator mergeAll", () => {
    const firstObservable = rx.cold("      -a-b-c--|");
    const secondObservable = rx.cold("     --x-y-z-|");
    const higherOrderObservable = rx.cold("(ab)---|", {a: firstObservable, b: secondObservable});
    const expected = rx.e("                -axbycz-|");
    const result = rx.getMessages(mergeAllResult(higherOrderObservable));

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("26 operator combineAll", () => {
    const firstObservable = rx.cold("     a-b--|");
    const secondObservable = rx.cold("    -y-z-|");
    const higherOrderObservable = rx.cold("ab-|", {a: firstObservable, b: secondObservable});
    const expected = rx.e("----abc-|", {a: ["a", "y"], b: ["b", "y"], c: ["b", "z"]});
    const result = rx.getMessages(combineAllResult(higherOrderObservable));

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("27 operator concatAll", () => {
    const firstObservable = rx.cold("      a-b--|");
    const secondObservable = rx.cold("     -y-z-|");
    const higherOrderObservable = rx.cold("ab-|", {a: firstObservable, b: secondObservable});
    const expected = rx.e("                a-b---y-z-|");
    const result = rx.getMessages(concatAllResult(higherOrderObservable));

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("28 operator switch", () => {
    const firstObservable = rx.cold("      a-b--|");
    const secondObservable = rx.cold("     -y-z-|");
    const higherOrderObservable = rx.cold("ab-|", {a: firstObservable, b: secondObservable});
    const expected = rx.e("                a-y-z-|");
    const result = rx.getMessages(switchResult(higherOrderObservable));

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("29 operator exhaust", () => {
    const firstObservable = rx.cold("      a-b--|");
    const secondObservable = rx.cold("     -y-z-|");
    const higherOrderObservable = rx.cold("ab-|", {a: firstObservable, b: secondObservable});
    const expected = rx.e("                a-b--|");
    const result = rx.getMessages(exhaustResult(higherOrderObservable) as any);

    rx.flush();

    marbleAssert(result).to.equal(expected);
  });

  it("30 operator let", () => {
    const dataSource$ = rx.cold("-a-b-c-d-e", {
      a: "library",
      b: "hotel",
      c: "bob",
      d: "taxi",
      e: "gozer",
    });
    const expected = rx.e("-a-b-c-d-e-", {
      a: "library",
      b: "hotel",
      c: "bob",
      d: "taxi",
      e: "gozer",
    });
    const result = rx.getMessages(letResult(dataSource$));

    rx.flush();

    marbleAssert(result).to.equal(expected);
    expect(logSpy.callCount).to.equal(4);
    expect(logSpy.firstCall.calledWith("Eleanor Twitty")).to.be.true;
    expect(logSpy.secondCall.calledWith("Slimer")).to.be.true;
    expect(logSpy.thirdCall.calledWith("Dawdle")).to.be.true;
    expect(logSpy.lastCall.calledWith("Tubby Soft-Squeeze")).to.be.true;
  });
});
