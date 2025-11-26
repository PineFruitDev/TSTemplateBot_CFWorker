var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod2) => function __require2() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, isWorkerdProcessV2, unenvProcess, exit, features, platform, env, hrtime3, nextTick, _channel, _disconnect, _events, _eventsCount, _handleQueue, _maxListeners, _pendingMessage, _send, assert2, disconnect, mainModule, _debugEnd, _debugProcess, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _linkedBinding, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, dlopen, domain, emit, emitWarning, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, initgroups, kill, listenerCount, listeners, loadEnvFile, memoryUsage, moduleLoadList, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    isWorkerdProcessV2 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
    unenvProcess = new Process({
      env: globalProcess.env,
      // `hrtime` is only available from workerd process v2
      hrtime: isWorkerdProcessV2 ? workerdProcess.hrtime : hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      env: (
        // Always implemented by workerd
        env
      ),
      hrtime: (
        // Only implemented in workerd v2
        hrtime3
      ),
      nextTick: (
        // Always implemented by workerd
        nextTick
      )
    } = unenvProcess);
    ({
      _channel,
      _disconnect,
      _events,
      _eventsCount,
      _handleQueue,
      _maxListeners,
      _pendingMessage,
      _send,
      assert: assert2,
      disconnect,
      mainModule
    } = unenvProcess);
    ({
      _debugEnd: (
        // @ts-expect-error `_debugEnd` is missing typings
        _debugEnd
      ),
      _debugProcess: (
        // @ts-expect-error `_debugProcess` is missing typings
        _debugProcess
      ),
      _exiting: (
        // @ts-expect-error `_exiting` is missing typings
        _exiting
      ),
      _fatalException: (
        // @ts-expect-error `_fatalException` is missing typings
        _fatalException
      ),
      _getActiveHandles: (
        // @ts-expect-error `_getActiveHandles` is missing typings
        _getActiveHandles
      ),
      _getActiveRequests: (
        // @ts-expect-error `_getActiveRequests` is missing typings
        _getActiveRequests
      ),
      _kill: (
        // @ts-expect-error `_kill` is missing typings
        _kill
      ),
      _linkedBinding: (
        // @ts-expect-error `_linkedBinding` is missing typings
        _linkedBinding
      ),
      _preload_modules: (
        // @ts-expect-error `_preload_modules` is missing typings
        _preload_modules
      ),
      _rawDebug: (
        // @ts-expect-error `_rawDebug` is missing typings
        _rawDebug
      ),
      _startProfilerIdleNotifier: (
        // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
        _startProfilerIdleNotifier
      ),
      _stopProfilerIdleNotifier: (
        // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
        _stopProfilerIdleNotifier
      ),
      _tickCallback: (
        // @ts-expect-error `_tickCallback` is missing typings
        _tickCallback
      ),
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      availableMemory,
      binding: (
        // @ts-expect-error `binding` is missing typings
        binding
      ),
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain: (
        // @ts-expect-error `domain` is missing typings
        domain
      ),
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      initgroups: (
        // @ts-expect-error `initgroups` is missing typings
        initgroups
      ),
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList: (
        // @ts-expect-error `moduleLoadList` is missing typings
        moduleLoadList
      ),
      off,
      on,
      once,
      openStdin: (
        // @ts-expect-error `openStdin` is missing typings
        openStdin
      ),
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit: (
        // @ts-expect-error `reallyExit` is missing typings
        reallyExit
      ),
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = isWorkerdProcessV2 ? workerdProcess : unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/discord-api-types/gateway/common.js
var require_common = __commonJS({
  "node_modules/discord-api-types/gateway/common.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/gateway/v10.js
var require_v10 = __commonJS({
  "node_modules/discord-api-types/gateway/v10.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VoiceChannelEffectSendAnimationType = exports.GatewayDispatchEvents = exports.GatewayIntentBits = exports.GatewayCloseCodes = exports.GatewayOpcodes = exports.GatewayVersion = void 0;
    __exportStar(require_common(), exports);
    exports.GatewayVersion = "10";
    var GatewayOpcodes2;
    (function(GatewayOpcodes3) {
      GatewayOpcodes3[GatewayOpcodes3["Dispatch"] = 0] = "Dispatch";
      GatewayOpcodes3[GatewayOpcodes3["Heartbeat"] = 1] = "Heartbeat";
      GatewayOpcodes3[GatewayOpcodes3["Identify"] = 2] = "Identify";
      GatewayOpcodes3[GatewayOpcodes3["PresenceUpdate"] = 3] = "PresenceUpdate";
      GatewayOpcodes3[GatewayOpcodes3["VoiceStateUpdate"] = 4] = "VoiceStateUpdate";
      GatewayOpcodes3[GatewayOpcodes3["Resume"] = 6] = "Resume";
      GatewayOpcodes3[GatewayOpcodes3["Reconnect"] = 7] = "Reconnect";
      GatewayOpcodes3[GatewayOpcodes3["RequestGuildMembers"] = 8] = "RequestGuildMembers";
      GatewayOpcodes3[GatewayOpcodes3["InvalidSession"] = 9] = "InvalidSession";
      GatewayOpcodes3[GatewayOpcodes3["Hello"] = 10] = "Hello";
      GatewayOpcodes3[GatewayOpcodes3["HeartbeatAck"] = 11] = "HeartbeatAck";
      GatewayOpcodes3[GatewayOpcodes3["RequestSoundboardSounds"] = 31] = "RequestSoundboardSounds";
    })(GatewayOpcodes2 || (exports.GatewayOpcodes = GatewayOpcodes2 = {}));
    var GatewayCloseCodes2;
    (function(GatewayCloseCodes3) {
      GatewayCloseCodes3[GatewayCloseCodes3["UnknownError"] = 4e3] = "UnknownError";
      GatewayCloseCodes3[GatewayCloseCodes3["UnknownOpcode"] = 4001] = "UnknownOpcode";
      GatewayCloseCodes3[GatewayCloseCodes3["DecodeError"] = 4002] = "DecodeError";
      GatewayCloseCodes3[GatewayCloseCodes3["NotAuthenticated"] = 4003] = "NotAuthenticated";
      GatewayCloseCodes3[GatewayCloseCodes3["AuthenticationFailed"] = 4004] = "AuthenticationFailed";
      GatewayCloseCodes3[GatewayCloseCodes3["AlreadyAuthenticated"] = 4005] = "AlreadyAuthenticated";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidSeq"] = 4007] = "InvalidSeq";
      GatewayCloseCodes3[GatewayCloseCodes3["RateLimited"] = 4008] = "RateLimited";
      GatewayCloseCodes3[GatewayCloseCodes3["SessionTimedOut"] = 4009] = "SessionTimedOut";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidShard"] = 4010] = "InvalidShard";
      GatewayCloseCodes3[GatewayCloseCodes3["ShardingRequired"] = 4011] = "ShardingRequired";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidAPIVersion"] = 4012] = "InvalidAPIVersion";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidIntents"] = 4013] = "InvalidIntents";
      GatewayCloseCodes3[GatewayCloseCodes3["DisallowedIntents"] = 4014] = "DisallowedIntents";
    })(GatewayCloseCodes2 || (exports.GatewayCloseCodes = GatewayCloseCodes2 = {}));
    var GatewayIntentBits2;
    (function(GatewayIntentBits3) {
      GatewayIntentBits3[GatewayIntentBits3["Guilds"] = 1] = "Guilds";
      GatewayIntentBits3[GatewayIntentBits3["GuildMembers"] = 2] = "GuildMembers";
      GatewayIntentBits3[GatewayIntentBits3["GuildModeration"] = 4] = "GuildModeration";
      GatewayIntentBits3[GatewayIntentBits3["GuildBans"] = 4] = "GuildBans";
      GatewayIntentBits3[GatewayIntentBits3["GuildExpressions"] = 8] = "GuildExpressions";
      GatewayIntentBits3[GatewayIntentBits3["GuildEmojisAndStickers"] = 8] = "GuildEmojisAndStickers";
      GatewayIntentBits3[GatewayIntentBits3["GuildIntegrations"] = 16] = "GuildIntegrations";
      GatewayIntentBits3[GatewayIntentBits3["GuildWebhooks"] = 32] = "GuildWebhooks";
      GatewayIntentBits3[GatewayIntentBits3["GuildInvites"] = 64] = "GuildInvites";
      GatewayIntentBits3[GatewayIntentBits3["GuildVoiceStates"] = 128] = "GuildVoiceStates";
      GatewayIntentBits3[GatewayIntentBits3["GuildPresences"] = 256] = "GuildPresences";
      GatewayIntentBits3[GatewayIntentBits3["GuildMessages"] = 512] = "GuildMessages";
      GatewayIntentBits3[GatewayIntentBits3["GuildMessageReactions"] = 1024] = "GuildMessageReactions";
      GatewayIntentBits3[GatewayIntentBits3["GuildMessageTyping"] = 2048] = "GuildMessageTyping";
      GatewayIntentBits3[GatewayIntentBits3["DirectMessages"] = 4096] = "DirectMessages";
      GatewayIntentBits3[GatewayIntentBits3["DirectMessageReactions"] = 8192] = "DirectMessageReactions";
      GatewayIntentBits3[GatewayIntentBits3["DirectMessageTyping"] = 16384] = "DirectMessageTyping";
      GatewayIntentBits3[GatewayIntentBits3["MessageContent"] = 32768] = "MessageContent";
      GatewayIntentBits3[GatewayIntentBits3["GuildScheduledEvents"] = 65536] = "GuildScheduledEvents";
      GatewayIntentBits3[GatewayIntentBits3["AutoModerationConfiguration"] = 1048576] = "AutoModerationConfiguration";
      GatewayIntentBits3[GatewayIntentBits3["AutoModerationExecution"] = 2097152] = "AutoModerationExecution";
      GatewayIntentBits3[GatewayIntentBits3["GuildMessagePolls"] = 16777216] = "GuildMessagePolls";
      GatewayIntentBits3[GatewayIntentBits3["DirectMessagePolls"] = 33554432] = "DirectMessagePolls";
    })(GatewayIntentBits2 || (exports.GatewayIntentBits = GatewayIntentBits2 = {}));
    var GatewayDispatchEvents2;
    (function(GatewayDispatchEvents3) {
      GatewayDispatchEvents3["ApplicationCommandPermissionsUpdate"] = "APPLICATION_COMMAND_PERMISSIONS_UPDATE";
      GatewayDispatchEvents3["AutoModerationActionExecution"] = "AUTO_MODERATION_ACTION_EXECUTION";
      GatewayDispatchEvents3["AutoModerationRuleCreate"] = "AUTO_MODERATION_RULE_CREATE";
      GatewayDispatchEvents3["AutoModerationRuleDelete"] = "AUTO_MODERATION_RULE_DELETE";
      GatewayDispatchEvents3["AutoModerationRuleUpdate"] = "AUTO_MODERATION_RULE_UPDATE";
      GatewayDispatchEvents3["ChannelCreate"] = "CHANNEL_CREATE";
      GatewayDispatchEvents3["ChannelDelete"] = "CHANNEL_DELETE";
      GatewayDispatchEvents3["ChannelPinsUpdate"] = "CHANNEL_PINS_UPDATE";
      GatewayDispatchEvents3["ChannelUpdate"] = "CHANNEL_UPDATE";
      GatewayDispatchEvents3["EntitlementCreate"] = "ENTITLEMENT_CREATE";
      GatewayDispatchEvents3["EntitlementDelete"] = "ENTITLEMENT_DELETE";
      GatewayDispatchEvents3["EntitlementUpdate"] = "ENTITLEMENT_UPDATE";
      GatewayDispatchEvents3["GuildAuditLogEntryCreate"] = "GUILD_AUDIT_LOG_ENTRY_CREATE";
      GatewayDispatchEvents3["GuildBanAdd"] = "GUILD_BAN_ADD";
      GatewayDispatchEvents3["GuildBanRemove"] = "GUILD_BAN_REMOVE";
      GatewayDispatchEvents3["GuildCreate"] = "GUILD_CREATE";
      GatewayDispatchEvents3["GuildDelete"] = "GUILD_DELETE";
      GatewayDispatchEvents3["GuildEmojisUpdate"] = "GUILD_EMOJIS_UPDATE";
      GatewayDispatchEvents3["GuildIntegrationsUpdate"] = "GUILD_INTEGRATIONS_UPDATE";
      GatewayDispatchEvents3["GuildMemberAdd"] = "GUILD_MEMBER_ADD";
      GatewayDispatchEvents3["GuildMemberRemove"] = "GUILD_MEMBER_REMOVE";
      GatewayDispatchEvents3["GuildMembersChunk"] = "GUILD_MEMBERS_CHUNK";
      GatewayDispatchEvents3["GuildMemberUpdate"] = "GUILD_MEMBER_UPDATE";
      GatewayDispatchEvents3["GuildRoleCreate"] = "GUILD_ROLE_CREATE";
      GatewayDispatchEvents3["GuildRoleDelete"] = "GUILD_ROLE_DELETE";
      GatewayDispatchEvents3["GuildRoleUpdate"] = "GUILD_ROLE_UPDATE";
      GatewayDispatchEvents3["GuildScheduledEventCreate"] = "GUILD_SCHEDULED_EVENT_CREATE";
      GatewayDispatchEvents3["GuildScheduledEventDelete"] = "GUILD_SCHEDULED_EVENT_DELETE";
      GatewayDispatchEvents3["GuildScheduledEventUpdate"] = "GUILD_SCHEDULED_EVENT_UPDATE";
      GatewayDispatchEvents3["GuildScheduledEventUserAdd"] = "GUILD_SCHEDULED_EVENT_USER_ADD";
      GatewayDispatchEvents3["GuildScheduledEventUserRemove"] = "GUILD_SCHEDULED_EVENT_USER_REMOVE";
      GatewayDispatchEvents3["GuildSoundboardSoundCreate"] = "GUILD_SOUNDBOARD_SOUND_CREATE";
      GatewayDispatchEvents3["GuildSoundboardSoundDelete"] = "GUILD_SOUNDBOARD_SOUND_DELETE";
      GatewayDispatchEvents3["GuildSoundboardSoundsUpdate"] = "GUILD_SOUNDBOARD_SOUNDS_UPDATE";
      GatewayDispatchEvents3["GuildSoundboardSoundUpdate"] = "GUILD_SOUNDBOARD_SOUND_UPDATE";
      GatewayDispatchEvents3["SoundboardSounds"] = "SOUNDBOARD_SOUNDS";
      GatewayDispatchEvents3["GuildStickersUpdate"] = "GUILD_STICKERS_UPDATE";
      GatewayDispatchEvents3["GuildUpdate"] = "GUILD_UPDATE";
      GatewayDispatchEvents3["IntegrationCreate"] = "INTEGRATION_CREATE";
      GatewayDispatchEvents3["IntegrationDelete"] = "INTEGRATION_DELETE";
      GatewayDispatchEvents3["IntegrationUpdate"] = "INTEGRATION_UPDATE";
      GatewayDispatchEvents3["InteractionCreate"] = "INTERACTION_CREATE";
      GatewayDispatchEvents3["InviteCreate"] = "INVITE_CREATE";
      GatewayDispatchEvents3["InviteDelete"] = "INVITE_DELETE";
      GatewayDispatchEvents3["MessageCreate"] = "MESSAGE_CREATE";
      GatewayDispatchEvents3["MessageDelete"] = "MESSAGE_DELETE";
      GatewayDispatchEvents3["MessageDeleteBulk"] = "MESSAGE_DELETE_BULK";
      GatewayDispatchEvents3["MessagePollVoteAdd"] = "MESSAGE_POLL_VOTE_ADD";
      GatewayDispatchEvents3["MessagePollVoteRemove"] = "MESSAGE_POLL_VOTE_REMOVE";
      GatewayDispatchEvents3["MessageReactionAdd"] = "MESSAGE_REACTION_ADD";
      GatewayDispatchEvents3["MessageReactionRemove"] = "MESSAGE_REACTION_REMOVE";
      GatewayDispatchEvents3["MessageReactionRemoveAll"] = "MESSAGE_REACTION_REMOVE_ALL";
      GatewayDispatchEvents3["MessageReactionRemoveEmoji"] = "MESSAGE_REACTION_REMOVE_EMOJI";
      GatewayDispatchEvents3["MessageUpdate"] = "MESSAGE_UPDATE";
      GatewayDispatchEvents3["PresenceUpdate"] = "PRESENCE_UPDATE";
      GatewayDispatchEvents3["Ready"] = "READY";
      GatewayDispatchEvents3["Resumed"] = "RESUMED";
      GatewayDispatchEvents3["StageInstanceCreate"] = "STAGE_INSTANCE_CREATE";
      GatewayDispatchEvents3["StageInstanceDelete"] = "STAGE_INSTANCE_DELETE";
      GatewayDispatchEvents3["StageInstanceUpdate"] = "STAGE_INSTANCE_UPDATE";
      GatewayDispatchEvents3["SubscriptionCreate"] = "SUBSCRIPTION_CREATE";
      GatewayDispatchEvents3["SubscriptionDelete"] = "SUBSCRIPTION_DELETE";
      GatewayDispatchEvents3["SubscriptionUpdate"] = "SUBSCRIPTION_UPDATE";
      GatewayDispatchEvents3["ThreadCreate"] = "THREAD_CREATE";
      GatewayDispatchEvents3["ThreadDelete"] = "THREAD_DELETE";
      GatewayDispatchEvents3["ThreadListSync"] = "THREAD_LIST_SYNC";
      GatewayDispatchEvents3["ThreadMembersUpdate"] = "THREAD_MEMBERS_UPDATE";
      GatewayDispatchEvents3["ThreadMemberUpdate"] = "THREAD_MEMBER_UPDATE";
      GatewayDispatchEvents3["ThreadUpdate"] = "THREAD_UPDATE";
      GatewayDispatchEvents3["TypingStart"] = "TYPING_START";
      GatewayDispatchEvents3["UserUpdate"] = "USER_UPDATE";
      GatewayDispatchEvents3["VoiceChannelEffectSend"] = "VOICE_CHANNEL_EFFECT_SEND";
      GatewayDispatchEvents3["VoiceServerUpdate"] = "VOICE_SERVER_UPDATE";
      GatewayDispatchEvents3["VoiceStateUpdate"] = "VOICE_STATE_UPDATE";
      GatewayDispatchEvents3["WebhooksUpdate"] = "WEBHOOKS_UPDATE";
    })(GatewayDispatchEvents2 || (exports.GatewayDispatchEvents = GatewayDispatchEvents2 = {}));
    var VoiceChannelEffectSendAnimationType2;
    (function(VoiceChannelEffectSendAnimationType3) {
      VoiceChannelEffectSendAnimationType3[VoiceChannelEffectSendAnimationType3["Premium"] = 0] = "Premium";
      VoiceChannelEffectSendAnimationType3[VoiceChannelEffectSendAnimationType3["Basic"] = 1] = "Basic";
    })(VoiceChannelEffectSendAnimationType2 || (exports.VoiceChannelEffectSendAnimationType = VoiceChannelEffectSendAnimationType2 = {}));
  }
});

// node_modules/discord-api-types/globals.js
var require_globals = __commonJS({
  "node_modules/discord-api-types/globals.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormattingPatterns = void 0;
    exports.FormattingPatterns = {
      /**
       * Regular expression for matching a user mention, strictly without a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      User: /<@(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a user mention, strictly with a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       *
       * @deprecated Passing `!` in user mentions is no longer necessary / supported, and future message contents won't have it
       */
      UserWithNickname: /<@!(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a user mention, with or without a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       *
       * @deprecated Passing `!` in user mentions is no longer necessary / supported, and future message contents won't have it
       */
      UserWithOptionalNickname: /<@!?(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a channel mention
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      Channel: /<#(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a role mention
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      Role: /<@&(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a application command mention
       *
       * The `fullName` (possibly including `name`, `subcommandOrGroup` and `subcommand`) and `id` group properties are present on the `exec` result of this expression
       */
      SlashCommand: (
        // eslint-disable-next-line unicorn/no-unsafe-regex
        /<\/(?<fullName>(?<name>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: (?<subcommandOrGroup>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32}))?(?: (?<subcommand>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32}))?):(?<id>\d{17,20})>/u
      ),
      /**
       * Regular expression for matching a custom emoji, either static or animated
       *
       * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
       */
      Emoji: /<(?<animated>a)?:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching strictly an animated custom emoji
       *
       * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
       */
      AnimatedEmoji: /<(?<animated>a):(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching strictly a static custom emoji
       *
       * The `name` and `id` group properties are present on the `exec` result of this expression
       */
      StaticEmoji: /<:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a timestamp, either default or custom styled
       *
       * The `timestamp` and `style` group properties are present on the `exec` result of this expression
       */
      // eslint-disable-next-line prefer-named-capture-group
      Timestamp: /<t:(?<timestamp>-?\d{1,13})(:(?<style>[DFRTdft]))?>/,
      /**
       * Regular expression for matching strictly default styled timestamps
       *
       * The `timestamp` group property is present on the `exec` result of this expression
       */
      DefaultStyledTimestamp: /<t:(?<timestamp>-?\d{1,13})>/,
      /**
       * Regular expression for matching strictly custom styled timestamps
       *
       * The `timestamp` and `style` group properties are present on the `exec` result of this expression
       */
      StyledTimestamp: /<t:(?<timestamp>-?\d{1,13}):(?<style>[DFRTdft])>/,
      /**
       * Regular expression for matching a guild navigation mention
       *
       * The `type` group property is present on the `exec` result of this expression
       */
      GuildNavigation: /<id:(?<type>customize|browse|guide|linked-roles)>/,
      /**
       * Regular expression for matching a linked role mention
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      LinkedRole: /<id:linked-roles:(?<id>\d{17,20})>/
    };
    Object.freeze(exports.FormattingPatterns);
  }
});

// node_modules/discord-api-types/payloads/common.js
var require_common2 = __commonJS({
  "node_modules/discord-api-types/payloads/common.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PermissionFlagsBits = void 0;
    exports.PermissionFlagsBits = {
      /**
       * Allows creation of instant invites
       *
       * Applies to channel types: Text, Voice, Stage
       */
      CreateInstantInvite: 1n << 0n,
      /**
       * Allows kicking members
       */
      // eslint-disable-next-line sonarjs/no-identical-expressions
      KickMembers: 1n << 1n,
      /**
       * Allows banning members
       */
      BanMembers: 1n << 2n,
      /**
       * Allows all permissions and bypasses channel permission overwrites
       */
      Administrator: 1n << 3n,
      /**
       * Allows management and editing of channels
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageChannels: 1n << 4n,
      /**
       * Allows management and editing of the guild
       */
      ManageGuild: 1n << 5n,
      /**
       * Allows for the addition of reactions to messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      AddReactions: 1n << 6n,
      /**
       * Allows for viewing of audit logs
       */
      ViewAuditLog: 1n << 7n,
      /**
       * Allows for using priority speaker in a voice channel
       *
       * Applies to channel types: Voice
       */
      PrioritySpeaker: 1n << 8n,
      /**
       * Allows the user to go live
       *
       * Applies to channel types: Voice, Stage
       */
      Stream: 1n << 9n,
      /**
       * Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ViewChannel: 1n << 10n,
      /**
       * Allows for sending messages in a channel and creating threads in a forum
       * (does not allow sending messages in threads)
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendMessages: 1n << 11n,
      /**
       * Allows for sending of `/tts` messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendTTSMessages: 1n << 12n,
      /**
       * Allows for deletion of other users messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageMessages: 1n << 13n,
      /**
       * Links sent by users with this permission will be auto-embedded
       *
       * Applies to channel types: Text, Voice, Stage
       */
      EmbedLinks: 1n << 14n,
      /**
       * Allows for uploading images and files
       *
       * Applies to channel types: Text, Voice, Stage
       */
      AttachFiles: 1n << 15n,
      /**
       * Allows for reading of message history
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ReadMessageHistory: 1n << 16n,
      /**
       * Allows for using the `@everyone` tag to notify all users in a channel,
       * and the `@here` tag to notify all online users in a channel
       *
       * Applies to channel types: Text, Voice, Stage
       */
      MentionEveryone: 1n << 17n,
      /**
       * Allows the usage of custom emojis from other servers
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseExternalEmojis: 1n << 18n,
      /**
       * Allows for viewing guild insights
       */
      ViewGuildInsights: 1n << 19n,
      /**
       * Allows for joining of a voice channel
       *
       * Applies to channel types: Voice, Stage
       */
      Connect: 1n << 20n,
      /**
       * Allows for speaking in a voice channel
       *
       * Applies to channel types: Voice
       */
      Speak: 1n << 21n,
      /**
       * Allows for muting members in a voice channel
       *
       * Applies to channel types: Voice, Stage
       */
      MuteMembers: 1n << 22n,
      /**
       * Allows for deafening of members in a voice channel
       *
       * Applies to channel types: Voice
       */
      DeafenMembers: 1n << 23n,
      /**
       * Allows for moving of members between voice channels
       *
       * Applies to channel types: Voice, Stage
       */
      MoveMembers: 1n << 24n,
      /**
       * Allows for using voice-activity-detection in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseVAD: 1n << 25n,
      /**
       * Allows for modification of own nickname
       */
      ChangeNickname: 1n << 26n,
      /**
       * Allows for modification of other users nicknames
       */
      ManageNicknames: 1n << 27n,
      /**
       * Allows management and editing of roles
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageRoles: 1n << 28n,
      /**
       * Allows management and editing of webhooks
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageWebhooks: 1n << 29n,
      /**
       * Allows management and editing of emojis, stickers, and soundboard sounds
       *
       * @deprecated This is the old name for {@link PermissionFlagsBits.ManageGuildExpressions}
       */
      ManageEmojisAndStickers: 1n << 30n,
      /**
       * Allows for editing and deleting emojis, stickers, and soundboard sounds created by all users
       */
      ManageGuildExpressions: 1n << 30n,
      /**
       * Allows members to use application commands, including slash commands and context menu commands
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseApplicationCommands: 1n << 31n,
      /**
       * Allows for requesting to speak in stage channels
       *
       * Applies to channel types: Stage
       */
      RequestToSpeak: 1n << 32n,
      /**
       * Allows for editing and deleting scheduled events created by all users
       *
       * Applies to channel types: Voice, Stage
       */
      ManageEvents: 1n << 33n,
      /**
       * Allows for deleting and archiving threads, and viewing all private threads
       *
       * Applies to channel types: Text
       */
      ManageThreads: 1n << 34n,
      /**
       * Allows for creating public and announcement threads
       *
       * Applies to channel types: Text
       */
      CreatePublicThreads: 1n << 35n,
      /**
       * Allows for creating private threads
       *
       * Applies to channel types: Text
       */
      CreatePrivateThreads: 1n << 36n,
      /**
       * Allows the usage of custom stickers from other servers
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseExternalStickers: 1n << 37n,
      /**
       * Allows for sending messages in threads
       *
       * Applies to channel types: Text
       */
      SendMessagesInThreads: 1n << 38n,
      /**
       * Allows for using Activities (applications with the {@link ApplicationFlags.Embedded} flag) in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseEmbeddedActivities: 1n << 39n,
      /**
       * Allows for timing out users to prevent them from sending or reacting to messages in chat and threads,
       * and from speaking in voice and stage channels
       */
      ModerateMembers: 1n << 40n,
      /**
       * Allows for viewing role subscription insights
       */
      ViewCreatorMonetizationAnalytics: 1n << 41n,
      /**
       * Allows for using soundboard in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseSoundboard: 1n << 42n,
      /**
       * Allows for creating emojis, stickers, and soundboard sounds, and editing and deleting those created by the current user
       */
      CreateGuildExpressions: 1n << 43n,
      /**
       * Allows for creating scheduled events, and editing and deleting those created by the current user
       *
       * Applies to channel types: Voice, Stage
       */
      CreateEvents: 1n << 44n,
      /**
       * Allows the usage of custom soundboard sounds from other servers
       *
       * Applies to channel types: Voice
       */
      UseExternalSounds: 1n << 45n,
      /**
       * Allows sending voice messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendVoiceMessages: 1n << 46n,
      /**
       * Allows sending polls
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendPolls: 1n << 49n,
      /**
       * Allows user-installed apps to send public responses. When disabled, users will still be allowed to use their apps but the responses will be ephemeral. This only applies to apps not also installed to the server
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseExternalApps: 1n << 50n
    };
    Object.freeze(exports.PermissionFlagsBits);
  }
});

// node_modules/discord-api-types/payloads/v10/application.js
var require_application = __commonJS({
  "node_modules/discord-api-types/payloads/v10/application.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplicationWebhookEventStatus = exports.ApplicationRoleConnectionMetadataType = exports.ApplicationFlags = void 0;
    var ApplicationFlags2;
    (function(ApplicationFlags3) {
      ApplicationFlags3[ApplicationFlags3["EmbeddedReleased"] = 2] = "EmbeddedReleased";
      ApplicationFlags3[ApplicationFlags3["ManagedEmoji"] = 4] = "ManagedEmoji";
      ApplicationFlags3[ApplicationFlags3["EmbeddedIAP"] = 8] = "EmbeddedIAP";
      ApplicationFlags3[ApplicationFlags3["GroupDMCreate"] = 16] = "GroupDMCreate";
      ApplicationFlags3[ApplicationFlags3["ApplicationAutoModerationRuleCreateBadge"] = 64] = "ApplicationAutoModerationRuleCreateBadge";
      ApplicationFlags3[ApplicationFlags3["RPCHasConnected"] = 2048] = "RPCHasConnected";
      ApplicationFlags3[ApplicationFlags3["GatewayPresence"] = 4096] = "GatewayPresence";
      ApplicationFlags3[ApplicationFlags3["GatewayPresenceLimited"] = 8192] = "GatewayPresenceLimited";
      ApplicationFlags3[ApplicationFlags3["GatewayGuildMembers"] = 16384] = "GatewayGuildMembers";
      ApplicationFlags3[ApplicationFlags3["GatewayGuildMembersLimited"] = 32768] = "GatewayGuildMembersLimited";
      ApplicationFlags3[ApplicationFlags3["VerificationPendingGuildLimit"] = 65536] = "VerificationPendingGuildLimit";
      ApplicationFlags3[ApplicationFlags3["Embedded"] = 131072] = "Embedded";
      ApplicationFlags3[ApplicationFlags3["GatewayMessageContent"] = 262144] = "GatewayMessageContent";
      ApplicationFlags3[ApplicationFlags3["GatewayMessageContentLimited"] = 524288] = "GatewayMessageContentLimited";
      ApplicationFlags3[ApplicationFlags3["EmbeddedFirstParty"] = 1048576] = "EmbeddedFirstParty";
      ApplicationFlags3[ApplicationFlags3["ApplicationCommandBadge"] = 8388608] = "ApplicationCommandBadge";
    })(ApplicationFlags2 || (exports.ApplicationFlags = ApplicationFlags2 = {}));
    var ApplicationRoleConnectionMetadataType2;
    (function(ApplicationRoleConnectionMetadataType3) {
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerLessThanOrEqual"] = 1] = "IntegerLessThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerGreaterThanOrEqual"] = 2] = "IntegerGreaterThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerEqual"] = 3] = "IntegerEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerNotEqual"] = 4] = "IntegerNotEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["DatetimeLessThanOrEqual"] = 5] = "DatetimeLessThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["DatetimeGreaterThanOrEqual"] = 6] = "DatetimeGreaterThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["BooleanEqual"] = 7] = "BooleanEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["BooleanNotEqual"] = 8] = "BooleanNotEqual";
    })(ApplicationRoleConnectionMetadataType2 || (exports.ApplicationRoleConnectionMetadataType = ApplicationRoleConnectionMetadataType2 = {}));
    var ApplicationWebhookEventStatus2;
    (function(ApplicationWebhookEventStatus3) {
      ApplicationWebhookEventStatus3[ApplicationWebhookEventStatus3["Disabled"] = 1] = "Disabled";
      ApplicationWebhookEventStatus3[ApplicationWebhookEventStatus3["Enabled"] = 2] = "Enabled";
      ApplicationWebhookEventStatus3[ApplicationWebhookEventStatus3["DisabledByDiscord"] = 3] = "DisabledByDiscord";
    })(ApplicationWebhookEventStatus2 || (exports.ApplicationWebhookEventStatus = ApplicationWebhookEventStatus2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/auditLog.js
var require_auditLog = __commonJS({
  "node_modules/discord-api-types/payloads/v10/auditLog.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuditLogOptionsType = exports.AuditLogEvent = void 0;
    var AuditLogEvent2;
    (function(AuditLogEvent3) {
      AuditLogEvent3[AuditLogEvent3["GuildUpdate"] = 1] = "GuildUpdate";
      AuditLogEvent3[AuditLogEvent3["ChannelCreate"] = 10] = "ChannelCreate";
      AuditLogEvent3[AuditLogEvent3["ChannelUpdate"] = 11] = "ChannelUpdate";
      AuditLogEvent3[AuditLogEvent3["ChannelDelete"] = 12] = "ChannelDelete";
      AuditLogEvent3[AuditLogEvent3["ChannelOverwriteCreate"] = 13] = "ChannelOverwriteCreate";
      AuditLogEvent3[AuditLogEvent3["ChannelOverwriteUpdate"] = 14] = "ChannelOverwriteUpdate";
      AuditLogEvent3[AuditLogEvent3["ChannelOverwriteDelete"] = 15] = "ChannelOverwriteDelete";
      AuditLogEvent3[AuditLogEvent3["MemberKick"] = 20] = "MemberKick";
      AuditLogEvent3[AuditLogEvent3["MemberPrune"] = 21] = "MemberPrune";
      AuditLogEvent3[AuditLogEvent3["MemberBanAdd"] = 22] = "MemberBanAdd";
      AuditLogEvent3[AuditLogEvent3["MemberBanRemove"] = 23] = "MemberBanRemove";
      AuditLogEvent3[AuditLogEvent3["MemberUpdate"] = 24] = "MemberUpdate";
      AuditLogEvent3[AuditLogEvent3["MemberRoleUpdate"] = 25] = "MemberRoleUpdate";
      AuditLogEvent3[AuditLogEvent3["MemberMove"] = 26] = "MemberMove";
      AuditLogEvent3[AuditLogEvent3["MemberDisconnect"] = 27] = "MemberDisconnect";
      AuditLogEvent3[AuditLogEvent3["BotAdd"] = 28] = "BotAdd";
      AuditLogEvent3[AuditLogEvent3["RoleCreate"] = 30] = "RoleCreate";
      AuditLogEvent3[AuditLogEvent3["RoleUpdate"] = 31] = "RoleUpdate";
      AuditLogEvent3[AuditLogEvent3["RoleDelete"] = 32] = "RoleDelete";
      AuditLogEvent3[AuditLogEvent3["InviteCreate"] = 40] = "InviteCreate";
      AuditLogEvent3[AuditLogEvent3["InviteUpdate"] = 41] = "InviteUpdate";
      AuditLogEvent3[AuditLogEvent3["InviteDelete"] = 42] = "InviteDelete";
      AuditLogEvent3[AuditLogEvent3["WebhookCreate"] = 50] = "WebhookCreate";
      AuditLogEvent3[AuditLogEvent3["WebhookUpdate"] = 51] = "WebhookUpdate";
      AuditLogEvent3[AuditLogEvent3["WebhookDelete"] = 52] = "WebhookDelete";
      AuditLogEvent3[AuditLogEvent3["EmojiCreate"] = 60] = "EmojiCreate";
      AuditLogEvent3[AuditLogEvent3["EmojiUpdate"] = 61] = "EmojiUpdate";
      AuditLogEvent3[AuditLogEvent3["EmojiDelete"] = 62] = "EmojiDelete";
      AuditLogEvent3[AuditLogEvent3["MessageDelete"] = 72] = "MessageDelete";
      AuditLogEvent3[AuditLogEvent3["MessageBulkDelete"] = 73] = "MessageBulkDelete";
      AuditLogEvent3[AuditLogEvent3["MessagePin"] = 74] = "MessagePin";
      AuditLogEvent3[AuditLogEvent3["MessageUnpin"] = 75] = "MessageUnpin";
      AuditLogEvent3[AuditLogEvent3["IntegrationCreate"] = 80] = "IntegrationCreate";
      AuditLogEvent3[AuditLogEvent3["IntegrationUpdate"] = 81] = "IntegrationUpdate";
      AuditLogEvent3[AuditLogEvent3["IntegrationDelete"] = 82] = "IntegrationDelete";
      AuditLogEvent3[AuditLogEvent3["StageInstanceCreate"] = 83] = "StageInstanceCreate";
      AuditLogEvent3[AuditLogEvent3["StageInstanceUpdate"] = 84] = "StageInstanceUpdate";
      AuditLogEvent3[AuditLogEvent3["StageInstanceDelete"] = 85] = "StageInstanceDelete";
      AuditLogEvent3[AuditLogEvent3["StickerCreate"] = 90] = "StickerCreate";
      AuditLogEvent3[AuditLogEvent3["StickerUpdate"] = 91] = "StickerUpdate";
      AuditLogEvent3[AuditLogEvent3["StickerDelete"] = 92] = "StickerDelete";
      AuditLogEvent3[AuditLogEvent3["GuildScheduledEventCreate"] = 100] = "GuildScheduledEventCreate";
      AuditLogEvent3[AuditLogEvent3["GuildScheduledEventUpdate"] = 101] = "GuildScheduledEventUpdate";
      AuditLogEvent3[AuditLogEvent3["GuildScheduledEventDelete"] = 102] = "GuildScheduledEventDelete";
      AuditLogEvent3[AuditLogEvent3["ThreadCreate"] = 110] = "ThreadCreate";
      AuditLogEvent3[AuditLogEvent3["ThreadUpdate"] = 111] = "ThreadUpdate";
      AuditLogEvent3[AuditLogEvent3["ThreadDelete"] = 112] = "ThreadDelete";
      AuditLogEvent3[AuditLogEvent3["ApplicationCommandPermissionUpdate"] = 121] = "ApplicationCommandPermissionUpdate";
      AuditLogEvent3[AuditLogEvent3["SoundboardSoundCreate"] = 130] = "SoundboardSoundCreate";
      AuditLogEvent3[AuditLogEvent3["SoundboardSoundUpdate"] = 131] = "SoundboardSoundUpdate";
      AuditLogEvent3[AuditLogEvent3["SoundboardSoundDelete"] = 132] = "SoundboardSoundDelete";
      AuditLogEvent3[AuditLogEvent3["AutoModerationRuleCreate"] = 140] = "AutoModerationRuleCreate";
      AuditLogEvent3[AuditLogEvent3["AutoModerationRuleUpdate"] = 141] = "AutoModerationRuleUpdate";
      AuditLogEvent3[AuditLogEvent3["AutoModerationRuleDelete"] = 142] = "AutoModerationRuleDelete";
      AuditLogEvent3[AuditLogEvent3["AutoModerationBlockMessage"] = 143] = "AutoModerationBlockMessage";
      AuditLogEvent3[AuditLogEvent3["AutoModerationFlagToChannel"] = 144] = "AutoModerationFlagToChannel";
      AuditLogEvent3[AuditLogEvent3["AutoModerationUserCommunicationDisabled"] = 145] = "AutoModerationUserCommunicationDisabled";
      AuditLogEvent3[AuditLogEvent3["CreatorMonetizationRequestCreated"] = 150] = "CreatorMonetizationRequestCreated";
      AuditLogEvent3[AuditLogEvent3["CreatorMonetizationTermsAccepted"] = 151] = "CreatorMonetizationTermsAccepted";
      AuditLogEvent3[AuditLogEvent3["OnboardingPromptCreate"] = 163] = "OnboardingPromptCreate";
      AuditLogEvent3[AuditLogEvent3["OnboardingPromptUpdate"] = 164] = "OnboardingPromptUpdate";
      AuditLogEvent3[AuditLogEvent3["OnboardingPromptDelete"] = 165] = "OnboardingPromptDelete";
      AuditLogEvent3[AuditLogEvent3["OnboardingCreate"] = 166] = "OnboardingCreate";
      AuditLogEvent3[AuditLogEvent3["OnboardingUpdate"] = 167] = "OnboardingUpdate";
      AuditLogEvent3[AuditLogEvent3["HomeSettingsCreate"] = 190] = "HomeSettingsCreate";
      AuditLogEvent3[AuditLogEvent3["HomeSettingsUpdate"] = 191] = "HomeSettingsUpdate";
    })(AuditLogEvent2 || (exports.AuditLogEvent = AuditLogEvent2 = {}));
    var AuditLogOptionsType2;
    (function(AuditLogOptionsType3) {
      AuditLogOptionsType3["Role"] = "0";
      AuditLogOptionsType3["Member"] = "1";
    })(AuditLogOptionsType2 || (exports.AuditLogOptionsType = AuditLogOptionsType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/autoModeration.js
var require_autoModeration = __commonJS({
  "node_modules/discord-api-types/payloads/v10/autoModeration.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AutoModerationActionType = exports.AutoModerationRuleEventType = exports.AutoModerationRuleKeywordPresetType = exports.AutoModerationRuleTriggerType = void 0;
    var AutoModerationRuleTriggerType2;
    (function(AutoModerationRuleTriggerType3) {
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["Keyword"] = 1] = "Keyword";
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["Spam"] = 3] = "Spam";
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["KeywordPreset"] = 4] = "KeywordPreset";
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["MentionSpam"] = 5] = "MentionSpam";
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["MemberProfile"] = 6] = "MemberProfile";
    })(AutoModerationRuleTriggerType2 || (exports.AutoModerationRuleTriggerType = AutoModerationRuleTriggerType2 = {}));
    var AutoModerationRuleKeywordPresetType2;
    (function(AutoModerationRuleKeywordPresetType3) {
      AutoModerationRuleKeywordPresetType3[AutoModerationRuleKeywordPresetType3["Profanity"] = 1] = "Profanity";
      AutoModerationRuleKeywordPresetType3[AutoModerationRuleKeywordPresetType3["SexualContent"] = 2] = "SexualContent";
      AutoModerationRuleKeywordPresetType3[AutoModerationRuleKeywordPresetType3["Slurs"] = 3] = "Slurs";
    })(AutoModerationRuleKeywordPresetType2 || (exports.AutoModerationRuleKeywordPresetType = AutoModerationRuleKeywordPresetType2 = {}));
    var AutoModerationRuleEventType2;
    (function(AutoModerationRuleEventType3) {
      AutoModerationRuleEventType3[AutoModerationRuleEventType3["MessageSend"] = 1] = "MessageSend";
      AutoModerationRuleEventType3[AutoModerationRuleEventType3["MemberUpdate"] = 2] = "MemberUpdate";
    })(AutoModerationRuleEventType2 || (exports.AutoModerationRuleEventType = AutoModerationRuleEventType2 = {}));
    var AutoModerationActionType2;
    (function(AutoModerationActionType3) {
      AutoModerationActionType3[AutoModerationActionType3["BlockMessage"] = 1] = "BlockMessage";
      AutoModerationActionType3[AutoModerationActionType3["SendAlertMessage"] = 2] = "SendAlertMessage";
      AutoModerationActionType3[AutoModerationActionType3["Timeout"] = 3] = "Timeout";
      AutoModerationActionType3[AutoModerationActionType3["BlockMemberInteraction"] = 4] = "BlockMemberInteraction";
    })(AutoModerationActionType2 || (exports.AutoModerationActionType = AutoModerationActionType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/channel.js
var require_channel = __commonJS({
  "node_modules/discord-api-types/payloads/v10/channel.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChannelFlags = exports.SelectMenuDefaultValueType = exports.TextInputStyle = exports.ButtonStyle = exports.ComponentType = exports.AllowedMentionsTypes = exports.AttachmentFlags = exports.EmbedType = exports.ThreadMemberFlags = exports.ThreadAutoArchiveDuration = exports.OverwriteType = exports.MessageFlags = exports.MessageReferenceType = exports.MessageActivityType = exports.MessageType = exports.VideoQualityMode = exports.ChannelType = exports.ForumLayoutType = exports.SortOrderType = void 0;
    var SortOrderType2;
    (function(SortOrderType3) {
      SortOrderType3[SortOrderType3["LatestActivity"] = 0] = "LatestActivity";
      SortOrderType3[SortOrderType3["CreationDate"] = 1] = "CreationDate";
    })(SortOrderType2 || (exports.SortOrderType = SortOrderType2 = {}));
    var ForumLayoutType2;
    (function(ForumLayoutType3) {
      ForumLayoutType3[ForumLayoutType3["NotSet"] = 0] = "NotSet";
      ForumLayoutType3[ForumLayoutType3["ListView"] = 1] = "ListView";
      ForumLayoutType3[ForumLayoutType3["GalleryView"] = 2] = "GalleryView";
    })(ForumLayoutType2 || (exports.ForumLayoutType = ForumLayoutType2 = {}));
    var ChannelType2;
    (function(ChannelType3) {
      ChannelType3[ChannelType3["GuildText"] = 0] = "GuildText";
      ChannelType3[ChannelType3["DM"] = 1] = "DM";
      ChannelType3[ChannelType3["GuildVoice"] = 2] = "GuildVoice";
      ChannelType3[ChannelType3["GroupDM"] = 3] = "GroupDM";
      ChannelType3[ChannelType3["GuildCategory"] = 4] = "GuildCategory";
      ChannelType3[ChannelType3["GuildAnnouncement"] = 5] = "GuildAnnouncement";
      ChannelType3[ChannelType3["AnnouncementThread"] = 10] = "AnnouncementThread";
      ChannelType3[ChannelType3["PublicThread"] = 11] = "PublicThread";
      ChannelType3[ChannelType3["PrivateThread"] = 12] = "PrivateThread";
      ChannelType3[ChannelType3["GuildStageVoice"] = 13] = "GuildStageVoice";
      ChannelType3[ChannelType3["GuildDirectory"] = 14] = "GuildDirectory";
      ChannelType3[ChannelType3["GuildForum"] = 15] = "GuildForum";
      ChannelType3[ChannelType3["GuildMedia"] = 16] = "GuildMedia";
      ChannelType3[ChannelType3["GuildNews"] = 5] = "GuildNews";
      ChannelType3[ChannelType3["GuildNewsThread"] = 10] = "GuildNewsThread";
      ChannelType3[ChannelType3["GuildPublicThread"] = 11] = "GuildPublicThread";
      ChannelType3[ChannelType3["GuildPrivateThread"] = 12] = "GuildPrivateThread";
    })(ChannelType2 || (exports.ChannelType = ChannelType2 = {}));
    var VideoQualityMode2;
    (function(VideoQualityMode3) {
      VideoQualityMode3[VideoQualityMode3["Auto"] = 1] = "Auto";
      VideoQualityMode3[VideoQualityMode3["Full"] = 2] = "Full";
    })(VideoQualityMode2 || (exports.VideoQualityMode = VideoQualityMode2 = {}));
    var MessageType2;
    (function(MessageType3) {
      MessageType3[MessageType3["Default"] = 0] = "Default";
      MessageType3[MessageType3["RecipientAdd"] = 1] = "RecipientAdd";
      MessageType3[MessageType3["RecipientRemove"] = 2] = "RecipientRemove";
      MessageType3[MessageType3["Call"] = 3] = "Call";
      MessageType3[MessageType3["ChannelNameChange"] = 4] = "ChannelNameChange";
      MessageType3[MessageType3["ChannelIconChange"] = 5] = "ChannelIconChange";
      MessageType3[MessageType3["ChannelPinnedMessage"] = 6] = "ChannelPinnedMessage";
      MessageType3[MessageType3["UserJoin"] = 7] = "UserJoin";
      MessageType3[MessageType3["GuildBoost"] = 8] = "GuildBoost";
      MessageType3[MessageType3["GuildBoostTier1"] = 9] = "GuildBoostTier1";
      MessageType3[MessageType3["GuildBoostTier2"] = 10] = "GuildBoostTier2";
      MessageType3[MessageType3["GuildBoostTier3"] = 11] = "GuildBoostTier3";
      MessageType3[MessageType3["ChannelFollowAdd"] = 12] = "ChannelFollowAdd";
      MessageType3[MessageType3["GuildDiscoveryDisqualified"] = 14] = "GuildDiscoveryDisqualified";
      MessageType3[MessageType3["GuildDiscoveryRequalified"] = 15] = "GuildDiscoveryRequalified";
      MessageType3[MessageType3["GuildDiscoveryGracePeriodInitialWarning"] = 16] = "GuildDiscoveryGracePeriodInitialWarning";
      MessageType3[MessageType3["GuildDiscoveryGracePeriodFinalWarning"] = 17] = "GuildDiscoveryGracePeriodFinalWarning";
      MessageType3[MessageType3["ThreadCreated"] = 18] = "ThreadCreated";
      MessageType3[MessageType3["Reply"] = 19] = "Reply";
      MessageType3[MessageType3["ChatInputCommand"] = 20] = "ChatInputCommand";
      MessageType3[MessageType3["ThreadStarterMessage"] = 21] = "ThreadStarterMessage";
      MessageType3[MessageType3["GuildInviteReminder"] = 22] = "GuildInviteReminder";
      MessageType3[MessageType3["ContextMenuCommand"] = 23] = "ContextMenuCommand";
      MessageType3[MessageType3["AutoModerationAction"] = 24] = "AutoModerationAction";
      MessageType3[MessageType3["RoleSubscriptionPurchase"] = 25] = "RoleSubscriptionPurchase";
      MessageType3[MessageType3["InteractionPremiumUpsell"] = 26] = "InteractionPremiumUpsell";
      MessageType3[MessageType3["StageStart"] = 27] = "StageStart";
      MessageType3[MessageType3["StageEnd"] = 28] = "StageEnd";
      MessageType3[MessageType3["StageSpeaker"] = 29] = "StageSpeaker";
      MessageType3[MessageType3["StageRaiseHand"] = 30] = "StageRaiseHand";
      MessageType3[MessageType3["StageTopic"] = 31] = "StageTopic";
      MessageType3[MessageType3["GuildApplicationPremiumSubscription"] = 32] = "GuildApplicationPremiumSubscription";
      MessageType3[MessageType3["GuildIncidentAlertModeEnabled"] = 36] = "GuildIncidentAlertModeEnabled";
      MessageType3[MessageType3["GuildIncidentAlertModeDisabled"] = 37] = "GuildIncidentAlertModeDisabled";
      MessageType3[MessageType3["GuildIncidentReportRaid"] = 38] = "GuildIncidentReportRaid";
      MessageType3[MessageType3["GuildIncidentReportFalseAlarm"] = 39] = "GuildIncidentReportFalseAlarm";
      MessageType3[MessageType3["PurchaseNotification"] = 44] = "PurchaseNotification";
      MessageType3[MessageType3["PollResult"] = 46] = "PollResult";
    })(MessageType2 || (exports.MessageType = MessageType2 = {}));
    var MessageActivityType2;
    (function(MessageActivityType3) {
      MessageActivityType3[MessageActivityType3["Join"] = 1] = "Join";
      MessageActivityType3[MessageActivityType3["Spectate"] = 2] = "Spectate";
      MessageActivityType3[MessageActivityType3["Listen"] = 3] = "Listen";
      MessageActivityType3[MessageActivityType3["JoinRequest"] = 5] = "JoinRequest";
    })(MessageActivityType2 || (exports.MessageActivityType = MessageActivityType2 = {}));
    var MessageReferenceType2;
    (function(MessageReferenceType3) {
      MessageReferenceType3[MessageReferenceType3["Default"] = 0] = "Default";
      MessageReferenceType3[MessageReferenceType3["Forward"] = 1] = "Forward";
    })(MessageReferenceType2 || (exports.MessageReferenceType = MessageReferenceType2 = {}));
    var MessageFlags2;
    (function(MessageFlags3) {
      MessageFlags3[MessageFlags3["Crossposted"] = 1] = "Crossposted";
      MessageFlags3[MessageFlags3["IsCrosspost"] = 2] = "IsCrosspost";
      MessageFlags3[MessageFlags3["SuppressEmbeds"] = 4] = "SuppressEmbeds";
      MessageFlags3[MessageFlags3["SourceMessageDeleted"] = 8] = "SourceMessageDeleted";
      MessageFlags3[MessageFlags3["Urgent"] = 16] = "Urgent";
      MessageFlags3[MessageFlags3["HasThread"] = 32] = "HasThread";
      MessageFlags3[MessageFlags3["Ephemeral"] = 64] = "Ephemeral";
      MessageFlags3[MessageFlags3["Loading"] = 128] = "Loading";
      MessageFlags3[MessageFlags3["FailedToMentionSomeRolesInThread"] = 256] = "FailedToMentionSomeRolesInThread";
      MessageFlags3[MessageFlags3["ShouldShowLinkNotDiscordWarning"] = 1024] = "ShouldShowLinkNotDiscordWarning";
      MessageFlags3[MessageFlags3["SuppressNotifications"] = 4096] = "SuppressNotifications";
      MessageFlags3[MessageFlags3["IsVoiceMessage"] = 8192] = "IsVoiceMessage";
      MessageFlags3[MessageFlags3["HasSnapshot"] = 16384] = "HasSnapshot";
    })(MessageFlags2 || (exports.MessageFlags = MessageFlags2 = {}));
    var OverwriteType2;
    (function(OverwriteType3) {
      OverwriteType3[OverwriteType3["Role"] = 0] = "Role";
      OverwriteType3[OverwriteType3["Member"] = 1] = "Member";
    })(OverwriteType2 || (exports.OverwriteType = OverwriteType2 = {}));
    var ThreadAutoArchiveDuration2;
    (function(ThreadAutoArchiveDuration3) {
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["OneHour"] = 60] = "OneHour";
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["OneDay"] = 1440] = "OneDay";
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["ThreeDays"] = 4320] = "ThreeDays";
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["OneWeek"] = 10080] = "OneWeek";
    })(ThreadAutoArchiveDuration2 || (exports.ThreadAutoArchiveDuration = ThreadAutoArchiveDuration2 = {}));
    var ThreadMemberFlags2;
    (function(ThreadMemberFlags3) {
      ThreadMemberFlags3[ThreadMemberFlags3["HasInteracted"] = 1] = "HasInteracted";
      ThreadMemberFlags3[ThreadMemberFlags3["AllMessages"] = 2] = "AllMessages";
      ThreadMemberFlags3[ThreadMemberFlags3["OnlyMentions"] = 4] = "OnlyMentions";
      ThreadMemberFlags3[ThreadMemberFlags3["NoMessages"] = 8] = "NoMessages";
    })(ThreadMemberFlags2 || (exports.ThreadMemberFlags = ThreadMemberFlags2 = {}));
    var EmbedType2;
    (function(EmbedType3) {
      EmbedType3["Rich"] = "rich";
      EmbedType3["Image"] = "image";
      EmbedType3["Video"] = "video";
      EmbedType3["GIFV"] = "gifv";
      EmbedType3["Article"] = "article";
      EmbedType3["Link"] = "link";
      EmbedType3["AutoModerationMessage"] = "auto_moderation_message";
      EmbedType3["PollResult"] = "poll_result";
    })(EmbedType2 || (exports.EmbedType = EmbedType2 = {}));
    var AttachmentFlags2;
    (function(AttachmentFlags3) {
      AttachmentFlags3[AttachmentFlags3["IsRemix"] = 4] = "IsRemix";
    })(AttachmentFlags2 || (exports.AttachmentFlags = AttachmentFlags2 = {}));
    var AllowedMentionsTypes2;
    (function(AllowedMentionsTypes3) {
      AllowedMentionsTypes3["Everyone"] = "everyone";
      AllowedMentionsTypes3["Role"] = "roles";
      AllowedMentionsTypes3["User"] = "users";
    })(AllowedMentionsTypes2 || (exports.AllowedMentionsTypes = AllowedMentionsTypes2 = {}));
    var ComponentType2;
    (function(ComponentType3) {
      ComponentType3[ComponentType3["ActionRow"] = 1] = "ActionRow";
      ComponentType3[ComponentType3["Button"] = 2] = "Button";
      ComponentType3[ComponentType3["StringSelect"] = 3] = "StringSelect";
      ComponentType3[ComponentType3["TextInput"] = 4] = "TextInput";
      ComponentType3[ComponentType3["UserSelect"] = 5] = "UserSelect";
      ComponentType3[ComponentType3["RoleSelect"] = 6] = "RoleSelect";
      ComponentType3[ComponentType3["MentionableSelect"] = 7] = "MentionableSelect";
      ComponentType3[ComponentType3["ChannelSelect"] = 8] = "ChannelSelect";
      ComponentType3[ComponentType3["SelectMenu"] = 3] = "SelectMenu";
    })(ComponentType2 || (exports.ComponentType = ComponentType2 = {}));
    var ButtonStyle2;
    (function(ButtonStyle3) {
      ButtonStyle3[ButtonStyle3["Primary"] = 1] = "Primary";
      ButtonStyle3[ButtonStyle3["Secondary"] = 2] = "Secondary";
      ButtonStyle3[ButtonStyle3["Success"] = 3] = "Success";
      ButtonStyle3[ButtonStyle3["Danger"] = 4] = "Danger";
      ButtonStyle3[ButtonStyle3["Link"] = 5] = "Link";
      ButtonStyle3[ButtonStyle3["Premium"] = 6] = "Premium";
    })(ButtonStyle2 || (exports.ButtonStyle = ButtonStyle2 = {}));
    var TextInputStyle2;
    (function(TextInputStyle3) {
      TextInputStyle3[TextInputStyle3["Short"] = 1] = "Short";
      TextInputStyle3[TextInputStyle3["Paragraph"] = 2] = "Paragraph";
    })(TextInputStyle2 || (exports.TextInputStyle = TextInputStyle2 = {}));
    var SelectMenuDefaultValueType2;
    (function(SelectMenuDefaultValueType3) {
      SelectMenuDefaultValueType3["Channel"] = "channel";
      SelectMenuDefaultValueType3["Role"] = "role";
      SelectMenuDefaultValueType3["User"] = "user";
    })(SelectMenuDefaultValueType2 || (exports.SelectMenuDefaultValueType = SelectMenuDefaultValueType2 = {}));
    var ChannelFlags2;
    (function(ChannelFlags3) {
      ChannelFlags3[ChannelFlags3["GuildFeedRemoved"] = 1] = "GuildFeedRemoved";
      ChannelFlags3[ChannelFlags3["Pinned"] = 2] = "Pinned";
      ChannelFlags3[ChannelFlags3["ActiveChannelsRemoved"] = 4] = "ActiveChannelsRemoved";
      ChannelFlags3[ChannelFlags3["RequireTag"] = 16] = "RequireTag";
      ChannelFlags3[ChannelFlags3["IsSpam"] = 32] = "IsSpam";
      ChannelFlags3[ChannelFlags3["IsGuildResourceChannel"] = 128] = "IsGuildResourceChannel";
      ChannelFlags3[ChannelFlags3["ClydeAI"] = 256] = "ClydeAI";
      ChannelFlags3[ChannelFlags3["IsScheduledForDeletion"] = 512] = "IsScheduledForDeletion";
      ChannelFlags3[ChannelFlags3["HideMediaDownloadOptions"] = 32768] = "HideMediaDownloadOptions";
    })(ChannelFlags2 || (exports.ChannelFlags = ChannelFlags2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/emoji.js
var require_emoji = __commonJS({
  "node_modules/discord-api-types/payloads/v10/emoji.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/gateway.js
var require_gateway = __commonJS({
  "node_modules/discord-api-types/payloads/v10/gateway.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ActivityFlags = exports.ActivityType = exports.ActivityPlatform = exports.PresenceUpdateStatus = void 0;
    var PresenceUpdateStatus2;
    (function(PresenceUpdateStatus3) {
      PresenceUpdateStatus3["Online"] = "online";
      PresenceUpdateStatus3["DoNotDisturb"] = "dnd";
      PresenceUpdateStatus3["Idle"] = "idle";
      PresenceUpdateStatus3["Invisible"] = "invisible";
      PresenceUpdateStatus3["Offline"] = "offline";
    })(PresenceUpdateStatus2 || (exports.PresenceUpdateStatus = PresenceUpdateStatus2 = {}));
    var ActivityPlatform2;
    (function(ActivityPlatform3) {
      ActivityPlatform3["Desktop"] = "desktop";
      ActivityPlatform3["Xbox"] = "xbox";
      ActivityPlatform3["Samsung"] = "samsung";
      ActivityPlatform3["IOS"] = "ios";
      ActivityPlatform3["Android"] = "android";
      ActivityPlatform3["Embedded"] = "embedded";
      ActivityPlatform3["PS4"] = "ps4";
      ActivityPlatform3["PS5"] = "ps5";
    })(ActivityPlatform2 || (exports.ActivityPlatform = ActivityPlatform2 = {}));
    var ActivityType2;
    (function(ActivityType3) {
      ActivityType3[ActivityType3["Playing"] = 0] = "Playing";
      ActivityType3[ActivityType3["Streaming"] = 1] = "Streaming";
      ActivityType3[ActivityType3["Listening"] = 2] = "Listening";
      ActivityType3[ActivityType3["Watching"] = 3] = "Watching";
      ActivityType3[ActivityType3["Custom"] = 4] = "Custom";
      ActivityType3[ActivityType3["Competing"] = 5] = "Competing";
    })(ActivityType2 || (exports.ActivityType = ActivityType2 = {}));
    var ActivityFlags2;
    (function(ActivityFlags3) {
      ActivityFlags3[ActivityFlags3["Instance"] = 1] = "Instance";
      ActivityFlags3[ActivityFlags3["Join"] = 2] = "Join";
      ActivityFlags3[ActivityFlags3["Spectate"] = 4] = "Spectate";
      ActivityFlags3[ActivityFlags3["JoinRequest"] = 8] = "JoinRequest";
      ActivityFlags3[ActivityFlags3["Sync"] = 16] = "Sync";
      ActivityFlags3[ActivityFlags3["Play"] = 32] = "Play";
      ActivityFlags3[ActivityFlags3["PartyPrivacyFriends"] = 64] = "PartyPrivacyFriends";
      ActivityFlags3[ActivityFlags3["PartyPrivacyVoiceChannel"] = 128] = "PartyPrivacyVoiceChannel";
      ActivityFlags3[ActivityFlags3["Embedded"] = 256] = "Embedded";
    })(ActivityFlags2 || (exports.ActivityFlags = ActivityFlags2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/guild.js
var require_guild = __commonJS({
  "node_modules/discord-api-types/payloads/v10/guild.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GuildOnboardingPromptType = exports.GuildOnboardingMode = exports.MembershipScreeningFieldType = exports.GuildWidgetStyle = exports.IntegrationExpireBehavior = exports.GuildMemberFlags = exports.GuildFeature = exports.GuildSystemChannelFlags = exports.GuildHubType = exports.GuildPremiumTier = exports.GuildVerificationLevel = exports.GuildNSFWLevel = exports.GuildMFALevel = exports.GuildExplicitContentFilter = exports.GuildDefaultMessageNotifications = void 0;
    var GuildDefaultMessageNotifications2;
    (function(GuildDefaultMessageNotifications3) {
      GuildDefaultMessageNotifications3[GuildDefaultMessageNotifications3["AllMessages"] = 0] = "AllMessages";
      GuildDefaultMessageNotifications3[GuildDefaultMessageNotifications3["OnlyMentions"] = 1] = "OnlyMentions";
    })(GuildDefaultMessageNotifications2 || (exports.GuildDefaultMessageNotifications = GuildDefaultMessageNotifications2 = {}));
    var GuildExplicitContentFilter2;
    (function(GuildExplicitContentFilter3) {
      GuildExplicitContentFilter3[GuildExplicitContentFilter3["Disabled"] = 0] = "Disabled";
      GuildExplicitContentFilter3[GuildExplicitContentFilter3["MembersWithoutRoles"] = 1] = "MembersWithoutRoles";
      GuildExplicitContentFilter3[GuildExplicitContentFilter3["AllMembers"] = 2] = "AllMembers";
    })(GuildExplicitContentFilter2 || (exports.GuildExplicitContentFilter = GuildExplicitContentFilter2 = {}));
    var GuildMFALevel2;
    (function(GuildMFALevel3) {
      GuildMFALevel3[GuildMFALevel3["None"] = 0] = "None";
      GuildMFALevel3[GuildMFALevel3["Elevated"] = 1] = "Elevated";
    })(GuildMFALevel2 || (exports.GuildMFALevel = GuildMFALevel2 = {}));
    var GuildNSFWLevel2;
    (function(GuildNSFWLevel3) {
      GuildNSFWLevel3[GuildNSFWLevel3["Default"] = 0] = "Default";
      GuildNSFWLevel3[GuildNSFWLevel3["Explicit"] = 1] = "Explicit";
      GuildNSFWLevel3[GuildNSFWLevel3["Safe"] = 2] = "Safe";
      GuildNSFWLevel3[GuildNSFWLevel3["AgeRestricted"] = 3] = "AgeRestricted";
    })(GuildNSFWLevel2 || (exports.GuildNSFWLevel = GuildNSFWLevel2 = {}));
    var GuildVerificationLevel2;
    (function(GuildVerificationLevel3) {
      GuildVerificationLevel3[GuildVerificationLevel3["None"] = 0] = "None";
      GuildVerificationLevel3[GuildVerificationLevel3["Low"] = 1] = "Low";
      GuildVerificationLevel3[GuildVerificationLevel3["Medium"] = 2] = "Medium";
      GuildVerificationLevel3[GuildVerificationLevel3["High"] = 3] = "High";
      GuildVerificationLevel3[GuildVerificationLevel3["VeryHigh"] = 4] = "VeryHigh";
    })(GuildVerificationLevel2 || (exports.GuildVerificationLevel = GuildVerificationLevel2 = {}));
    var GuildPremiumTier2;
    (function(GuildPremiumTier3) {
      GuildPremiumTier3[GuildPremiumTier3["None"] = 0] = "None";
      GuildPremiumTier3[GuildPremiumTier3["Tier1"] = 1] = "Tier1";
      GuildPremiumTier3[GuildPremiumTier3["Tier2"] = 2] = "Tier2";
      GuildPremiumTier3[GuildPremiumTier3["Tier3"] = 3] = "Tier3";
    })(GuildPremiumTier2 || (exports.GuildPremiumTier = GuildPremiumTier2 = {}));
    var GuildHubType2;
    (function(GuildHubType3) {
      GuildHubType3[GuildHubType3["Default"] = 0] = "Default";
      GuildHubType3[GuildHubType3["HighSchool"] = 1] = "HighSchool";
      GuildHubType3[GuildHubType3["College"] = 2] = "College";
    })(GuildHubType2 || (exports.GuildHubType = GuildHubType2 = {}));
    var GuildSystemChannelFlags2;
    (function(GuildSystemChannelFlags3) {
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressJoinNotifications"] = 1] = "SuppressJoinNotifications";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressPremiumSubscriptions"] = 2] = "SuppressPremiumSubscriptions";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressGuildReminderNotifications"] = 4] = "SuppressGuildReminderNotifications";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressJoinNotificationReplies"] = 8] = "SuppressJoinNotificationReplies";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressRoleSubscriptionPurchaseNotifications"] = 16] = "SuppressRoleSubscriptionPurchaseNotifications";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressRoleSubscriptionPurchaseNotificationReplies"] = 32] = "SuppressRoleSubscriptionPurchaseNotificationReplies";
    })(GuildSystemChannelFlags2 || (exports.GuildSystemChannelFlags = GuildSystemChannelFlags2 = {}));
    var GuildFeature2;
    (function(GuildFeature3) {
      GuildFeature3["AnimatedBanner"] = "ANIMATED_BANNER";
      GuildFeature3["AnimatedIcon"] = "ANIMATED_ICON";
      GuildFeature3["ApplicationCommandPermissionsV2"] = "APPLICATION_COMMAND_PERMISSIONS_V2";
      GuildFeature3["AutoModeration"] = "AUTO_MODERATION";
      GuildFeature3["Banner"] = "BANNER";
      GuildFeature3["Community"] = "COMMUNITY";
      GuildFeature3["CreatorMonetizableProvisional"] = "CREATOR_MONETIZABLE_PROVISIONAL";
      GuildFeature3["CreatorStorePage"] = "CREATOR_STORE_PAGE";
      GuildFeature3["DeveloperSupportServer"] = "DEVELOPER_SUPPORT_SERVER";
      GuildFeature3["Discoverable"] = "DISCOVERABLE";
      GuildFeature3["Featurable"] = "FEATURABLE";
      GuildFeature3["HasDirectoryEntry"] = "HAS_DIRECTORY_ENTRY";
      GuildFeature3["Hub"] = "HUB";
      GuildFeature3["InvitesDisabled"] = "INVITES_DISABLED";
      GuildFeature3["InviteSplash"] = "INVITE_SPLASH";
      GuildFeature3["LinkedToHub"] = "LINKED_TO_HUB";
      GuildFeature3["MemberVerificationGateEnabled"] = "MEMBER_VERIFICATION_GATE_ENABLED";
      GuildFeature3["MoreSoundboard"] = "MORE_SOUNDBOARD";
      GuildFeature3["MonetizationEnabled"] = "MONETIZATION_ENABLED";
      GuildFeature3["MoreStickers"] = "MORE_STICKERS";
      GuildFeature3["News"] = "NEWS";
      GuildFeature3["Partnered"] = "PARTNERED";
      GuildFeature3["PreviewEnabled"] = "PREVIEW_ENABLED";
      GuildFeature3["PrivateThreads"] = "PRIVATE_THREADS";
      GuildFeature3["RaidAlertsDisabled"] = "RAID_ALERTS_DISABLED";
      GuildFeature3["RelayEnabled"] = "RELAY_ENABLED";
      GuildFeature3["RoleIcons"] = "ROLE_ICONS";
      GuildFeature3["RoleSubscriptionsAvailableForPurchase"] = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE";
      GuildFeature3["RoleSubscriptionsEnabled"] = "ROLE_SUBSCRIPTIONS_ENABLED";
      GuildFeature3["Soundboard"] = "SOUNDBOARD";
      GuildFeature3["TicketedEventsEnabled"] = "TICKETED_EVENTS_ENABLED";
      GuildFeature3["VanityURL"] = "VANITY_URL";
      GuildFeature3["Verified"] = "VERIFIED";
      GuildFeature3["VIPRegions"] = "VIP_REGIONS";
      GuildFeature3["WelcomeScreenEnabled"] = "WELCOME_SCREEN_ENABLED";
    })(GuildFeature2 || (exports.GuildFeature = GuildFeature2 = {}));
    var GuildMemberFlags2;
    (function(GuildMemberFlags3) {
      GuildMemberFlags3[GuildMemberFlags3["DidRejoin"] = 1] = "DidRejoin";
      GuildMemberFlags3[GuildMemberFlags3["CompletedOnboarding"] = 2] = "CompletedOnboarding";
      GuildMemberFlags3[GuildMemberFlags3["BypassesVerification"] = 4] = "BypassesVerification";
      GuildMemberFlags3[GuildMemberFlags3["StartedOnboarding"] = 8] = "StartedOnboarding";
      GuildMemberFlags3[GuildMemberFlags3["IsGuest"] = 16] = "IsGuest";
      GuildMemberFlags3[GuildMemberFlags3["StartedHomeActions"] = 32] = "StartedHomeActions";
      GuildMemberFlags3[GuildMemberFlags3["CompletedHomeActions"] = 64] = "CompletedHomeActions";
      GuildMemberFlags3[GuildMemberFlags3["AutomodQuarantinedUsernameOrGuildNickname"] = 128] = "AutomodQuarantinedUsernameOrGuildNickname";
      GuildMemberFlags3[GuildMemberFlags3["AutomodQuarantinedBio"] = 256] = "AutomodQuarantinedBio";
      GuildMemberFlags3[GuildMemberFlags3["DmSettingsUpsellAcknowledged"] = 512] = "DmSettingsUpsellAcknowledged";
    })(GuildMemberFlags2 || (exports.GuildMemberFlags = GuildMemberFlags2 = {}));
    var IntegrationExpireBehavior2;
    (function(IntegrationExpireBehavior3) {
      IntegrationExpireBehavior3[IntegrationExpireBehavior3["RemoveRole"] = 0] = "RemoveRole";
      IntegrationExpireBehavior3[IntegrationExpireBehavior3["Kick"] = 1] = "Kick";
    })(IntegrationExpireBehavior2 || (exports.IntegrationExpireBehavior = IntegrationExpireBehavior2 = {}));
    var GuildWidgetStyle2;
    (function(GuildWidgetStyle3) {
      GuildWidgetStyle3["Shield"] = "shield";
      GuildWidgetStyle3["Banner1"] = "banner1";
      GuildWidgetStyle3["Banner2"] = "banner2";
      GuildWidgetStyle3["Banner3"] = "banner3";
      GuildWidgetStyle3["Banner4"] = "banner4";
    })(GuildWidgetStyle2 || (exports.GuildWidgetStyle = GuildWidgetStyle2 = {}));
    var MembershipScreeningFieldType2;
    (function(MembershipScreeningFieldType3) {
      MembershipScreeningFieldType3["Terms"] = "TERMS";
    })(MembershipScreeningFieldType2 || (exports.MembershipScreeningFieldType = MembershipScreeningFieldType2 = {}));
    var GuildOnboardingMode2;
    (function(GuildOnboardingMode3) {
      GuildOnboardingMode3[GuildOnboardingMode3["OnboardingDefault"] = 0] = "OnboardingDefault";
      GuildOnboardingMode3[GuildOnboardingMode3["OnboardingAdvanced"] = 1] = "OnboardingAdvanced";
    })(GuildOnboardingMode2 || (exports.GuildOnboardingMode = GuildOnboardingMode2 = {}));
    var GuildOnboardingPromptType2;
    (function(GuildOnboardingPromptType3) {
      GuildOnboardingPromptType3[GuildOnboardingPromptType3["MultipleChoice"] = 0] = "MultipleChoice";
      GuildOnboardingPromptType3[GuildOnboardingPromptType3["Dropdown"] = 1] = "Dropdown";
    })(GuildOnboardingPromptType2 || (exports.GuildOnboardingPromptType = GuildOnboardingPromptType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js
var require_guildScheduledEvent = __commonJS({
  "node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GuildScheduledEventPrivacyLevel = exports.GuildScheduledEventStatus = exports.GuildScheduledEventEntityType = exports.GuildScheduledEventRecurrenceRuleMonth = exports.GuildScheduledEventRecurrenceRuleWeekday = exports.GuildScheduledEventRecurrenceRuleFrequency = void 0;
    var GuildScheduledEventRecurrenceRuleFrequency2;
    (function(GuildScheduledEventRecurrenceRuleFrequency3) {
      GuildScheduledEventRecurrenceRuleFrequency3[GuildScheduledEventRecurrenceRuleFrequency3["Yearly"] = 0] = "Yearly";
      GuildScheduledEventRecurrenceRuleFrequency3[GuildScheduledEventRecurrenceRuleFrequency3["Monthly"] = 1] = "Monthly";
      GuildScheduledEventRecurrenceRuleFrequency3[GuildScheduledEventRecurrenceRuleFrequency3["Weekly"] = 2] = "Weekly";
      GuildScheduledEventRecurrenceRuleFrequency3[GuildScheduledEventRecurrenceRuleFrequency3["Daily"] = 3] = "Daily";
    })(GuildScheduledEventRecurrenceRuleFrequency2 || (exports.GuildScheduledEventRecurrenceRuleFrequency = GuildScheduledEventRecurrenceRuleFrequency2 = {}));
    var GuildScheduledEventRecurrenceRuleWeekday2;
    (function(GuildScheduledEventRecurrenceRuleWeekday3) {
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Monday"] = 0] = "Monday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Tuesday"] = 1] = "Tuesday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Wednesday"] = 2] = "Wednesday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Thursday"] = 3] = "Thursday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Friday"] = 4] = "Friday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Saturday"] = 5] = "Saturday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Sunday"] = 6] = "Sunday";
    })(GuildScheduledEventRecurrenceRuleWeekday2 || (exports.GuildScheduledEventRecurrenceRuleWeekday = GuildScheduledEventRecurrenceRuleWeekday2 = {}));
    var GuildScheduledEventRecurrenceRuleMonth2;
    (function(GuildScheduledEventRecurrenceRuleMonth3) {
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["January"] = 1] = "January";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["February"] = 2] = "February";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["March"] = 3] = "March";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["April"] = 4] = "April";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["May"] = 5] = "May";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["June"] = 6] = "June";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["July"] = 7] = "July";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["August"] = 8] = "August";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["September"] = 9] = "September";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["October"] = 10] = "October";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["November"] = 11] = "November";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["December"] = 12] = "December";
    })(GuildScheduledEventRecurrenceRuleMonth2 || (exports.GuildScheduledEventRecurrenceRuleMonth = GuildScheduledEventRecurrenceRuleMonth2 = {}));
    var GuildScheduledEventEntityType2;
    (function(GuildScheduledEventEntityType3) {
      GuildScheduledEventEntityType3[GuildScheduledEventEntityType3["StageInstance"] = 1] = "StageInstance";
      GuildScheduledEventEntityType3[GuildScheduledEventEntityType3["Voice"] = 2] = "Voice";
      GuildScheduledEventEntityType3[GuildScheduledEventEntityType3["External"] = 3] = "External";
    })(GuildScheduledEventEntityType2 || (exports.GuildScheduledEventEntityType = GuildScheduledEventEntityType2 = {}));
    var GuildScheduledEventStatus2;
    (function(GuildScheduledEventStatus3) {
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Scheduled"] = 1] = "Scheduled";
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Active"] = 2] = "Active";
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Completed"] = 3] = "Completed";
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Canceled"] = 4] = "Canceled";
    })(GuildScheduledEventStatus2 || (exports.GuildScheduledEventStatus = GuildScheduledEventStatus2 = {}));
    var GuildScheduledEventPrivacyLevel2;
    (function(GuildScheduledEventPrivacyLevel3) {
      GuildScheduledEventPrivacyLevel3[GuildScheduledEventPrivacyLevel3["GuildOnly"] = 2] = "GuildOnly";
    })(GuildScheduledEventPrivacyLevel2 || (exports.GuildScheduledEventPrivacyLevel = GuildScheduledEventPrivacyLevel2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/attachment.js
var require_attachment = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/attachment.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.js
var require_base = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/boolean.js
var require_boolean = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/boolean.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/channel.js
var require_channel2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/channel.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/integer.js
var require_integer = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/integer.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/mentionable.js
var require_mentionable = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/mentionable.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/number.js
var require_number = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/number.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/role.js
var require_role = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/role.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js
var require_shared = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplicationCommandOptionType = void 0;
    var ApplicationCommandOptionType2;
    (function(ApplicationCommandOptionType3) {
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Subcommand"] = 1] = "Subcommand";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["SubcommandGroup"] = 2] = "SubcommandGroup";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["String"] = 3] = "String";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Integer"] = 4] = "Integer";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Boolean"] = 5] = "Boolean";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["User"] = 6] = "User";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Channel"] = 7] = "Channel";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Role"] = 8] = "Role";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Mentionable"] = 9] = "Mentionable";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Number"] = 10] = "Number";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Attachment"] = 11] = "Attachment";
    })(ApplicationCommandOptionType2 || (exports.ApplicationCommandOptionType = ApplicationCommandOptionType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/string.js
var require_string = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/string.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommand.js
var require_subcommand = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommand.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommandGroup.js
var require_subcommandGroup = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommandGroup.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/user.js
var require_user = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/user.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js
var require_chatInput = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_attachment(), exports);
    __exportStar(require_base(), exports);
    __exportStar(require_boolean(), exports);
    __exportStar(require_channel2(), exports);
    __exportStar(require_integer(), exports);
    __exportStar(require_mentionable(), exports);
    __exportStar(require_number(), exports);
    __exportStar(require_role(), exports);
    __exportStar(require_shared(), exports);
    __exportStar(require_string(), exports);
    __exportStar(require_subcommand(), exports);
    __exportStar(require_subcommandGroup(), exports);
    __exportStar(require_user(), exports);
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.js
var require_contextMenu = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js
var require_permissions = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.APIApplicationCommandPermissionsConstant = exports.ApplicationCommandPermissionType = void 0;
    var ApplicationCommandPermissionType2;
    (function(ApplicationCommandPermissionType3) {
      ApplicationCommandPermissionType3[ApplicationCommandPermissionType3["Role"] = 1] = "Role";
      ApplicationCommandPermissionType3[ApplicationCommandPermissionType3["User"] = 2] = "User";
      ApplicationCommandPermissionType3[ApplicationCommandPermissionType3["Channel"] = 3] = "Channel";
    })(ApplicationCommandPermissionType2 || (exports.ApplicationCommandPermissionType = ApplicationCommandPermissionType2 = {}));
    exports.APIApplicationCommandPermissionsConstant = {
      // eslint-disable-next-line unicorn/prefer-native-coercion-functions
      Everyone: /* @__PURE__ */ __name((guildId) => String(guildId), "Everyone"),
      AllChannels: /* @__PURE__ */ __name((guildId) => String(BigInt(guildId) - 1n), "AllChannels")
    };
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/entryPoint.js
var require_entryPoint = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/entryPoint.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.js
var require_internals = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/internals.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js
var require_applicationCommands = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EntryPointCommandHandlerType = exports.InteractionContextType = exports.ApplicationIntegrationType = exports.ApplicationCommandType = void 0;
    __exportStar(require_chatInput(), exports);
    __exportStar(require_contextMenu(), exports);
    __exportStar(require_permissions(), exports);
    __exportStar(require_entryPoint(), exports);
    __exportStar(require_internals(), exports);
    var ApplicationCommandType2;
    (function(ApplicationCommandType3) {
      ApplicationCommandType3[ApplicationCommandType3["ChatInput"] = 1] = "ChatInput";
      ApplicationCommandType3[ApplicationCommandType3["User"] = 2] = "User";
      ApplicationCommandType3[ApplicationCommandType3["Message"] = 3] = "Message";
      ApplicationCommandType3[ApplicationCommandType3["PrimaryEntryPoint"] = 4] = "PrimaryEntryPoint";
    })(ApplicationCommandType2 || (exports.ApplicationCommandType = ApplicationCommandType2 = {}));
    var ApplicationIntegrationType2;
    (function(ApplicationIntegrationType3) {
      ApplicationIntegrationType3[ApplicationIntegrationType3["GuildInstall"] = 0] = "GuildInstall";
      ApplicationIntegrationType3[ApplicationIntegrationType3["UserInstall"] = 1] = "UserInstall";
    })(ApplicationIntegrationType2 || (exports.ApplicationIntegrationType = ApplicationIntegrationType2 = {}));
    var InteractionContextType2;
    (function(InteractionContextType3) {
      InteractionContextType3[InteractionContextType3["Guild"] = 0] = "Guild";
      InteractionContextType3[InteractionContextType3["BotDM"] = 1] = "BotDM";
      InteractionContextType3[InteractionContextType3["PrivateChannel"] = 2] = "PrivateChannel";
    })(InteractionContextType2 || (exports.InteractionContextType = InteractionContextType2 = {}));
    var EntryPointCommandHandlerType2;
    (function(EntryPointCommandHandlerType3) {
      EntryPointCommandHandlerType3[EntryPointCommandHandlerType3["AppHandler"] = 1] = "AppHandler";
      EntryPointCommandHandlerType3[EntryPointCommandHandlerType3["DiscordLaunchActivity"] = 2] = "DiscordLaunchActivity";
    })(EntryPointCommandHandlerType2 || (exports.EntryPointCommandHandlerType = EntryPointCommandHandlerType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/autocomplete.js
var require_autocomplete = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/autocomplete.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/base.js
var require_base2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/base.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/messageComponents.js
var require_messageComponents = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/messageComponents.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/modalSubmit.js
var require_modalSubmit = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/modalSubmit.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/ping.js
var require_ping = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/ping.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/responses.js
var require_responses = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/responses.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InteractionResponseType = exports.InteractionType = void 0;
    var InteractionType2;
    (function(InteractionType3) {
      InteractionType3[InteractionType3["Ping"] = 1] = "Ping";
      InteractionType3[InteractionType3["ApplicationCommand"] = 2] = "ApplicationCommand";
      InteractionType3[InteractionType3["MessageComponent"] = 3] = "MessageComponent";
      InteractionType3[InteractionType3["ApplicationCommandAutocomplete"] = 4] = "ApplicationCommandAutocomplete";
      InteractionType3[InteractionType3["ModalSubmit"] = 5] = "ModalSubmit";
    })(InteractionType2 || (exports.InteractionType = InteractionType2 = {}));
    var InteractionResponseType2;
    (function(InteractionResponseType3) {
      InteractionResponseType3[InteractionResponseType3["Pong"] = 1] = "Pong";
      InteractionResponseType3[InteractionResponseType3["ChannelMessageWithSource"] = 4] = "ChannelMessageWithSource";
      InteractionResponseType3[InteractionResponseType3["DeferredChannelMessageWithSource"] = 5] = "DeferredChannelMessageWithSource";
      InteractionResponseType3[InteractionResponseType3["DeferredMessageUpdate"] = 6] = "DeferredMessageUpdate";
      InteractionResponseType3[InteractionResponseType3["UpdateMessage"] = 7] = "UpdateMessage";
      InteractionResponseType3[InteractionResponseType3["ApplicationCommandAutocompleteResult"] = 8] = "ApplicationCommandAutocompleteResult";
      InteractionResponseType3[InteractionResponseType3["Modal"] = 9] = "Modal";
      InteractionResponseType3[InteractionResponseType3["PremiumRequired"] = 10] = "PremiumRequired";
      InteractionResponseType3[InteractionResponseType3["LaunchActivity"] = 12] = "LaunchActivity";
    })(InteractionResponseType2 || (exports.InteractionResponseType = InteractionResponseType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/interactions.js
var require_interactions = __commonJS({
  "node_modules/discord-api-types/payloads/v10/interactions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_applicationCommands(), exports);
    __exportStar(require_autocomplete(), exports);
    __exportStar(require_base2(), exports);
    __exportStar(require_messageComponents(), exports);
    __exportStar(require_modalSubmit(), exports);
    __exportStar(require_ping(), exports);
    __exportStar(require_responses(), exports);
  }
});

// node_modules/discord-api-types/payloads/v10/invite.js
var require_invite = __commonJS({
  "node_modules/discord-api-types/payloads/v10/invite.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InviteTargetType = exports.InviteType = void 0;
    var InviteType2;
    (function(InviteType3) {
      InviteType3[InviteType3["Guild"] = 0] = "Guild";
      InviteType3[InviteType3["GroupDM"] = 1] = "GroupDM";
      InviteType3[InviteType3["Friend"] = 2] = "Friend";
    })(InviteType2 || (exports.InviteType = InviteType2 = {}));
    var InviteTargetType2;
    (function(InviteTargetType3) {
      InviteTargetType3[InviteTargetType3["Stream"] = 1] = "Stream";
      InviteTargetType3[InviteTargetType3["EmbeddedApplication"] = 2] = "EmbeddedApplication";
    })(InviteTargetType2 || (exports.InviteTargetType = InviteTargetType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/monetization.js
var require_monetization = __commonJS({
  "node_modules/discord-api-types/payloads/v10/monetization.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionStatus = exports.SKUType = exports.SKUFlags = exports.EntitlementType = void 0;
    var EntitlementType2;
    (function(EntitlementType3) {
      EntitlementType3[EntitlementType3["Purchase"] = 1] = "Purchase";
      EntitlementType3[EntitlementType3["PremiumSubscription"] = 2] = "PremiumSubscription";
      EntitlementType3[EntitlementType3["DeveloperGift"] = 3] = "DeveloperGift";
      EntitlementType3[EntitlementType3["TestModePurchase"] = 4] = "TestModePurchase";
      EntitlementType3[EntitlementType3["FreePurchase"] = 5] = "FreePurchase";
      EntitlementType3[EntitlementType3["UserGift"] = 6] = "UserGift";
      EntitlementType3[EntitlementType3["PremiumPurchase"] = 7] = "PremiumPurchase";
      EntitlementType3[EntitlementType3["ApplicationSubscription"] = 8] = "ApplicationSubscription";
    })(EntitlementType2 || (exports.EntitlementType = EntitlementType2 = {}));
    var SKUFlags2;
    (function(SKUFlags3) {
      SKUFlags3[SKUFlags3["Available"] = 4] = "Available";
      SKUFlags3[SKUFlags3["GuildSubscription"] = 128] = "GuildSubscription";
      SKUFlags3[SKUFlags3["UserSubscription"] = 256] = "UserSubscription";
    })(SKUFlags2 || (exports.SKUFlags = SKUFlags2 = {}));
    var SKUType2;
    (function(SKUType3) {
      SKUType3[SKUType3["Durable"] = 2] = "Durable";
      SKUType3[SKUType3["Consumable"] = 3] = "Consumable";
      SKUType3[SKUType3["Subscription"] = 5] = "Subscription";
      SKUType3[SKUType3["SubscriptionGroup"] = 6] = "SubscriptionGroup";
    })(SKUType2 || (exports.SKUType = SKUType2 = {}));
    var SubscriptionStatus2;
    (function(SubscriptionStatus3) {
      SubscriptionStatus3[SubscriptionStatus3["Active"] = 0] = "Active";
      SubscriptionStatus3[SubscriptionStatus3["Ending"] = 1] = "Ending";
      SubscriptionStatus3[SubscriptionStatus3["Inactive"] = 2] = "Inactive";
    })(SubscriptionStatus2 || (exports.SubscriptionStatus = SubscriptionStatus2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/oauth2.js
var require_oauth2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/oauth2.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuth2Scopes = void 0;
    var OAuth2Scopes2;
    (function(OAuth2Scopes3) {
      OAuth2Scopes3["Bot"] = "bot";
      OAuth2Scopes3["Connections"] = "connections";
      OAuth2Scopes3["DMChannelsRead"] = "dm_channels.read";
      OAuth2Scopes3["Email"] = "email";
      OAuth2Scopes3["Identify"] = "identify";
      OAuth2Scopes3["Guilds"] = "guilds";
      OAuth2Scopes3["GuildsJoin"] = "guilds.join";
      OAuth2Scopes3["GuildsMembersRead"] = "guilds.members.read";
      OAuth2Scopes3["GroupDMJoins"] = "gdm.join";
      OAuth2Scopes3["MessagesRead"] = "messages.read";
      OAuth2Scopes3["RoleConnectionsWrite"] = "role_connections.write";
      OAuth2Scopes3["RPC"] = "rpc";
      OAuth2Scopes3["RPCActivitiesWrite"] = "rpc.activities.write";
      OAuth2Scopes3["RPCVoiceRead"] = "rpc.voice.read";
      OAuth2Scopes3["RPCVoiceWrite"] = "rpc.voice.write";
      OAuth2Scopes3["RPCNotificationsRead"] = "rpc.notifications.read";
      OAuth2Scopes3["WebhookIncoming"] = "webhook.incoming";
      OAuth2Scopes3["Voice"] = "voice";
      OAuth2Scopes3["ApplicationsBuildsUpload"] = "applications.builds.upload";
      OAuth2Scopes3["ApplicationsBuildsRead"] = "applications.builds.read";
      OAuth2Scopes3["ApplicationsStoreUpdate"] = "applications.store.update";
      OAuth2Scopes3["ApplicationsEntitlements"] = "applications.entitlements";
      OAuth2Scopes3["RelationshipsRead"] = "relationships.read";
      OAuth2Scopes3["ActivitiesRead"] = "activities.read";
      OAuth2Scopes3["ActivitiesWrite"] = "activities.write";
      OAuth2Scopes3["ApplicationsCommands"] = "applications.commands";
      OAuth2Scopes3["ApplicationsCommandsUpdate"] = "applications.commands.update";
      OAuth2Scopes3["ApplicationCommandsPermissionsUpdate"] = "applications.commands.permissions.update";
    })(OAuth2Scopes2 || (exports.OAuth2Scopes = OAuth2Scopes2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/permissions.js
var require_permissions2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/permissions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RoleFlags = void 0;
    var RoleFlags2;
    (function(RoleFlags3) {
      RoleFlags3[RoleFlags3["InPrompt"] = 1] = "InPrompt";
    })(RoleFlags2 || (exports.RoleFlags = RoleFlags2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/poll.js
var require_poll = __commonJS({
  "node_modules/discord-api-types/payloads/v10/poll.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PollLayoutType = void 0;
    var PollLayoutType2;
    (function(PollLayoutType3) {
      PollLayoutType3[PollLayoutType3["Default"] = 1] = "Default";
    })(PollLayoutType2 || (exports.PollLayoutType = PollLayoutType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/soundboard.js
var require_soundboard = __commonJS({
  "node_modules/discord-api-types/payloads/v10/soundboard.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/stageInstance.js
var require_stageInstance = __commonJS({
  "node_modules/discord-api-types/payloads/v10/stageInstance.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StageInstancePrivacyLevel = void 0;
    var StageInstancePrivacyLevel2;
    (function(StageInstancePrivacyLevel3) {
      StageInstancePrivacyLevel3[StageInstancePrivacyLevel3["Public"] = 1] = "Public";
      StageInstancePrivacyLevel3[StageInstancePrivacyLevel3["GuildOnly"] = 2] = "GuildOnly";
    })(StageInstancePrivacyLevel2 || (exports.StageInstancePrivacyLevel = StageInstancePrivacyLevel2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/sticker.js
var require_sticker = __commonJS({
  "node_modules/discord-api-types/payloads/v10/sticker.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StickerFormatType = exports.StickerType = void 0;
    var StickerType2;
    (function(StickerType3) {
      StickerType3[StickerType3["Standard"] = 1] = "Standard";
      StickerType3[StickerType3["Guild"] = 2] = "Guild";
    })(StickerType2 || (exports.StickerType = StickerType2 = {}));
    var StickerFormatType2;
    (function(StickerFormatType3) {
      StickerFormatType3[StickerFormatType3["PNG"] = 1] = "PNG";
      StickerFormatType3[StickerFormatType3["APNG"] = 2] = "APNG";
      StickerFormatType3[StickerFormatType3["Lottie"] = 3] = "Lottie";
      StickerFormatType3[StickerFormatType3["GIF"] = 4] = "GIF";
    })(StickerFormatType2 || (exports.StickerFormatType = StickerFormatType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/teams.js
var require_teams = __commonJS({
  "node_modules/discord-api-types/payloads/v10/teams.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TeamMemberRole = exports.TeamMemberMembershipState = void 0;
    var TeamMemberMembershipState2;
    (function(TeamMemberMembershipState3) {
      TeamMemberMembershipState3[TeamMemberMembershipState3["Invited"] = 1] = "Invited";
      TeamMemberMembershipState3[TeamMemberMembershipState3["Accepted"] = 2] = "Accepted";
    })(TeamMemberMembershipState2 || (exports.TeamMemberMembershipState = TeamMemberMembershipState2 = {}));
    var TeamMemberRole2;
    (function(TeamMemberRole3) {
      TeamMemberRole3["Admin"] = "admin";
      TeamMemberRole3["Developer"] = "developer";
      TeamMemberRole3["ReadOnly"] = "read_only";
    })(TeamMemberRole2 || (exports.TeamMemberRole = TeamMemberRole2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/template.js
var require_template = __commonJS({
  "node_modules/discord-api-types/payloads/v10/template.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/user.js
var require_user2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/user.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConnectionVisibility = exports.ConnectionService = exports.UserPremiumType = exports.UserFlags = void 0;
    var UserFlags2;
    (function(UserFlags3) {
      UserFlags3[UserFlags3["Staff"] = 1] = "Staff";
      UserFlags3[UserFlags3["Partner"] = 2] = "Partner";
      UserFlags3[UserFlags3["Hypesquad"] = 4] = "Hypesquad";
      UserFlags3[UserFlags3["BugHunterLevel1"] = 8] = "BugHunterLevel1";
      UserFlags3[UserFlags3["MFASMS"] = 16] = "MFASMS";
      UserFlags3[UserFlags3["PremiumPromoDismissed"] = 32] = "PremiumPromoDismissed";
      UserFlags3[UserFlags3["HypeSquadOnlineHouse1"] = 64] = "HypeSquadOnlineHouse1";
      UserFlags3[UserFlags3["HypeSquadOnlineHouse2"] = 128] = "HypeSquadOnlineHouse2";
      UserFlags3[UserFlags3["HypeSquadOnlineHouse3"] = 256] = "HypeSquadOnlineHouse3";
      UserFlags3[UserFlags3["PremiumEarlySupporter"] = 512] = "PremiumEarlySupporter";
      UserFlags3[UserFlags3["TeamPseudoUser"] = 1024] = "TeamPseudoUser";
      UserFlags3[UserFlags3["HasUnreadUrgentMessages"] = 8192] = "HasUnreadUrgentMessages";
      UserFlags3[UserFlags3["BugHunterLevel2"] = 16384] = "BugHunterLevel2";
      UserFlags3[UserFlags3["VerifiedBot"] = 65536] = "VerifiedBot";
      UserFlags3[UserFlags3["VerifiedDeveloper"] = 131072] = "VerifiedDeveloper";
      UserFlags3[UserFlags3["CertifiedModerator"] = 262144] = "CertifiedModerator";
      UserFlags3[UserFlags3["BotHTTPInteractions"] = 524288] = "BotHTTPInteractions";
      UserFlags3[UserFlags3["Spammer"] = 1048576] = "Spammer";
      UserFlags3[UserFlags3["DisablePremium"] = 2097152] = "DisablePremium";
      UserFlags3[UserFlags3["ActiveDeveloper"] = 4194304] = "ActiveDeveloper";
      UserFlags3[UserFlags3["Quarantined"] = 17592186044416] = "Quarantined";
      UserFlags3[UserFlags3["Collaborator"] = 1125899906842624] = "Collaborator";
      UserFlags3[UserFlags3["RestrictedCollaborator"] = 2251799813685248] = "RestrictedCollaborator";
    })(UserFlags2 || (exports.UserFlags = UserFlags2 = {}));
    var UserPremiumType2;
    (function(UserPremiumType3) {
      UserPremiumType3[UserPremiumType3["None"] = 0] = "None";
      UserPremiumType3[UserPremiumType3["NitroClassic"] = 1] = "NitroClassic";
      UserPremiumType3[UserPremiumType3["Nitro"] = 2] = "Nitro";
      UserPremiumType3[UserPremiumType3["NitroBasic"] = 3] = "NitroBasic";
    })(UserPremiumType2 || (exports.UserPremiumType = UserPremiumType2 = {}));
    var ConnectionService2;
    (function(ConnectionService3) {
      ConnectionService3["AmazonMusic"] = "amazon-music";
      ConnectionService3["BattleNet"] = "battlenet";
      ConnectionService3["Bluesky"] = "bluesky";
      ConnectionService3["BungieNet"] = "bungie";
      ConnectionService3["Crunchyroll"] = "crunchyroll";
      ConnectionService3["Domain"] = "domain";
      ConnectionService3["eBay"] = "ebay";
      ConnectionService3["EpicGames"] = "epicgames";
      ConnectionService3["Facebook"] = "facebook";
      ConnectionService3["GitHub"] = "github";
      ConnectionService3["Instagram"] = "instagram";
      ConnectionService3["LeagueOfLegends"] = "leagueoflegends";
      ConnectionService3["Mastodon"] = "mastodon";
      ConnectionService3["PayPal"] = "paypal";
      ConnectionService3["PlayStationNetwork"] = "playstation";
      ConnectionService3["Reddit"] = "reddit";
      ConnectionService3["RiotGames"] = "riotgames";
      ConnectionService3["Roblox"] = "roblox";
      ConnectionService3["Spotify"] = "spotify";
      ConnectionService3["Skype"] = "skype";
      ConnectionService3["Steam"] = "steam";
      ConnectionService3["TikTok"] = "tiktok";
      ConnectionService3["Twitch"] = "twitch";
      ConnectionService3["X"] = "twitter";
      ConnectionService3["Twitter"] = "twitter";
      ConnectionService3["Xbox"] = "xbox";
      ConnectionService3["YouTube"] = "youtube";
    })(ConnectionService2 || (exports.ConnectionService = ConnectionService2 = {}));
    var ConnectionVisibility2;
    (function(ConnectionVisibility3) {
      ConnectionVisibility3[ConnectionVisibility3["None"] = 0] = "None";
      ConnectionVisibility3[ConnectionVisibility3["Everyone"] = 1] = "Everyone";
    })(ConnectionVisibility2 || (exports.ConnectionVisibility = ConnectionVisibility2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/voice.js
var require_voice = __commonJS({
  "node_modules/discord-api-types/payloads/v10/voice.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/webhook.js
var require_webhook = __commonJS({
  "node_modules/discord-api-types/payloads/v10/webhook.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebhookType = exports.ApplicationWebhookEventType = exports.ApplicationWebhookType = void 0;
    var ApplicationWebhookType2;
    (function(ApplicationWebhookType3) {
      ApplicationWebhookType3[ApplicationWebhookType3["Ping"] = 0] = "Ping";
      ApplicationWebhookType3[ApplicationWebhookType3["Event"] = 1] = "Event";
    })(ApplicationWebhookType2 || (exports.ApplicationWebhookType = ApplicationWebhookType2 = {}));
    var ApplicationWebhookEventType2;
    (function(ApplicationWebhookEventType3) {
      ApplicationWebhookEventType3["ApplicationAuthorized"] = "APPLICATION_AUTHORIZED";
      ApplicationWebhookEventType3["EntitlementCreate"] = "ENTITLEMENT_CREATE";
      ApplicationWebhookEventType3["QuestUserEnrollment"] = "QUEST_USER_ENROLLMENT";
    })(ApplicationWebhookEventType2 || (exports.ApplicationWebhookEventType = ApplicationWebhookEventType2 = {}));
    var WebhookType2;
    (function(WebhookType3) {
      WebhookType3[WebhookType3["Incoming"] = 1] = "Incoming";
      WebhookType3[WebhookType3["ChannelFollower"] = 2] = "ChannelFollower";
      WebhookType3[WebhookType3["Application"] = 3] = "Application";
    })(WebhookType2 || (exports.WebhookType = WebhookType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/index.js
var require_v102 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_common2(), exports);
    __exportStar(require_application(), exports);
    __exportStar(require_auditLog(), exports);
    __exportStar(require_autoModeration(), exports);
    __exportStar(require_channel(), exports);
    __exportStar(require_emoji(), exports);
    __exportStar(require_gateway(), exports);
    __exportStar(require_guild(), exports);
    __exportStar(require_guildScheduledEvent(), exports);
    __exportStar(require_interactions(), exports);
    __exportStar(require_invite(), exports);
    __exportStar(require_monetization(), exports);
    __exportStar(require_oauth2(), exports);
    __exportStar(require_permissions2(), exports);
    __exportStar(require_poll(), exports);
    __exportStar(require_soundboard(), exports);
    __exportStar(require_stageInstance(), exports);
    __exportStar(require_sticker(), exports);
    __exportStar(require_teams(), exports);
    __exportStar(require_template(), exports);
    __exportStar(require_user2(), exports);
    __exportStar(require_voice(), exports);
    __exportStar(require_webhook(), exports);
  }
});

// node_modules/discord-api-types/utils/internals.js
var require_internals2 = __commonJS({
  "node_modules/discord-api-types/utils/internals.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.urlSafeCharacters = void 0;
    var pattern = /^[\d%A-Za-z-_]+$/g;
    exports.urlSafeCharacters = {
      test(input) {
        const result = pattern.test(input);
        pattern.lastIndex = 0;
        return result;
      }
    };
  }
});

// node_modules/discord-api-types/rest/common.js
var require_common3 = __commonJS({
  "node_modules/discord-api-types/rest/common.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Locale = exports.RESTJSONErrorCodes = void 0;
    var RESTJSONErrorCodes2;
    (function(RESTJSONErrorCodes3) {
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GeneralError"] = 0] = "GeneralError";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownAccount"] = 10001] = "UnknownAccount";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownApplication"] = 10002] = "UnknownApplication";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownChannel"] = 10003] = "UnknownChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuild"] = 10004] = "UnknownGuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownIntegration"] = 10005] = "UnknownIntegration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownInvite"] = 10006] = "UnknownInvite";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownMember"] = 10007] = "UnknownMember";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownMessage"] = 10008] = "UnknownMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownPermissionOverwrite"] = 10009] = "UnknownPermissionOverwrite";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownProvider"] = 10010] = "UnknownProvider";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownRole"] = 10011] = "UnknownRole";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownToken"] = 10012] = "UnknownToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownUser"] = 10013] = "UnknownUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownEmoji"] = 10014] = "UnknownEmoji";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownWebhook"] = 10015] = "UnknownWebhook";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownWebhookService"] = 10016] = "UnknownWebhookService";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownSession"] = 10020] = "UnknownSession";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownAsset"] = 10021] = "UnknownAsset";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownBan"] = 10026] = "UnknownBan";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownSKU"] = 10027] = "UnknownSKU";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStoreListing"] = 10028] = "UnknownStoreListing";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownEntitlement"] = 10029] = "UnknownEntitlement";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownBuild"] = 10030] = "UnknownBuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownLobby"] = 10031] = "UnknownLobby";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownBranch"] = 10032] = "UnknownBranch";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStoreDirectoryLayout"] = 10033] = "UnknownStoreDirectoryLayout";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownRedistributable"] = 10036] = "UnknownRedistributable";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGiftCode"] = 10038] = "UnknownGiftCode";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStream"] = 10049] = "UnknownStream";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownPremiumServerSubscribeCooldown"] = 10050] = "UnknownPremiumServerSubscribeCooldown";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildTemplate"] = 10057] = "UnknownGuildTemplate";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownDiscoverableServerCategory"] = 10059] = "UnknownDiscoverableServerCategory";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownSticker"] = 10060] = "UnknownSticker";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStickerPack"] = 10061] = "UnknownStickerPack";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownInteraction"] = 10062] = "UnknownInteraction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownApplicationCommand"] = 10063] = "UnknownApplicationCommand";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownVoiceState"] = 10065] = "UnknownVoiceState";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownApplicationCommandPermissions"] = 10066] = "UnknownApplicationCommandPermissions";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStageInstance"] = 10067] = "UnknownStageInstance";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildMemberVerificationForm"] = 10068] = "UnknownGuildMemberVerificationForm";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildWelcomeScreen"] = 10069] = "UnknownGuildWelcomeScreen";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildScheduledEvent"] = 10070] = "UnknownGuildScheduledEvent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildScheduledEventUser"] = 10071] = "UnknownGuildScheduledEventUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownTag"] = 10087] = "UnknownTag";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownSound"] = 10097] = "UnknownSound";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["BotsCannotUseThisEndpoint"] = 20001] = "BotsCannotUseThisEndpoint";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OnlyBotsCanUseThisEndpoint"] = 20002] = "OnlyBotsCanUseThisEndpoint";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ExplicitContentCannotBeSentToTheDesiredRecipient"] = 20009] = "ExplicitContentCannotBeSentToTheDesiredRecipient";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["NotAuthorizedToPerformThisActionOnThisApplication"] = 20012] = "NotAuthorizedToPerformThisActionOnThisApplication";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ActionCannotBePerformedDueToSlowmodeRateLimit"] = 20016] = "ActionCannotBePerformedDueToSlowmodeRateLimit";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheMazeIsntMeantForYou"] = 20017] = "TheMazeIsntMeantForYou";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OnlyTheOwnerOfThisAccountCanPerformThisAction"] = 20018] = "OnlyTheOwnerOfThisAccountCanPerformThisAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["AnnouncementEditLimitExceeded"] = 20022] = "AnnouncementEditLimitExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnderMinimumAge"] = 20024] = "UnderMinimumAge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ChannelSendRateLimit"] = 20028] = "ChannelSendRateLimit";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerSendRateLimit"] = 20029] = "ServerSendRateLimit";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords"] = 20031] = "StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GuildPremiumSubscriptionLevelTooLow"] = 20035] = "GuildPremiumSubscriptionLevelTooLow";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildsReached"] = 30001] = "MaximumNumberOfGuildsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfFriendsReached"] = 30002] = "MaximumNumberOfFriendsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPinsReachedForTheChannel"] = 30003] = "MaximumNumberOfPinsReachedForTheChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfRecipientsReached"] = 30004] = "MaximumNumberOfRecipientsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildRolesReached"] = 30005] = "MaximumNumberOfGuildRolesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfWebhooksReached"] = 30007] = "MaximumNumberOfWebhooksReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfEmojisReached"] = 30008] = "MaximumNumberOfEmojisReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfReactionsReached"] = 30010] = "MaximumNumberOfReactionsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGroupDMsReached"] = 30011] = "MaximumNumberOfGroupDMsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildChannelsReached"] = 30013] = "MaximumNumberOfGuildChannelsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfAttachmentsInAMessageReached"] = 30015] = "MaximumNumberOfAttachmentsInAMessageReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfInvitesReached"] = 30016] = "MaximumNumberOfInvitesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfAnimatedEmojisReached"] = 30018] = "MaximumNumberOfAnimatedEmojisReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfServerMembersReached"] = 30019] = "MaximumNumberOfServerMembersReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfServerCategoriesReached"] = 30030] = "MaximumNumberOfServerCategoriesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GuildAlreadyHasTemplate"] = 30031] = "GuildAlreadyHasTemplate";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfApplicationCommandsReached"] = 30032] = "MaximumNumberOfApplicationCommandsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumThreadParticipantsReached"] = 30033] = "MaximumThreadParticipantsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumDailyApplicationCommandCreatesReached"] = 30034] = "MaximumDailyApplicationCommandCreatesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfNonGuildMemberBansHasBeenExceeded"] = 30035] = "MaximumNumberOfNonGuildMemberBansHasBeenExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfBanFetchesHasBeenReached"] = 30037] = "MaximumNumberOfBanFetchesHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfUncompletedGuildScheduledEventsReached"] = 30038] = "MaximumNumberOfUncompletedGuildScheduledEventsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfStickersReached"] = 30039] = "MaximumNumberOfStickersReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPruneRequestsHasBeenReached"] = 30040] = "MaximumNumberOfPruneRequestsHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached"] = 30042] = "MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfSoundboardSoundsReached"] = 30045] = "MaximumNumberOfSoundboardSoundsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfEditsToMessagesOlderThanOneHourReached"] = 30046] = "MaximumNumberOfEditsToMessagesOlderThanOneHourReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPinnedThreadsInForumHasBeenReached"] = 30047] = "MaximumNumberOfPinnedThreadsInForumHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfTagsInForumHasBeenReached"] = 30048] = "MaximumNumberOfTagsInForumHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["BitrateIsTooHighForChannelOfThisType"] = 30052] = "BitrateIsTooHighForChannelOfThisType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPremiumEmojisReached"] = 30056] = "MaximumNumberOfPremiumEmojisReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfWebhooksPerGuildReached"] = 30058] = "MaximumNumberOfWebhooksPerGuildReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfChannelPermissionOverwritesReached"] = 30060] = "MaximumNumberOfChannelPermissionOverwritesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheChannelsForThisGuildAreTooLarge"] = 30061] = "TheChannelsForThisGuildAreTooLarge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["Unauthorized"] = 40001] = "Unauthorized";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VerifyYourAccount"] = 40002] = "VerifyYourAccount";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OpeningDirectMessagesTooFast"] = 40003] = "OpeningDirectMessagesTooFast";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["SendMessagesHasBeenTemporarilyDisabled"] = 40004] = "SendMessagesHasBeenTemporarilyDisabled";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["RequestEntityTooLarge"] = 40005] = "RequestEntityTooLarge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FeatureTemporarilyDisabledServerSide"] = 40006] = "FeatureTemporarilyDisabledServerSide";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UserBannedFromThisGuild"] = 40007] = "UserBannedFromThisGuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ConnectionHasBeenRevoked"] = 40012] = "ConnectionHasBeenRevoked";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OnlyConsumableSKUsCanBeConsumed"] = 40018] = "OnlyConsumableSKUsCanBeConsumed";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["YouCanOnlyDeleteSandboxEntitlements"] = 40019] = "YouCanOnlyDeleteSandboxEntitlements";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TargetUserIsNotConnectedToVoice"] = 40032] = "TargetUserIsNotConnectedToVoice";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThisMessageWasAlreadyCrossposted"] = 40033] = "ThisMessageWasAlreadyCrossposted";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ApplicationCommandWithThatNameAlreadyExists"] = 40041] = "ApplicationCommandWithThatNameAlreadyExists";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ApplicationInteractionFailedToSend"] = 40043] = "ApplicationInteractionFailedToSend";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendAMessageInAForumChannel"] = 40058] = "CannotSendAMessageInAForumChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InteractionHasAlreadyBeenAcknowledged"] = 40060] = "InteractionHasAlreadyBeenAcknowledged";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TagNamesMustBeUnique"] = 40061] = "TagNamesMustBeUnique";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServiceResourceIsBeingRateLimited"] = 40062] = "ServiceResourceIsBeingRateLimited";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThereAreNoTagsAvailableThatCanBeSetByNonModerators"] = 40066] = "ThereAreNoTagsAvailableThatCanBeSetByNonModerators";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TagRequiredToCreateAForumPostInThisChannel"] = 40067] = "TagRequiredToCreateAForumPostInThisChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["AnEntitlementHasAlreadyBeenGrantedForThisResource"] = 40074] = "AnEntitlementHasAlreadyBeenGrantedForThisResource";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThisInteractionHasHitTheMaximumNumberOfFollowUpMessages"] = 40094] = "ThisInteractionHasHitTheMaximumNumberOfFollowUpMessages";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CloudflareIsBlockingYourRequest"] = 40333] = "CloudflareIsBlockingYourRequest";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MissingAccess"] = 50001] = "MissingAccess";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidAccountType"] = 50002] = "InvalidAccountType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotExecuteActionOnDMChannel"] = 50003] = "CannotExecuteActionOnDMChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GuildWidgetDisabled"] = 50004] = "GuildWidgetDisabled";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotEditMessageAuthoredByAnotherUser"] = 50005] = "CannotEditMessageAuthoredByAnotherUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendAnEmptyMessage"] = 50006] = "CannotSendAnEmptyMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendMessagesToThisUser"] = 50007] = "CannotSendMessagesToThisUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendMessagesInNonTextChannel"] = 50008] = "CannotSendMessagesInNonTextChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ChannelVerificationLevelTooHighForYouToGainAccess"] = 50009] = "ChannelVerificationLevelTooHighForYouToGainAccess";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OAuth2ApplicationDoesNotHaveBot"] = 50010] = "OAuth2ApplicationDoesNotHaveBot";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OAuth2ApplicationLimitReached"] = 50011] = "OAuth2ApplicationLimitReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidOAuth2State"] = 50012] = "InvalidOAuth2State";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MissingPermissions"] = 50013] = "MissingPermissions";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidToken"] = 50014] = "InvalidToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["NoteWasTooLong"] = 50015] = "NoteWasTooLong";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ProvidedTooFewOrTooManyMessagesToDelete"] = 50016] = "ProvidedTooFewOrTooManyMessagesToDelete";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidMFALevel"] = 50017] = "InvalidMFALevel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MessageCanOnlyBePinnedInTheChannelItWasSentIn"] = 50019] = "MessageCanOnlyBePinnedInTheChannelItWasSentIn";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InviteCodeInvalidOrTaken"] = 50020] = "InviteCodeInvalidOrTaken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotExecuteActionOnSystemMessage"] = 50021] = "CannotExecuteActionOnSystemMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotExecuteActionOnThisChannelType"] = 50024] = "CannotExecuteActionOnThisChannelType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidOAuth2AccessToken"] = 50025] = "InvalidOAuth2AccessToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MissingRequiredOAuth2Scope"] = 50026] = "MissingRequiredOAuth2Scope";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidWebhookToken"] = 50027] = "InvalidWebhookToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidRole"] = 50028] = "InvalidRole";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidRecipients"] = 50033] = "InvalidRecipients";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OneOfTheMessagesProvidedWasTooOldForBulkDelete"] = 50034] = "OneOfTheMessagesProvidedWasTooOldForBulkDelete";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidFormBodyOrContentType"] = 50035] = "InvalidFormBodyOrContentType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InviteAcceptedToGuildWithoutTheBotBeingIn"] = 50036] = "InviteAcceptedToGuildWithoutTheBotBeingIn";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidActivityAction"] = 50039] = "InvalidActivityAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidAPIVersion"] = 50041] = "InvalidAPIVersion";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FileUploadedExceedsMaximumSize"] = 50045] = "FileUploadedExceedsMaximumSize";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidFileUploaded"] = 50046] = "InvalidFileUploaded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSelfRedeemThisGift"] = 50054] = "CannotSelfRedeemThisGift";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidGuild"] = 50055] = "InvalidGuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidSKU"] = 50057] = "InvalidSKU";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidRequestOrigin"] = 50067] = "InvalidRequestOrigin";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidMessageType"] = 50068] = "InvalidMessageType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["PaymentSourceRequiredToRedeemGift"] = 50070] = "PaymentSourceRequiredToRedeemGift";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotModifyASystemWebhook"] = 50073] = "CannotModifyASystemWebhook";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotDeleteChannelRequiredForCommunityGuilds"] = 50074] = "CannotDeleteChannelRequiredForCommunityGuilds";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotEditStickersWithinMessage"] = 50080] = "CannotEditStickersWithinMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidStickerSent"] = 50081] = "InvalidStickerSent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidActionOnArchivedThread"] = 50083] = "InvalidActionOnArchivedThread";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidThreadNotificationSettings"] = 50084] = "InvalidThreadNotificationSettings";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ParameterEarlierThanCreation"] = 50085] = "ParameterEarlierThanCreation";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CommunityServerChannelsMustBeTextChannels"] = 50086] = "CommunityServerChannelsMustBeTextChannels";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor"] = 50091] = "TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerNotAvailableInYourLocation"] = 50095] = "ServerNotAvailableInYourLocation";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerNeedsMonetizationEnabledToPerformThisAction"] = 50097] = "ServerNeedsMonetizationEnabledToPerformThisAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerNeedsMoreBoostsToPerformThisAction"] = 50101] = "ServerNeedsMoreBoostsToPerformThisAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["RequestBodyContainsInvalidJSON"] = 50109] = "RequestBodyContainsInvalidJSON";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ProvidedFileIsInvalid"] = 50110] = "ProvidedFileIsInvalid";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ProvidedFileTypeIsInvalid"] = 50123] = "ProvidedFileTypeIsInvalid";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ProvidedFileDurationExceedsMaximumLength"] = 50124] = "ProvidedFileDurationExceedsMaximumLength";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OwnerCannotBePendingMember"] = 50131] = "OwnerCannotBePendingMember";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OwnershipCannotBeMovedToABotUser"] = 50132] = "OwnershipCannotBeMovedToABotUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FailedToResizeAssetBelowTheMinimumSize"] = 50138] = "FailedToResizeAssetBelowTheMinimumSize";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji"] = 50144] = "CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotConvertBetweenPremiumEmojiAndNormalEmoji"] = 50145] = "CannotConvertBetweenPremiumEmojiAndNormalEmoji";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UploadedFileNotFound"] = 50146] = "UploadedFileNotFound";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["SpecifiedEmojiIsInvalid"] = 50151] = "SpecifiedEmojiIsInvalid";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesDoNotSupportAdditionalContent"] = 50159] = "VoiceMessagesDoNotSupportAdditionalContent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesMustHaveASingleAudioAttachment"] = 50160] = "VoiceMessagesMustHaveASingleAudioAttachment";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesMustHaveSupportingMetadata"] = 50161] = "VoiceMessagesMustHaveSupportingMetadata";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesCannotBeEdited"] = 50162] = "VoiceMessagesCannotBeEdited";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotDeleteGuildSubscriptionIntegration"] = 50163] = "CannotDeleteGuildSubscriptionIntegration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["YouCannotSendVoiceMessagesInThisChannel"] = 50173] = "YouCannotSendVoiceMessagesInThisChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheUserAccountMustFirstBeVerified"] = 50178] = "TheUserAccountMustFirstBeVerified";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ProvidedFileDoesNotHaveAValidDuration"] = 50192] = "ProvidedFileDoesNotHaveAValidDuration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["YouDoNotHavePermissionToSendThisSticker"] = 50600] = "YouDoNotHavePermissionToSendThisSticker";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TwoFactorAuthenticationIsRequired"] = 60003] = "TwoFactorAuthenticationIsRequired";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["NoUsersWithDiscordTagExist"] = 80004] = "NoUsersWithDiscordTagExist";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ReactionWasBlocked"] = 90001] = "ReactionWasBlocked";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UserCannotUseBurstReactions"] = 90002] = "UserCannotUseBurstReactions";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ApplicationNotYetAvailable"] = 110001] = "ApplicationNotYetAvailable";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["APIResourceOverloaded"] = 13e4] = "APIResourceOverloaded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheStageIsAlreadyOpen"] = 150006] = "TheStageIsAlreadyOpen";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotReplyWithoutPermissionToReadMessageHistory"] = 160002] = "CannotReplyWithoutPermissionToReadMessageHistory";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThreadAlreadyCreatedForMessage"] = 160004] = "ThreadAlreadyCreatedForMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThreadLocked"] = 160005] = "ThreadLocked";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumActiveThreads"] = 160006] = "MaximumActiveThreads";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumActiveAnnouncementThreads"] = 160007] = "MaximumActiveAnnouncementThreads";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidJSONForUploadedLottieFile"] = 170001] = "InvalidJSONForUploadedLottieFile";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UploadedLottiesCannotContainRasterizedImages"] = 170002] = "UploadedLottiesCannotContainRasterizedImages";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerMaximumFramerateExceeded"] = 170003] = "StickerMaximumFramerateExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerFrameCountExceedsMaximumOf1000Frames"] = 170004] = "StickerFrameCountExceedsMaximumOf1000Frames";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["LottieAnimationMaximumDimensionsExceeded"] = 170005] = "LottieAnimationMaximumDimensionsExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerFramerateIsTooSmallOrTooLarge"] = 170006] = "StickerFramerateIsTooSmallOrTooLarge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerAnimationDurationExceedsMaximumOf5Seconds"] = 170007] = "StickerAnimationDurationExceedsMaximumOf5Seconds";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotUpdateAFinishedEvent"] = 18e4] = "CannotUpdateAFinishedEvent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FailedToCreateStageNeededForStageEvent"] = 180002] = "FailedToCreateStageNeededForStageEvent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MessageWasBlockedByAutomaticModeration"] = 2e5] = "MessageWasBlockedByAutomaticModeration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TitleWasBlockedByAutomaticModeration"] = 200001] = "TitleWasBlockedByAutomaticModeration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId"] = 220001] = "WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId"] = 220002] = "WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhooksCanOnlyCreateThreadsInForumChannels"] = 220003] = "WebhooksCanOnlyCreateThreadsInForumChannels";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhookServicesCannotBeUsedInForumChannels"] = 220004] = "WebhookServicesCannotBeUsedInForumChannels";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MessageBlockedByHarmfulLinksFilter"] = 24e4] = "MessageBlockedByHarmfulLinksFilter";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotEnableOnboardingRequirementsAreNotMet"] = 35e4] = "CannotEnableOnboardingRequirementsAreNotMet";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotUpdateOnboardingWhileBelowRequirements"] = 350001] = "CannotUpdateOnboardingWhileBelowRequirements";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FailedToBanUsers"] = 5e5] = "FailedToBanUsers";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["PollVotingBlocked"] = 52e4] = "PollVotingBlocked";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["PollExpired"] = 520001] = "PollExpired";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidChannelTypeForPollCreation"] = 520002] = "InvalidChannelTypeForPollCreation";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotEditAPollMessage"] = 520003] = "CannotEditAPollMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotUseAnEmojiIncludedWithThePoll"] = 520004] = "CannotUseAnEmojiIncludedWithThePoll";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotExpireANonPollMessage"] = 520006] = "CannotExpireANonPollMessage";
    })(RESTJSONErrorCodes2 || (exports.RESTJSONErrorCodes = RESTJSONErrorCodes2 = {}));
    var Locale2;
    (function(Locale3) {
      Locale3["Indonesian"] = "id";
      Locale3["EnglishUS"] = "en-US";
      Locale3["EnglishGB"] = "en-GB";
      Locale3["Bulgarian"] = "bg";
      Locale3["ChineseCN"] = "zh-CN";
      Locale3["ChineseTW"] = "zh-TW";
      Locale3["Croatian"] = "hr";
      Locale3["Czech"] = "cs";
      Locale3["Danish"] = "da";
      Locale3["Dutch"] = "nl";
      Locale3["Finnish"] = "fi";
      Locale3["French"] = "fr";
      Locale3["German"] = "de";
      Locale3["Greek"] = "el";
      Locale3["Hindi"] = "hi";
      Locale3["Hungarian"] = "hu";
      Locale3["Italian"] = "it";
      Locale3["Japanese"] = "ja";
      Locale3["Korean"] = "ko";
      Locale3["Lithuanian"] = "lt";
      Locale3["Norwegian"] = "no";
      Locale3["Polish"] = "pl";
      Locale3["PortugueseBR"] = "pt-BR";
      Locale3["Romanian"] = "ro";
      Locale3["Russian"] = "ru";
      Locale3["SpanishES"] = "es-ES";
      Locale3["SpanishLATAM"] = "es-419";
      Locale3["Swedish"] = "sv-SE";
      Locale3["Thai"] = "th";
      Locale3["Turkish"] = "tr";
      Locale3["Ukrainian"] = "uk";
      Locale3["Vietnamese"] = "vi";
    })(Locale2 || (exports.Locale = Locale2 = {}));
  }
});

// node_modules/discord-api-types/rest/v10/application.js
var require_application2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/application.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/auditLog.js
var require_auditLog2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/auditLog.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/autoModeration.js
var require_autoModeration2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/autoModeration.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/channel.js
var require_channel3 = __commonJS({
  "node_modules/discord-api-types/rest/v10/channel.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReactionType = void 0;
    var ReactionType2;
    (function(ReactionType3) {
      ReactionType3[ReactionType3["Normal"] = 0] = "Normal";
      ReactionType3[ReactionType3["Super"] = 1] = "Super";
    })(ReactionType2 || (exports.ReactionType = ReactionType2 = {}));
  }
});

// node_modules/discord-api-types/rest/v10/emoji.js
var require_emoji2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/emoji.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/gateway.js
var require_gateway2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/gateway.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/guild.js
var require_guild2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/guild.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/guildScheduledEvent.js
var require_guildScheduledEvent2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/guildScheduledEvent.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/interactions.js
var require_interactions2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/interactions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/invite.js
var require_invite2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/invite.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/monetization.js
var require_monetization2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/monetization.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EntitlementOwnerType = void 0;
    var EntitlementOwnerType2;
    (function(EntitlementOwnerType3) {
      EntitlementOwnerType3[EntitlementOwnerType3["Guild"] = 1] = "Guild";
      EntitlementOwnerType3[EntitlementOwnerType3["User"] = 2] = "User";
    })(EntitlementOwnerType2 || (exports.EntitlementOwnerType = EntitlementOwnerType2 = {}));
  }
});

// node_modules/discord-api-types/rest/v10/oauth2.js
var require_oauth22 = __commonJS({
  "node_modules/discord-api-types/rest/v10/oauth2.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/poll.js
var require_poll2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/poll.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/soundboard.js
var require_soundboard2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/soundboard.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/stageInstance.js
var require_stageInstance2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/stageInstance.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/sticker.js
var require_sticker2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/sticker.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/template.js
var require_template2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/template.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/user.js
var require_user3 = __commonJS({
  "node_modules/discord-api-types/rest/v10/user.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/voice.js
var require_voice2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/voice.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/webhook.js
var require_webhook2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/webhook.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/index.js
var require_v103 = __commonJS({
  "node_modules/discord-api-types/rest/v10/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuth2Routes = exports.RouteBases = exports.CDNRoutes = exports.ImageFormat = exports.StickerPackApplicationId = exports.Routes = exports.APIVersion = void 0;
    var internals_1 = require_internals2();
    __exportStar(require_common3(), exports);
    __exportStar(require_application2(), exports);
    __exportStar(require_auditLog2(), exports);
    __exportStar(require_autoModeration2(), exports);
    __exportStar(require_channel3(), exports);
    __exportStar(require_emoji2(), exports);
    __exportStar(require_gateway2(), exports);
    __exportStar(require_guild2(), exports);
    __exportStar(require_guildScheduledEvent2(), exports);
    __exportStar(require_interactions2(), exports);
    __exportStar(require_invite2(), exports);
    __exportStar(require_monetization2(), exports);
    __exportStar(require_oauth22(), exports);
    __exportStar(require_poll2(), exports);
    __exportStar(require_soundboard2(), exports);
    __exportStar(require_stageInstance2(), exports);
    __exportStar(require_sticker2(), exports);
    __exportStar(require_template2(), exports);
    __exportStar(require_user3(), exports);
    __exportStar(require_voice2(), exports);
    __exportStar(require_webhook2(), exports);
    exports.APIVersion = "10";
    exports.Routes = {
      /**
       * Route for:
       * - GET `/applications/{application.id}/role-connections/metadata`
       * - PUT `/applications/{application.id}/role-connections/metadata`
       */
      applicationRoleConnectionMetadata(applicationId) {
        return `/applications/${applicationId}/role-connections/metadata`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/auto-moderation/rules`
       * - POST `/guilds/{guild.id}/auto-moderation/rules`
       */
      guildAutoModerationRules(guildId) {
        return `/guilds/${guildId}/auto-moderation/rules`;
      },
      /**
       * Routes for:
       * - GET    `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       * - PATCH  `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       * - DELETE `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       */
      guildAutoModerationRule(guildId, ruleId) {
        return `/guilds/${guildId}/auto-moderation/rules/${ruleId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/audit-logs`
       */
      guildAuditLog(guildId) {
        return `/guilds/${guildId}/audit-logs`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}`
       * - PATCH  `/channels/{channel.id}`
       * - DELETE `/channels/{channel.id}`
       */
      channel(channelId) {
        return `/channels/${channelId}`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/messages`
       * - POST `/channels/{channel.id}/messages`
       */
      channelMessages(channelId) {
        return `/channels/${channelId}/messages`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}/messages/{message.id}`
       * - PATCH  `/channels/{channel.id}/messages/{message.id}`
       * - DELETE `/channels/{channel.id}/messages/{message.id}`
       */
      channelMessage(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/messages/{message.id}/crosspost`
       */
      channelMessageCrosspost(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}/crosspost`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageOwnReaction(channelId, messageId, emoji) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`;
      },
      /**
       * Route for:
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageUserReaction(channelId, messageId, emoji, userId) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageReaction(channelId, messageId, emoji) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`;
      },
      /**
       * Route for:
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions`
       */
      channelMessageAllReactions(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}/reactions`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/messages/bulk-delete`
       */
      channelBulkDelete(channelId) {
        return `/channels/${channelId}/messages/bulk-delete`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/permissions/{overwrite.id}`
       * - DELETE `/channels/{channel.id}/permissions/{overwrite.id}`
       */
      channelPermission(channelId, overwriteId) {
        return `/channels/${channelId}/permissions/${overwriteId}`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/invites`
       * - POST `/channels/{channel.id}/invites`
       */
      channelInvites(channelId) {
        return `/channels/${channelId}/invites`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/followers`
       */
      channelFollowers(channelId) {
        return `/channels/${channelId}/followers`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/typing`
       */
      channelTyping(channelId) {
        return `/channels/${channelId}/typing`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/pins`
       */
      channelPins(channelId) {
        return `/channels/${channelId}/pins`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/pins/{message.id}`
       * - DELETE `/channels/{channel.id}/pins/{message.id}`
       */
      channelPin(channelId, messageId) {
        return `/channels/${channelId}/pins/${messageId}`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/recipients/{user.id}`
       * - DELETE `/channels/{channel.id}/recipients/{user.id}`
       */
      channelRecipient(channelId, userId) {
        return `/channels/${channelId}/recipients/${userId}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/emojis`
       * - POST `/guilds/{guild.id}/emojis`
       */
      guildEmojis(guildId) {
        return `/guilds/${guildId}/emojis`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/emojis/{emoji.id}`
       * - PATCH  `/guilds/{guild.id}/emojis/{emoji.id}`
       * - DELETE `/guilds/{guild.id}/emojis/{emoji.id}`
       */
      guildEmoji(guildId, emojiId) {
        return `/guilds/${guildId}/emojis/${emojiId}`;
      },
      /**
       * Route for:
       * - POST `/guilds`
       */
      guilds() {
        return "/guilds";
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}`
       * - PATCH  `/guilds/{guild.id}`
       * - DELETE `/guilds/{guild.id}`
       */
      guild(guildId) {
        return `/guilds/${guildId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/preview`
       */
      guildPreview(guildId) {
        return `/guilds/${guildId}/preview`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/channels`
       * - POST  `/guilds/{guild.id}/channels`
       * - PATCH `/guilds/{guild.id}/channels`
       */
      guildChannels(guildId) {
        return `/guilds/${guildId}/channels`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/members/{user.id}`
       * - PUT    `/guilds/{guild.id}/members/{user.id}`
       * - PATCH  `/guilds/{guild.id}/members/@me`
       * - PATCH  `/guilds/{guild.id}/members/{user.id}`
       * - DELETE `/guilds/{guild.id}/members/{user.id}`
       */
      guildMember(guildId, userId = "@me") {
        return `/guilds/${guildId}/members/${userId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/members`
       */
      guildMembers(guildId) {
        return `/guilds/${guildId}/members`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/members/search`
       */
      guildMembersSearch(guildId) {
        return `/guilds/${guildId}/members/search`;
      },
      /**
       * Route for:
       * - PATCH `/guilds/{guild.id}/members/@me/nick`
       *
       * @deprecated Use {@link Routes.guildMember} instead.
       */
      guildCurrentMemberNickname(guildId) {
        return `/guilds/${guildId}/members/@me/nick`;
      },
      /**
       * Route for:
       * - PUT    `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
       * - DELETE `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
       */
      guildMemberRole(guildId, memberId, roleId) {
        return `/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
      },
      /**
       * Route for:
       * - POST `/guilds/{guild.id}/mfa`
       */
      guildMFA(guildId) {
        return `/guilds/${guildId}/mfa`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/bans`
       */
      guildBans(guildId) {
        return `/guilds/${guildId}/bans`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/bans/{user.id}`
       * - PUT    `/guilds/{guild.id}/bans/{user.id}`
       * - DELETE `/guilds/{guild.id}/bans/{user.id}`
       */
      guildBan(guildId, userId) {
        return `/guilds/${guildId}/bans/${userId}`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/roles`
       * - POST  `/guilds/{guild.id}/roles`
       * - PATCH `/guilds/{guild.id}/roles`
       */
      guildRoles(guildId) {
        return `/guilds/${guildId}/roles`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/roles/{role.id}`
       * - PATCH  `/guilds/{guild.id}/roles/{role.id}`
       * - DELETE `/guilds/{guild.id}/roles/{role.id}`
       */
      guildRole(guildId, roleId) {
        return `/guilds/${guildId}/roles/${roleId}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/prune`
       * - POST `/guilds/{guild.id}/prune`
       */
      guildPrune(guildId) {
        return `/guilds/${guildId}/prune`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/regions`
       */
      guildVoiceRegions(guildId) {
        return `/guilds/${guildId}/regions`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/invites`
       */
      guildInvites(guildId) {
        return `/guilds/${guildId}/invites`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/integrations`
       */
      guildIntegrations(guildId) {
        return `/guilds/${guildId}/integrations`;
      },
      /**
       * Route for:
       * - DELETE `/guilds/{guild.id}/integrations/{integration.id}`
       */
      guildIntegration(guildId, integrationId) {
        return `/guilds/${guildId}/integrations/${integrationId}`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/widget`
       * - PATCH `/guilds/{guild.id}/widget`
       */
      guildWidgetSettings(guildId) {
        return `/guilds/${guildId}/widget`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/widget.json`
       */
      guildWidgetJSON(guildId) {
        return `/guilds/${guildId}/widget.json`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/vanity-url`
       */
      guildVanityUrl(guildId) {
        return `/guilds/${guildId}/vanity-url`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/widget.png`
       */
      guildWidgetImage(guildId) {
        return `/guilds/${guildId}/widget.png`;
      },
      /**
       * Route for:
       * - GET    `/invites/{invite.code}`
       * - DELETE `/invites/{invite.code}`
       */
      invite(code) {
        return `/invites/${code}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/templates/{template.code}`
       * - POST `/guilds/templates/{template.code}`
       */
      template(code) {
        return `/guilds/templates/${code}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/templates`
       * - POST `/guilds/{guild.id}/templates`
       */
      guildTemplates(guildId) {
        return `/guilds/${guildId}/templates`;
      },
      /**
       * Route for:
       * - PUT    `/guilds/{guild.id}/templates/{template.code}`
       * - PATCH  `/guilds/{guild.id}/templates/{template.code}`
       * - DELETE `/guilds/{guild.id}/templates/{template.code}`
       */
      guildTemplate(guildId, code) {
        return `/guilds/${guildId}/templates/${code}`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/polls/{message.id}/answers/{answer_id}`
       */
      pollAnswerVoters(channelId, messageId, answerId) {
        return `/channels/${channelId}/polls/${messageId}/answers/${answerId}`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/polls/{message.id}/expire`
       */
      expirePoll(channelId, messageId) {
        return `/channels/${channelId}/polls/${messageId}/expire`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/threads`
       * - POST `/channels/{channel.id}/messages/{message.id}/threads`
       */
      threads(parentId, messageId) {
        const parts = ["", "channels", parentId];
        if (messageId)
          parts.push("messages", messageId);
        parts.push("threads");
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/threads/active`
       */
      guildActiveThreads(guildId) {
        return `/guilds/${guildId}/threads/active`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/threads/archived/public`
       * - GET `/channels/{channel.id}/threads/archived/private`
       */
      channelThreads(channelId, archivedStatus) {
        return `/channels/${channelId}/threads/archived/${archivedStatus}`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/users/@me/threads/archived/private`
       */
      channelJoinedArchivedThreads(channelId) {
        return `/channels/${channelId}/users/@me/threads/archived/private`;
      },
      /**
       * Route for:
       * - GET    `/channels/{thread.id}/thread-members`
       * - GET    `/channels/{thread.id}/thread-members/{user.id}`
       * - PUT    `/channels/{thread.id}/thread-members/@me`
       * - PUT    `/channels/{thread.id}/thread-members/{user.id}`
       * - DELETE `/channels/{thread.id}/thread-members/@me`
       * - DELETE `/channels/{thread.id}/thread-members/{user.id}`
       */
      threadMembers(threadId, userId) {
        const parts = ["", "channels", threadId, "thread-members"];
        if (userId)
          parts.push(userId);
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET   `/users/@me`
       * - GET   `/users/{user.id}`
       * - PATCH `/users/@me`
       *
       * @param [userId] - The user ID, defaulted to `@me`
       */
      user(userId = "@me") {
        return `/users/${userId}`;
      },
      /**
       * Route for:
       * - GET `/users/@me/applications/{application.id}/role-connection`
       * - PUT `/users/@me/applications/{application.id}/role-connection`
       */
      userApplicationRoleConnection(applicationId) {
        return `/users/@me/applications/${applicationId}/role-connection`;
      },
      /**
       * Route for:
       * - GET `/users/@me/guilds`
       */
      userGuilds() {
        return `/users/@me/guilds`;
      },
      /**
       * Route for:
       * - GET `/users/@me/guilds/{guild.id}/member`
       */
      userGuildMember(guildId) {
        return `/users/@me/guilds/${guildId}/member`;
      },
      /**
       * Route for:
       * - DELETE `/users/@me/guilds/{guild.id}`
       */
      userGuild(guildId) {
        return `/users/@me/guilds/${guildId}`;
      },
      /**
       * Route for:
       * - POST `/users/@me/channels`
       */
      userChannels() {
        return `/users/@me/channels`;
      },
      /**
       * Route for:
       * - GET `/users/@me/connections`
       */
      userConnections() {
        return `/users/@me/connections`;
      },
      /**
       * Route for:
       * - GET `/voice/regions`
       */
      voiceRegions() {
        return `/voice/regions`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/webhooks`
       * - POST `/channels/{channel.id}/webhooks`
       */
      channelWebhooks(channelId) {
        return `/channels/${channelId}/webhooks`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/webhooks`
       */
      guildWebhooks(guildId) {
        return `/guilds/${guildId}/webhooks`;
      },
      /**
       * Route for:
       * - GET    `/webhooks/{webhook.id}`
       * - GET    `/webhooks/{webhook.id}/{webhook.token}`
       * - PATCH  `/webhooks/{webhook.id}`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}`
       * - DELETE `/webhooks/{webhook.id}`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}`
       * - POST   `/webhooks/{webhook.id}/{webhook.token}`
       *
       * - POST   `/webhooks/{application.id}/{interaction.token}`
       */
      webhook(webhookId, webhookToken) {
        const parts = ["", "webhooks", webhookId];
        if (webhookToken)
          parts.push(webhookToken);
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       *
       * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/@original`
       * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
       * - DELETE `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
       */
      webhookMessage(webhookId, webhookToken, messageId = "@original") {
        return `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`;
      },
      /**
       * Route for:
       * - POST `/webhooks/{webhook.id}/{webhook.token}/github`
       * - POST `/webhooks/{webhook.id}/{webhook.token}/slack`
       */
      webhookPlatform(webhookId, webhookToken, platform2) {
        return `/webhooks/${webhookId}/${webhookToken}/${platform2}`;
      },
      /**
       * Route for:
       * - GET `/gateway`
       */
      gateway() {
        return `/gateway`;
      },
      /**
       * Route for:
       * - GET `/gateway/bot`
       */
      gatewayBot() {
        return `/gateway/bot`;
      },
      /**
       * Route for:
       * - GET `/oauth2/applications/@me`
       */
      oauth2CurrentApplication() {
        return `/oauth2/applications/@me`;
      },
      /**
       * Route for:
       * - GET `/oauth2/@me`
       */
      oauth2CurrentAuthorization() {
        return `/oauth2/@me`;
      },
      /**
       * Route for:
       * - GET `/oauth2/authorize`
       */
      oauth2Authorization() {
        return `/oauth2/authorize`;
      },
      /**
       * Route for:
       * - POST `/oauth2/token`
       */
      oauth2TokenExchange() {
        return `/oauth2/token`;
      },
      /**
       * Route for:
       * - POST `/oauth2/token/revoke`
       */
      oauth2TokenRevocation() {
        return `/oauth2/token/revoke`;
      },
      /**
       * Route for:
       * - GET  `/applications/{application.id}/commands`
       * - PUT  `/applications/{application.id}/commands`
       * - POST `/applications/{application.id}/commands`
       */
      applicationCommands(applicationId) {
        return `/applications/${applicationId}/commands`;
      },
      /**
       * Route for:
       * - GET    `/applications/{application.id}/commands/{command.id}`
       * - PATCH  `/applications/{application.id}/commands/{command.id}`
       * - DELETE `/applications/{application.id}/commands/{command.id}`
       */
      applicationCommand(applicationId, commandId) {
        return `/applications/${applicationId}/commands/${commandId}`;
      },
      /**
       * Route for:
       * - GET  `/applications/{application.id}/guilds/{guild.id}/commands`
       * - PUT  `/applications/{application.id}/guilds/{guild.id}/commands`
       * - POST `/applications/{application.id}/guilds/{guild.id}/commands`
       */
      applicationGuildCommands(applicationId, guildId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands`;
      },
      /**
       * Route for:
       * - GET    `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       * - PATCH  `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       * - DELETE `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       */
      applicationGuildCommand(applicationId, guildId, commandId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`;
      },
      /**
       * Route for:
       * - POST `/interactions/{interaction.id}/{interaction.token}/callback`
       */
      interactionCallback(interactionId, interactionToken) {
        return `/interactions/${interactionId}/${interactionToken}/callback`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/member-verification`
       * - PATCH `/guilds/{guild.id}/member-verification`
       */
      guildMemberVerification(guildId) {
        return `/guilds/${guildId}/member-verification`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/voice-states/@me`
       * - GET `/guilds/{guild.id}/voice-states/{user.id}`
       * - PATCH `/guilds/{guild.id}/voice-states/@me`
       * - PATCH `/guilds/{guild.id}/voice-states/{user.id}`
       */
      guildVoiceState(guildId, userId = "@me") {
        return `/guilds/${guildId}/voice-states/${userId}`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
       * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
       */
      guildApplicationCommandsPermissions(applicationId, guildId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/permissions`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
       * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
       */
      applicationCommandPermissions(applicationId, guildId, commandId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/welcome-screen`
       * - PATCH `/guilds/{guild.id}/welcome-screen`
       */
      guildWelcomeScreen(guildId) {
        return `/guilds/${guildId}/welcome-screen`;
      },
      /**
       * Route for:
       * - POST `/stage-instances`
       */
      stageInstances() {
        return `/stage-instances`;
      },
      /**
       * Route for:
       * - GET `/stage-instances/{channel.id}`
       * - PATCH `/stage-instances/{channel.id}`
       * - DELETE `/stage-instances/{channel.id}`
       */
      stageInstance(channelId) {
        return `/stage-instances/${channelId}`;
      },
      /**
       * Route for:
       * - GET `/stickers/{sticker.id}`
       */
      sticker(stickerId) {
        return `/stickers/${stickerId}`;
      },
      /**
       * Route for:
       * - GET `/sticker-packs`
       */
      stickerPacks() {
        return "/sticker-packs";
      },
      /**
       * Route for:
       * - GET `/sticker-packs/{pack.id}`
       */
      stickerPack(packId) {
        return `/sticker-packs/${packId}`;
      },
      /**
       * Route for:
       * - GET `/sticker-packs`
       *
       * @deprecated Use {@link Routes.stickerPacks} instead.
       */
      nitroStickerPacks() {
        return "/sticker-packs";
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/stickers`
       * - POST `/guilds/{guild.id}/stickers`
       */
      guildStickers(guildId) {
        return `/guilds/${guildId}/stickers`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/stickers/{sticker.id}`
       * - PATCH  `/guilds/{guild.id}/stickers/{sticker.id}`
       * - DELETE `/guilds/{guild.id}/stickers/{sticker.id}`
       */
      guildSticker(guildId, stickerId) {
        return `/guilds/${guildId}/stickers/${stickerId}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/scheduled-events`
       * - POST `/guilds/{guild.id}/scheduled-events`
       */
      guildScheduledEvents(guildId) {
        return `/guilds/${guildId}/scheduled-events`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       * - PATCH `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       * - DELETE `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       */
      guildScheduledEvent(guildId, guildScheduledEventId) {
        return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}/users`
       */
      guildScheduledEventUsers(guildId, guildScheduledEventId) {
        return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/onboarding`
       * - PUT `/guilds/{guild.id}/onboarding`
       */
      guildOnboarding(guildId) {
        return `/guilds/${guildId}/onboarding`;
      },
      /**
       * Route for:
       * - PUT `/guilds/${guild.id}/incident-actions`
       */
      guildIncidentActions(guildId) {
        return `/guilds/${guildId}/incident-actions`;
      },
      /**
       * Route for:
       * - GET `/applications/@me`
       * - PATCH `/applications/@me`
       */
      currentApplication() {
        return "/applications/@me";
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/entitlements`
       * - POST `/applications/{application.id}/entitlements`
       */
      entitlements(applicationId) {
        return `/applications/${applicationId}/entitlements`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/entitlements/{entitlement.id}`
       * - DELETE `/applications/{application.id}/entitlements/{entitlement.id}`
       */
      entitlement(applicationId, entitlementId) {
        return `/applications/${applicationId}/entitlements/${entitlementId}`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/skus`
       */
      skus(applicationId) {
        return `/applications/${applicationId}/skus`;
      },
      /**
       * Route for:
       * - POST `/guilds/{guild.id}/bulk-ban`
       */
      guildBulkBan(guildId) {
        return `/guilds/${guildId}/bulk-ban`;
      },
      /**
       * Route for:
       * - POST `/applications/{application.id}/entitlements/{entitlement.id}/consume`
       */
      consumeEntitlement(applicationId, entitlementId) {
        return `/applications/${applicationId}/entitlements/${entitlementId}/consume`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/emojis`
       * - POST `/applications/{application.id}/emojis`
       */
      applicationEmojis(applicationId) {
        return `/applications/${applicationId}/emojis`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/emojis/{emoji.id}`
       * - PATCH `/applications/{application.id}/emojis/{emoji.id}`
       * - DELETE `/applications/{application.id}/emojis/{emoji.id}`
       */
      applicationEmoji(applicationId, emojiId) {
        return `/applications/${applicationId}/emojis/${emojiId}`;
      },
      /**
       * Route for:
       * - GET `/skus/{sku.id}/subscriptions`
       */
      skuSubscriptions(skuId) {
        return `/skus/${skuId}/subscriptions`;
      },
      /**
       * Route for:
       * - GET `/skus/{sku.id}/subscriptions/{subscription.id}`
       */
      skuSubscription(skuId, subscriptionId) {
        return `/skus/${skuId}/subscriptions/${subscriptionId}`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/send-soundboard-sound`
       */
      sendSoundboardSound(channelId) {
        return `/channels/${channelId}/send-soundboard-sound`;
      },
      /**
       * Route for:
       * - GET `/soundboard-default-sounds`
       */
      soundboardDefaultSounds() {
        return "/soundboard-default-sounds";
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/soundboard-sounds`
       * - POST `/guilds/{guild.id}/soundboard-sounds`
       */
      guildSoundboardSounds(guildId) {
        return `/guilds/${guildId}/soundboard-sounds`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
       * - PATCH `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
       * - DELETE `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
       */
      guildSoundboardSound(guildId, soundId) {
        return `/guilds/${guildId}/soundboard-sounds/${soundId}`;
      }
    };
    for (const [key, fn] of Object.entries(exports.Routes)) {
      exports.Routes[key] = (...args) => {
        const escaped = args.map((arg) => {
          if (arg) {
            if (internals_1.urlSafeCharacters.test(String(arg))) {
              return arg;
            }
            return encodeURIComponent(arg);
          }
          return arg;
        });
        return fn.call(null, ...escaped);
      };
    }
    Object.freeze(exports.Routes);
    exports.StickerPackApplicationId = "710982414301790216";
    var ImageFormat2;
    (function(ImageFormat3) {
      ImageFormat3["JPEG"] = "jpeg";
      ImageFormat3["PNG"] = "png";
      ImageFormat3["WebP"] = "webp";
      ImageFormat3["GIF"] = "gif";
      ImageFormat3["Lottie"] = "json";
    })(ImageFormat2 || (exports.ImageFormat = ImageFormat2 = {}));
    exports.CDNRoutes = {
      /**
       * Route for:
       * - GET `/emojis/{emoji.id}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      emoji(emojiId, format) {
        return `/emojis/${emojiId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/icons/{guild.id}/{guild.icon}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildIcon(guildId, guildIcon, format) {
        return `/icons/${guildId}/${guildIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/splashes/{guild.id}/{guild.splash}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildSplash(guildId, guildSplash, format) {
        return `/splashes/${guildId}/${guildSplash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/discovery-splashes/{guild.id}/{guild.discovery_splash}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildDiscoverySplash(guildId, guildDiscoverySplash, format) {
        return `/discovery-splashes/${guildId}/${guildDiscoverySplash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/banners/{guild.id}/{guild.banner}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildBanner(guildId, guildBanner, format) {
        return `/banners/${guildId}/${guildBanner}.${format}`;
      },
      /**
       * Route for:
       * - GET `/banners/{user.id}/{user.banner}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      userBanner(userId, userBanner, format) {
        return `/banners/${userId}/${userBanner}.${format}`;
      },
      /**
       * Route for:
       * - GET `/embed/avatars/{index}.png`
       *
       * The value for `index` parameter depends on whether the user is {@link https://discord.com/developers/docs/change-log#unique-usernames-on-discord | migrated to the new username system}.
       * For users on the new username system, `index` will be `(user.id >> 22) % 6`.
       * For users on the legacy username system, `index` will be `user.discriminator % 5`.
       *
       * This route supports the extension: PNG
       */
      defaultUserAvatar(index) {
        return `/embed/avatars/${index}.png`;
      },
      /**
       * Route for:
       * - GET `/avatars/{user.id}/{user.avatar}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      userAvatar(userId, userAvatar, format) {
        return `/avatars/${userId}/${userAvatar}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/users/{user.id}/avatars/{guild_member.avatar}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildMemberAvatar(guildId, userId, memberAvatar, format) {
        return `/guilds/${guildId}/users/${userId}/avatars/${memberAvatar}.${format}`;
      },
      /**
       * Route for:
       * - GET `/avatar-decorations/{user.id}/{user.avatar_decoration}.png`
       *
       * This route supports the extension: PNG
       *
       * @deprecated Use {@link CDNRoutes.avatarDecoration} instead.
       */
      userAvatarDecoration(userId, userAvatarDecoration) {
        return `/avatar-decorations/${userId}/${userAvatarDecoration}.png`;
      },
      /**
       * Route for:
       * - GET `/avatar-decoration-presets/{avatar_decoration_data_asset}.png`
       *
       * This route supports the extension: PNG
       */
      avatarDecoration(avatarDecorationDataAsset) {
        return `/avatar-decoration-presets/${avatarDecorationDataAsset}.png`;
      },
      /**
       * Route for:
       * - GET `/app-icons/{application.id}/{application.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationIcon(applicationId, applicationIcon, format) {
        return `/app-icons/${applicationId}/${applicationIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-icons/{application.id}/{application.cover_image}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationCover(applicationId, applicationCoverImage, format) {
        return `/app-icons/${applicationId}/${applicationCoverImage}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/{application.id}/{application.asset_id}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationAsset(applicationId, applicationAssetId, format) {
        return `/app-assets/${applicationId}/${applicationAssetId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/{application.id}/achievements/{achievement.id}/icons/{achievement.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      achievementIcon(applicationId, achievementId, achievementIconHash, format) {
        return `/app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIconHash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/710982414301790216/store/{sticker_pack.banner.asset_id}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      stickerPackBanner(stickerPackBannerAssetId, format) {
        return `/app-assets/${exports.StickerPackApplicationId}/store/${stickerPackBannerAssetId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/${application.id}/store/${asset.id}.{png|jpeg|webp}}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      storePageAsset(applicationId, assetId, format = ImageFormat2.PNG) {
        return `/app-assets/${applicationId}/store/${assetId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/team-icons/{team.id}/{team.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      teamIcon(teamId, teamIcon, format) {
        return `/team-icons/${teamId}/${teamIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/stickers/{sticker.id}.{png|json}`
       *
       * This route supports the extensions: PNG, Lottie, GIF
       */
      sticker(stickerId, format) {
        return `/stickers/${stickerId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/role-icons/{role.id}/{role.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      roleIcon(roleId, roleIcon, format) {
        return `/role-icons/${roleId}/${roleIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guild-events/{guild_scheduled_event.id}/{guild_scheduled_event.image}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildScheduledEventCover(guildScheduledEventId, guildScheduledEventCoverImage, format) {
        return `/guild-events/${guildScheduledEventId}/${guildScheduledEventCoverImage}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guilds/${guild.id}/users/${user.id}/banners/${guild_member.banner}.{png|jpeg|webp|gif}`
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildMemberBanner(guildId, userId, guildMemberBanner, format) {
        return `/guilds/${guildId}/users/${userId}/banners/${guildMemberBanner}.${format}`;
      },
      /**
       * Route for:
       * - GET `/soundboard-sounds/${sound.id}`
       */
      soundboardSound(soundId) {
        return `/soundboard-sounds/${soundId}`;
      }
    };
    for (const [key, fn] of Object.entries(exports.CDNRoutes)) {
      exports.CDNRoutes[key] = (...args) => {
        const escaped = args.map((arg) => {
          if (arg) {
            if (internals_1.urlSafeCharacters.test(String(arg))) {
              return arg;
            }
            return encodeURIComponent(arg);
          }
          return arg;
        });
        return fn.call(null, ...escaped);
      };
    }
    Object.freeze(exports.CDNRoutes);
    exports.RouteBases = {
      api: `https://discord.com/api/v${exports.APIVersion}`,
      cdn: "https://cdn.discordapp.com",
      media: "https://media.discordapp.net",
      invite: "https://discord.gg",
      template: "https://discord.new",
      gift: "https://discord.gift",
      scheduledEvent: "https://discord.com/events"
    };
    Object.freeze(exports.RouteBases);
    exports.OAuth2Routes = {
      authorizationURL: `${exports.RouteBases.api}${exports.Routes.oauth2Authorization()}`,
      tokenURL: `${exports.RouteBases.api}${exports.Routes.oauth2TokenExchange()}`,
      /**
       * @see {@link https://tools.ietf.org/html/rfc7009}
       */
      tokenRevocationURL: `${exports.RouteBases.api}${exports.Routes.oauth2TokenRevocation()}`
    };
    Object.freeze(exports.OAuth2Routes);
  }
});

// node_modules/discord-api-types/rpc/common.js
var require_common4 = __commonJS({
  "node_modules/discord-api-types/rpc/common.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RPCCloseEventCodes = exports.RPCErrorCodes = exports.RelationshipType = exports.VoiceConnectionStates = exports.RPCVoiceShortcutKeyComboKeyType = exports.RPCVoiceSettingsModeType = exports.RPCDeviceType = void 0;
    var RPCDeviceType2;
    (function(RPCDeviceType3) {
      RPCDeviceType3["AudioInput"] = "audioinput";
      RPCDeviceType3["AudioOutput"] = "audiooutput";
      RPCDeviceType3["VideoInput"] = "videoinput";
    })(RPCDeviceType2 || (exports.RPCDeviceType = RPCDeviceType2 = {}));
    var RPCVoiceSettingsModeType2;
    (function(RPCVoiceSettingsModeType3) {
      RPCVoiceSettingsModeType3["PushToTalk"] = "PUSH_TO_TALK";
      RPCVoiceSettingsModeType3["VoiceActivity"] = "VOICE_ACTIVITY";
    })(RPCVoiceSettingsModeType2 || (exports.RPCVoiceSettingsModeType = RPCVoiceSettingsModeType2 = {}));
    var RPCVoiceShortcutKeyComboKeyType2;
    (function(RPCVoiceShortcutKeyComboKeyType3) {
      RPCVoiceShortcutKeyComboKeyType3[RPCVoiceShortcutKeyComboKeyType3["KeyboardKey"] = 0] = "KeyboardKey";
      RPCVoiceShortcutKeyComboKeyType3[RPCVoiceShortcutKeyComboKeyType3["MouseButton"] = 1] = "MouseButton";
      RPCVoiceShortcutKeyComboKeyType3[RPCVoiceShortcutKeyComboKeyType3["KeyboardModifierKey"] = 2] = "KeyboardModifierKey";
      RPCVoiceShortcutKeyComboKeyType3[RPCVoiceShortcutKeyComboKeyType3["GamepadButton"] = 3] = "GamepadButton";
    })(RPCVoiceShortcutKeyComboKeyType2 || (exports.RPCVoiceShortcutKeyComboKeyType = RPCVoiceShortcutKeyComboKeyType2 = {}));
    var VoiceConnectionStates2;
    (function(VoiceConnectionStates3) {
      VoiceConnectionStates3["Disconnected"] = "DISCONNECTED";
      VoiceConnectionStates3["AwaitingEndpoint"] = "AWAITING_ENDPOINT";
      VoiceConnectionStates3["Authenticating"] = "AUTHENTICATING";
      VoiceConnectionStates3["Connecting"] = "CONNECTING";
      VoiceConnectionStates3["Connected"] = "CONNECTED";
      VoiceConnectionStates3["VoiceDisconnected"] = "VOICE_DISCONNECTED";
      VoiceConnectionStates3["VoiceConnecting"] = "VOICE_CONNECTING";
      VoiceConnectionStates3["VoiceConnected"] = "VOICE_CONNECTED";
      VoiceConnectionStates3["NoRoute"] = "NO_ROUTE";
      VoiceConnectionStates3["IceChecking"] = "ICE_CHECKING";
    })(VoiceConnectionStates2 || (exports.VoiceConnectionStates = VoiceConnectionStates2 = {}));
    var RelationshipType2;
    (function(RelationshipType3) {
      RelationshipType3[RelationshipType3["None"] = 0] = "None";
      RelationshipType3[RelationshipType3["Friend"] = 1] = "Friend";
      RelationshipType3[RelationshipType3["Blocked"] = 2] = "Blocked";
      RelationshipType3[RelationshipType3["PendingIncoming"] = 3] = "PendingIncoming";
      RelationshipType3[RelationshipType3["PendingOutgoing"] = 4] = "PendingOutgoing";
      RelationshipType3[RelationshipType3["Implicit"] = 5] = "Implicit";
    })(RelationshipType2 || (exports.RelationshipType = RelationshipType2 = {}));
    var RPCErrorCodes2;
    (function(RPCErrorCodes3) {
      RPCErrorCodes3[RPCErrorCodes3["UnknownError"] = 1e3] = "UnknownError";
      RPCErrorCodes3[RPCErrorCodes3["ServiceUnavailable"] = 1001] = "ServiceUnavailable";
      RPCErrorCodes3[RPCErrorCodes3["TransactionAborted"] = 1002] = "TransactionAborted";
      RPCErrorCodes3[RPCErrorCodes3["InvalidPayload"] = 4e3] = "InvalidPayload";
      RPCErrorCodes3[RPCErrorCodes3["InvalidCommand"] = 4002] = "InvalidCommand";
      RPCErrorCodes3[RPCErrorCodes3["InvalidGuild"] = 4003] = "InvalidGuild";
      RPCErrorCodes3[RPCErrorCodes3["InvalidEvent"] = 4004] = "InvalidEvent";
      RPCErrorCodes3[RPCErrorCodes3["InvalidChannel"] = 4005] = "InvalidChannel";
      RPCErrorCodes3[RPCErrorCodes3["InvalidPermissions"] = 4006] = "InvalidPermissions";
      RPCErrorCodes3[RPCErrorCodes3["InvalidClientId"] = 4007] = "InvalidClientId";
      RPCErrorCodes3[RPCErrorCodes3["InvalidOrigin"] = 4008] = "InvalidOrigin";
      RPCErrorCodes3[RPCErrorCodes3["InvalidToken"] = 4009] = "InvalidToken";
      RPCErrorCodes3[RPCErrorCodes3["InvalidUser"] = 4010] = "InvalidUser";
      RPCErrorCodes3[RPCErrorCodes3["InvalidInvite"] = 4011] = "InvalidInvite";
      RPCErrorCodes3[RPCErrorCodes3["InvalidActivityJoinRequest"] = 4012] = "InvalidActivityJoinRequest";
      RPCErrorCodes3[RPCErrorCodes3["InvalidEntitlement"] = 4013] = "InvalidEntitlement";
      RPCErrorCodes3[RPCErrorCodes3["InvalidGiftCode"] = 4014] = "InvalidGiftCode";
      RPCErrorCodes3[RPCErrorCodes3["OAuth2Error"] = 5e3] = "OAuth2Error";
      RPCErrorCodes3[RPCErrorCodes3["SelectChannelTimedOut"] = 5001] = "SelectChannelTimedOut";
      RPCErrorCodes3[RPCErrorCodes3["GetGuildTimedOut"] = 5002] = "GetGuildTimedOut";
      RPCErrorCodes3[RPCErrorCodes3["SelectVoiceForceRequired"] = 5003] = "SelectVoiceForceRequired";
      RPCErrorCodes3[RPCErrorCodes3["CaptureShortcutAlreadyListening"] = 5004] = "CaptureShortcutAlreadyListening";
      RPCErrorCodes3[RPCErrorCodes3["InvalidActivitySecret"] = 5005] = "InvalidActivitySecret";
      RPCErrorCodes3[RPCErrorCodes3["NoEligibleActivity"] = 5006] = "NoEligibleActivity";
      RPCErrorCodes3[RPCErrorCodes3["PurchaseCanceled"] = 5007] = "PurchaseCanceled";
      RPCErrorCodes3[RPCErrorCodes3["PurchaseError"] = 5008] = "PurchaseError";
      RPCErrorCodes3[RPCErrorCodes3["UnauthorizedForAchievement"] = 5009] = "UnauthorizedForAchievement";
      RPCErrorCodes3[RPCErrorCodes3["RateLimited"] = 5010] = "RateLimited";
    })(RPCErrorCodes2 || (exports.RPCErrorCodes = RPCErrorCodes2 = {}));
    var RPCCloseEventCodes2;
    (function(RPCCloseEventCodes3) {
      RPCCloseEventCodes3[RPCCloseEventCodes3["CloseNormal"] = 1e3] = "CloseNormal";
      RPCCloseEventCodes3[RPCCloseEventCodes3["CloseUnsupported"] = 1003] = "CloseUnsupported";
      RPCCloseEventCodes3[RPCCloseEventCodes3["CloseAbnormal"] = 1006] = "CloseAbnormal";
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidClientId"] = 4e3] = "InvalidClientId";
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidOrigin"] = 4001] = "InvalidOrigin";
      RPCCloseEventCodes3[RPCCloseEventCodes3["RateLimited"] = 4002] = "RateLimited";
      RPCCloseEventCodes3[RPCCloseEventCodes3["TokenRevoked"] = 4003] = "TokenRevoked";
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidVersion"] = 4004] = "InvalidVersion";
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidEncoding"] = 4005] = "InvalidEncoding";
    })(RPCCloseEventCodes2 || (exports.RPCCloseEventCodes = RPCCloseEventCodes2 = {}));
  }
});

// node_modules/discord-api-types/rpc/v10.js
var require_v104 = __commonJS({
  "node_modules/discord-api-types/rpc/v10.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RPCEvents = exports.RPCCommands = exports.RPCVersion = void 0;
    __exportStar(require_common4(), exports);
    exports.RPCVersion = "1";
    var RPCCommands2;
    (function(RPCCommands3) {
      RPCCommands3["AcceptActivityInvite"] = "ACCEPT_ACTIVITY_INVITE";
      RPCCommands3["ActivityInviteUser"] = "ACTIVITY_INVITE_USER";
      RPCCommands3["Authenticate"] = "AUTHENTICATE";
      RPCCommands3["Authorize"] = "AUTHORIZE";
      RPCCommands3["BraintreePopupBridgeCallback"] = "BRAINTREE_POPUP_BRIDGE_CALLBACK";
      RPCCommands3["BrowserHandoff"] = "BROWSER_HANDOFF";
      RPCCommands3["CloseActivityJoinRequest"] = "CLOSE_ACTIVITY_JOIN_REQUEST";
      RPCCommands3["ConnectionsCallback"] = "CONNECTIONS_CALLBACK";
      RPCCommands3["CreateChannelInvite"] = "CREATE_CHANNEL_INVITE";
      RPCCommands3["DeepLink"] = "DEEP_LINK";
      RPCCommands3["Dispatch"] = "DISPATCH";
      RPCCommands3["GetApplicationTicket"] = "GET_APPLICATION_TICKET";
      RPCCommands3["GetChannel"] = "GET_CHANNEL";
      RPCCommands3["GetChannels"] = "GET_CHANNELS";
      RPCCommands3["GetEntitlementTicket"] = "GET_ENTITLEMENT_TICKET";
      RPCCommands3["GetEntitlements"] = "GET_ENTITLEMENTS";
      RPCCommands3["GetGuild"] = "GET_GUILD";
      RPCCommands3["GetGuilds"] = "GET_GUILDS";
      RPCCommands3["GetImage"] = "GET_IMAGE";
      RPCCommands3["GetNetworkingConfig"] = "GET_NETWORKING_CONFIG";
      RPCCommands3["GetRelationships"] = "GET_RELATIONSHIPS";
      RPCCommands3["GetSelectedVoiceChannel"] = "GET_SELECTED_VOICE_CHANNEL";
      RPCCommands3["GetSkus"] = "GET_SKUS";
      RPCCommands3["GetUser"] = "GET_USER";
      RPCCommands3["GetVoiceSettings"] = "GET_VOICE_SETTINGS";
      RPCCommands3["GiftCodeBrowser"] = "GIFT_CODE_BROWSER";
      RPCCommands3["GuildTemplateBrowser"] = "GUILD_TEMPLATE_BROWSER";
      RPCCommands3["InviteBrowser"] = "INVITE_BROWSER";
      RPCCommands3["NetworkingCreateToken"] = "NETWORKING_CREATE_TOKEN";
      RPCCommands3["NetworkingPeerMetrics"] = "NETWORKING_PEER_METRICS";
      RPCCommands3["NetworkingSystemMetrics"] = "NETWORKING_SYSTEM_METRICS";
      RPCCommands3["OpenOverlayActivityInvite"] = "OPEN_OVERLAY_ACTIVITY_INVITE";
      RPCCommands3["OpenOverlayGuildInvite"] = "OPEN_OVERLAY_GUILD_INVITE";
      RPCCommands3["OpenOverlayVoiceSettings"] = "OPEN_OVERLAY_VOICE_SETTINGS";
      RPCCommands3["Overlay"] = "OVERLAY";
      RPCCommands3["SelectTextChannel"] = "SELECT_TEXT_CHANNEL";
      RPCCommands3["SelectVoiceChannel"] = "SELECT_VOICE_CHANNEL";
      RPCCommands3["SendActivityJoinInvite"] = "SEND_ACTIVITY_JOIN_INVITE";
      RPCCommands3["SetActivity"] = "SET_ACTIVITY";
      RPCCommands3["SetCertifiedDevices"] = "SET_CERTIFIED_DEVICES";
      RPCCommands3["SetOverlayLocked"] = "SET_OVERLAY_LOCKED";
      RPCCommands3["SetUserVoiceSettings"] = "SET_USER_VOICE_SETTINGS";
      RPCCommands3["SetUserVoiceSettings2"] = "SET_USER_VOICE_SETTINGS_2";
      RPCCommands3["SetVoiceSettings"] = "SET_VOICE_SETTINGS";
      RPCCommands3["SetVoiceSettings2"] = "SET_VOICE_SETTINGS_2";
      RPCCommands3["StartPurchase"] = "START_PURCHASE";
      RPCCommands3["Subscribe"] = "SUBSCRIBE";
      RPCCommands3["Unsubscribe"] = "UNSUBSCRIBE";
      RPCCommands3["ValidateApplication"] = "VALIDATE_APPLICATION";
    })(RPCCommands2 || (exports.RPCCommands = RPCCommands2 = {}));
    var RPCEvents2;
    (function(RPCEvents3) {
      RPCEvents3["ActivityInvite"] = "ACTIVITY_INVITE";
      RPCEvents3["ActivityJoin"] = "ACTIVITY_JOIN";
      RPCEvents3["ActivityJoinRequest"] = "ACTIVITY_JOIN_REQUEST";
      RPCEvents3["ActivitySpectate"] = "ACTIVITY_SPECTATE";
      RPCEvents3["ChannelCreate"] = "CHANNEL_CREATE";
      RPCEvents3["CurrentUserUpdate"] = "CURRENT_USER_UPDATE";
      RPCEvents3["EntitlementCreate"] = "ENTITLEMENT_CREATE";
      RPCEvents3["EntitlementDelete"] = "ENTITLEMENT_DELETE";
      RPCEvents3["Error"] = "ERROR";
      RPCEvents3["GameJoin"] = "GAME_JOIN";
      RPCEvents3["GameSpectate"] = "GAME_SPECTATE";
      RPCEvents3["GuildCreate"] = "GUILD_CREATE";
      RPCEvents3["GuildStatus"] = "GUILD_STATUS";
      RPCEvents3["MessageCreate"] = "MESSAGE_CREATE";
      RPCEvents3["MessageDelete"] = "MESSAGE_DELETE";
      RPCEvents3["MessageUpdate"] = "MESSAGE_UPDATE";
      RPCEvents3["NotificationCreate"] = "NOTIFICATION_CREATE";
      RPCEvents3["Overlay"] = "OVERLAY";
      RPCEvents3["OverlayUpdate"] = "OVERLAY_UPDATE";
      RPCEvents3["Ready"] = "READY";
      RPCEvents3["RelationshipUpdate"] = "RELATIONSHIP_UPDATE";
      RPCEvents3["SpeakingStart"] = "SPEAKING_START";
      RPCEvents3["SpeakingStop"] = "SPEAKING_STOP";
      RPCEvents3["VoiceChannelSelect"] = "VOICE_CHANNEL_SELECT";
      RPCEvents3["VoiceConnectionStatus"] = "VOICE_CONNECTION_STATUS";
      RPCEvents3["VoiceSettingsUpdate"] = "VOICE_SETTINGS_UPDATE";
      RPCEvents3["VoiceSettingsUpdate2"] = "VOICE_SETTINGS_UPDATE_2";
      RPCEvents3["VoiceStateCreate"] = "VOICE_STATE_CREATE";
      RPCEvents3["VoiceStateDelete"] = "VOICE_STATE_DELETE";
      RPCEvents3["VoiceStateUpdate"] = "VOICE_STATE_UPDATE";
    })(RPCEvents2 || (exports.RPCEvents = RPCEvents2 = {}));
  }
});

// node_modules/discord-api-types/utils/v10.js
var require_v105 = __commonJS({
  "node_modules/discord-api-types/utils/v10.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isDMInteraction = isDMInteraction;
    exports.isGuildInteraction = isGuildInteraction;
    exports.isApplicationCommandDMInteraction = isApplicationCommandDMInteraction;
    exports.isApplicationCommandGuildInteraction = isApplicationCommandGuildInteraction;
    exports.isMessageComponentDMInteraction = isMessageComponentDMInteraction;
    exports.isMessageComponentGuildInteraction = isMessageComponentGuildInteraction;
    exports.isLinkButton = isLinkButton;
    exports.isInteractionButton = isInteractionButton;
    exports.isMessageComponentInteraction = isMessageComponentInteraction;
    exports.isMessageComponentButtonInteraction = isMessageComponentButtonInteraction;
    exports.isMessageComponentSelectMenuInteraction = isMessageComponentSelectMenuInteraction;
    exports.isChatInputApplicationCommandInteraction = isChatInputApplicationCommandInteraction;
    exports.isContextMenuApplicationCommandInteraction = isContextMenuApplicationCommandInteraction;
    var index_1 = require_v102();
    function isDMInteraction(interaction) {
      return Reflect.has(interaction, "user");
    }
    __name(isDMInteraction, "isDMInteraction");
    function isGuildInteraction(interaction) {
      return Reflect.has(interaction, "guild_id");
    }
    __name(isGuildInteraction, "isGuildInteraction");
    function isApplicationCommandDMInteraction(interaction) {
      return isDMInteraction(interaction);
    }
    __name(isApplicationCommandDMInteraction, "isApplicationCommandDMInteraction");
    function isApplicationCommandGuildInteraction(interaction) {
      return isGuildInteraction(interaction);
    }
    __name(isApplicationCommandGuildInteraction, "isApplicationCommandGuildInteraction");
    function isMessageComponentDMInteraction(interaction) {
      return isDMInteraction(interaction);
    }
    __name(isMessageComponentDMInteraction, "isMessageComponentDMInteraction");
    function isMessageComponentGuildInteraction(interaction) {
      return isGuildInteraction(interaction);
    }
    __name(isMessageComponentGuildInteraction, "isMessageComponentGuildInteraction");
    function isLinkButton(component) {
      return component.style === index_1.ButtonStyle.Link;
    }
    __name(isLinkButton, "isLinkButton");
    function isInteractionButton(component) {
      return ![index_1.ButtonStyle.Link, index_1.ButtonStyle.Premium].includes(component.style);
    }
    __name(isInteractionButton, "isInteractionButton");
    function isMessageComponentInteraction(interaction) {
      return interaction.type === index_1.InteractionType.MessageComponent;
    }
    __name(isMessageComponentInteraction, "isMessageComponentInteraction");
    function isMessageComponentButtonInteraction(interaction) {
      return interaction.data.component_type === index_1.ComponentType.Button;
    }
    __name(isMessageComponentButtonInteraction, "isMessageComponentButtonInteraction");
    function isMessageComponentSelectMenuInteraction(interaction) {
      return [
        index_1.ComponentType.StringSelect,
        index_1.ComponentType.UserSelect,
        index_1.ComponentType.RoleSelect,
        index_1.ComponentType.MentionableSelect,
        index_1.ComponentType.ChannelSelect
      ].includes(interaction.data.component_type);
    }
    __name(isMessageComponentSelectMenuInteraction, "isMessageComponentSelectMenuInteraction");
    function isChatInputApplicationCommandInteraction(interaction) {
      return interaction.data.type === index_1.ApplicationCommandType.ChatInput;
    }
    __name(isChatInputApplicationCommandInteraction, "isChatInputApplicationCommandInteraction");
    function isContextMenuApplicationCommandInteraction(interaction) {
      return interaction.data.type === index_1.ApplicationCommandType.Message || interaction.data.type === index_1.ApplicationCommandType.User;
    }
    __name(isContextMenuApplicationCommandInteraction, "isContextMenuApplicationCommandInteraction");
  }
});

// node_modules/discord-api-types/v10.js
var require_v106 = __commonJS({
  "node_modules/discord-api-types/v10.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Utils = void 0;
    __exportStar(require_v10(), exports);
    __exportStar(require_globals(), exports);
    __exportStar(require_v102(), exports);
    __exportStar(require_v103(), exports);
    __exportStar(require_v104(), exports);
    __exportStar(require_internals2(), exports);
    exports.Utils = require_v105();
  }
});

// node_modules/discord-interactions/dist/util.js
var require_util = __commonJS({
  "node_modules/discord-interactions/dist/util.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concatUint8Arrays = exports.valueToUint8Array = exports.subtleCrypto = void 0;
    function getSubtleCrypto() {
      if (typeof window !== "undefined" && window.crypto) {
        return window.crypto.subtle;
      }
      if (typeof globalThis !== "undefined" && globalThis.crypto) {
        return globalThis.crypto.subtle;
      }
      if (typeof crypto !== "undefined") {
        return crypto.subtle;
      }
      if (typeof __require === "function") {
        const cryptoPackage = "node:crypto";
        const crypto2 = __require(cryptoPackage);
        return crypto2.webcrypto.subtle;
      }
      throw new Error("No Web Crypto API implementation found");
    }
    __name(getSubtleCrypto, "getSubtleCrypto");
    exports.subtleCrypto = getSubtleCrypto();
    function valueToUint8Array(value, format) {
      if (value == null) {
        return new Uint8Array();
      }
      if (typeof value === "string") {
        if (format === "hex") {
          const matches = value.match(/.{1,2}/g);
          if (matches == null) {
            throw new Error("Value is not a valid hex string");
          }
          const hexVal = matches.map((byte) => Number.parseInt(byte, 16));
          return new Uint8Array(hexVal);
        }
        return new TextEncoder().encode(value);
      }
      try {
        if (Buffer.isBuffer(value)) {
          return new Uint8Array(value);
        }
      } catch (_ex) {
      }
      if (value instanceof ArrayBuffer) {
        return new Uint8Array(value);
      }
      if (value instanceof Uint8Array) {
        return value;
      }
      throw new Error("Unrecognized value type, must be one of: string, Buffer, ArrayBuffer, Uint8Array");
    }
    __name(valueToUint8Array, "valueToUint8Array");
    exports.valueToUint8Array = valueToUint8Array;
    function concatUint8Arrays(arr1, arr2) {
      const merged = new Uint8Array(arr1.length + arr2.length);
      merged.set(arr1);
      merged.set(arr2, arr1.length);
      return merged;
    }
    __name(concatUint8Arrays, "concatUint8Arrays");
    exports.concatUint8Arrays = concatUint8Arrays;
  }
});

// node_modules/discord-interactions/dist/webhooks.js
var require_webhooks = __commonJS({
  "node_modules/discord-interactions/dist/webhooks.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebhookEventType = exports.WebhookType = void 0;
    var WebhookType2;
    (function(WebhookType3) {
      WebhookType3[WebhookType3["PING"] = 0] = "PING";
      WebhookType3[WebhookType3["EVENT"] = 1] = "EVENT";
    })(WebhookType2 || (exports.WebhookType = WebhookType2 = {}));
    var WebhookEventType;
    (function(WebhookEventType2) {
      WebhookEventType2["APPLICATION_AUTHORIZED"] = "APPLICATION_AUTHORIZED";
      WebhookEventType2["APPLICATION_DEAUTHORIZED"] = "APPLICATION_DEAUTHORIZED";
      WebhookEventType2["ENTITLEMENT_CREATE"] = "ENTITLEMENT_CREATE";
      WebhookEventType2["QUEST_USER_ENROLLMENT"] = "QUEST_USER_ENROLLMENT";
      WebhookEventType2["LOBBY_MESSAGE_CREATE"] = "LOBBY_MESSAGE_CREATE";
      WebhookEventType2["LOBBY_MESSAGE_UPDATE"] = "LOBBY_MESSAGE_UPDATE";
      WebhookEventType2["LOBBY_MESSAGE_DELETE"] = "LOBBY_MESSAGE_DELETE";
      WebhookEventType2["GAME_DIRECT_MESSAGE_CREATE"] = "GAME_DIRECT_MESSAGE_CREATE";
      WebhookEventType2["GAME_DIRECT_MESSAGE_UPDATE"] = "GAME_DIRECT_MESSAGE_UPDATE";
      WebhookEventType2["GAME_DIRECT_MESSAGE_DELETE"] = "GAME_DIRECT_MESSAGE_DELETE";
    })(WebhookEventType || (exports.WebhookEventType = WebhookEventType = {}));
  }
});

// node_modules/discord-interactions/dist/components.js
var require_components = __commonJS({
  "node_modules/discord-interactions/dist/components.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SeparatorSpacingTypes = exports.TextStyleTypes = exports.ChannelTypes = exports.ButtonStyleTypes = exports.MessageComponentTypes = void 0;
    var MessageComponentTypes;
    (function(MessageComponentTypes2) {
      MessageComponentTypes2[MessageComponentTypes2["ACTION_ROW"] = 1] = "ACTION_ROW";
      MessageComponentTypes2[MessageComponentTypes2["BUTTON"] = 2] = "BUTTON";
      MessageComponentTypes2[MessageComponentTypes2["STRING_SELECT"] = 3] = "STRING_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["INPUT_TEXT"] = 4] = "INPUT_TEXT";
      MessageComponentTypes2[MessageComponentTypes2["USER_SELECT"] = 5] = "USER_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["ROLE_SELECT"] = 6] = "ROLE_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["MENTIONABLE_SELECT"] = 7] = "MENTIONABLE_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["CHANNEL_SELECT"] = 8] = "CHANNEL_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["SECTION"] = 9] = "SECTION";
      MessageComponentTypes2[MessageComponentTypes2["TEXT_DISPLAY"] = 10] = "TEXT_DISPLAY";
      MessageComponentTypes2[MessageComponentTypes2["THUMBNAIL"] = 11] = "THUMBNAIL";
      MessageComponentTypes2[MessageComponentTypes2["MEDIA_GALLERY"] = 12] = "MEDIA_GALLERY";
      MessageComponentTypes2[MessageComponentTypes2["FILE"] = 13] = "FILE";
      MessageComponentTypes2[MessageComponentTypes2["SEPARATOR"] = 14] = "SEPARATOR";
      MessageComponentTypes2[MessageComponentTypes2["CONTAINER"] = 17] = "CONTAINER";
      MessageComponentTypes2[MessageComponentTypes2["LABEL"] = 18] = "LABEL";
    })(MessageComponentTypes || (exports.MessageComponentTypes = MessageComponentTypes = {}));
    var ButtonStyleTypes;
    (function(ButtonStyleTypes2) {
      ButtonStyleTypes2[ButtonStyleTypes2["PRIMARY"] = 1] = "PRIMARY";
      ButtonStyleTypes2[ButtonStyleTypes2["SECONDARY"] = 2] = "SECONDARY";
      ButtonStyleTypes2[ButtonStyleTypes2["SUCCESS"] = 3] = "SUCCESS";
      ButtonStyleTypes2[ButtonStyleTypes2["DANGER"] = 4] = "DANGER";
      ButtonStyleTypes2[ButtonStyleTypes2["LINK"] = 5] = "LINK";
      ButtonStyleTypes2[ButtonStyleTypes2["PREMIUM"] = 6] = "PREMIUM";
    })(ButtonStyleTypes || (exports.ButtonStyleTypes = ButtonStyleTypes = {}));
    var ChannelTypes;
    (function(ChannelTypes2) {
      ChannelTypes2[ChannelTypes2["GUILD_TEXT"] = 0] = "GUILD_TEXT";
      ChannelTypes2[ChannelTypes2["DM"] = 1] = "DM";
      ChannelTypes2[ChannelTypes2["GUILD_VOICE"] = 2] = "GUILD_VOICE";
      ChannelTypes2[ChannelTypes2["GROUP_DM"] = 3] = "GROUP_DM";
      ChannelTypes2[ChannelTypes2["GUILD_CATEGORY"] = 4] = "GUILD_CATEGORY";
      ChannelTypes2[ChannelTypes2["GUILD_ANNOUNCEMENT"] = 5] = "GUILD_ANNOUNCEMENT";
      ChannelTypes2[ChannelTypes2["GUILD_STORE"] = 6] = "GUILD_STORE";
      ChannelTypes2[ChannelTypes2["ANNOUNCEMENT_THREAD"] = 10] = "ANNOUNCEMENT_THREAD";
      ChannelTypes2[ChannelTypes2["PUBLIC_THREAD"] = 11] = "PUBLIC_THREAD";
      ChannelTypes2[ChannelTypes2["PRIVATE_THREAD"] = 12] = "PRIVATE_THREAD";
      ChannelTypes2[ChannelTypes2["GUILD_STAGE_VOICE"] = 13] = "GUILD_STAGE_VOICE";
      ChannelTypes2[ChannelTypes2["GUILD_DIRECTORY"] = 14] = "GUILD_DIRECTORY";
      ChannelTypes2[ChannelTypes2["GUILD_FORUM"] = 15] = "GUILD_FORUM";
      ChannelTypes2[ChannelTypes2["GUILD_MEDIA"] = 16] = "GUILD_MEDIA";
    })(ChannelTypes || (exports.ChannelTypes = ChannelTypes = {}));
    var TextStyleTypes;
    (function(TextStyleTypes2) {
      TextStyleTypes2[TextStyleTypes2["SHORT"] = 1] = "SHORT";
      TextStyleTypes2[TextStyleTypes2["PARAGRAPH"] = 2] = "PARAGRAPH";
    })(TextStyleTypes || (exports.TextStyleTypes = TextStyleTypes = {}));
    var SeparatorSpacingTypes;
    (function(SeparatorSpacingTypes2) {
      SeparatorSpacingTypes2[SeparatorSpacingTypes2["SMALL"] = 1] = "SMALL";
      SeparatorSpacingTypes2[SeparatorSpacingTypes2["LARGE"] = 2] = "LARGE";
    })(SeparatorSpacingTypes || (exports.SeparatorSpacingTypes = SeparatorSpacingTypes = {}));
  }
});

// node_modules/discord-interactions/dist/index.js
var require_dist = __commonJS({
  "node_modules/discord-interactions/dist/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.verifyWebhookEventMiddleware = exports.verifyKeyMiddleware = exports.verifyKey = exports.InteractionResponseFlags = exports.InteractionResponseType = exports.InteractionType = void 0;
    var util_1 = require_util();
    var webhooks_1 = require_webhooks();
    var InteractionType2;
    (function(InteractionType3) {
      InteractionType3[InteractionType3["PING"] = 1] = "PING";
      InteractionType3[InteractionType3["APPLICATION_COMMAND"] = 2] = "APPLICATION_COMMAND";
      InteractionType3[InteractionType3["MESSAGE_COMPONENT"] = 3] = "MESSAGE_COMPONENT";
      InteractionType3[InteractionType3["APPLICATION_COMMAND_AUTOCOMPLETE"] = 4] = "APPLICATION_COMMAND_AUTOCOMPLETE";
      InteractionType3[InteractionType3["MODAL_SUBMIT"] = 5] = "MODAL_SUBMIT";
    })(InteractionType2 || (exports.InteractionType = InteractionType2 = {}));
    var InteractionResponseType2;
    (function(InteractionResponseType3) {
      InteractionResponseType3[InteractionResponseType3["PONG"] = 1] = "PONG";
      InteractionResponseType3[InteractionResponseType3["CHANNEL_MESSAGE_WITH_SOURCE"] = 4] = "CHANNEL_MESSAGE_WITH_SOURCE";
      InteractionResponseType3[InteractionResponseType3["DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE"] = 5] = "DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE";
      InteractionResponseType3[InteractionResponseType3["DEFERRED_UPDATE_MESSAGE"] = 6] = "DEFERRED_UPDATE_MESSAGE";
      InteractionResponseType3[InteractionResponseType3["UPDATE_MESSAGE"] = 7] = "UPDATE_MESSAGE";
      InteractionResponseType3[InteractionResponseType3["APPLICATION_COMMAND_AUTOCOMPLETE_RESULT"] = 8] = "APPLICATION_COMMAND_AUTOCOMPLETE_RESULT";
      InteractionResponseType3[InteractionResponseType3["MODAL"] = 9] = "MODAL";
      InteractionResponseType3[InteractionResponseType3["PREMIUM_REQUIRED"] = 10] = "PREMIUM_REQUIRED";
      InteractionResponseType3[InteractionResponseType3["LAUNCH_ACTIVITY"] = 12] = "LAUNCH_ACTIVITY";
    })(InteractionResponseType2 || (exports.InteractionResponseType = InteractionResponseType2 = {}));
    var InteractionResponseFlags;
    (function(InteractionResponseFlags2) {
      InteractionResponseFlags2[InteractionResponseFlags2["EPHEMERAL"] = 64] = "EPHEMERAL";
      InteractionResponseFlags2[InteractionResponseFlags2["IS_COMPONENTS_V2"] = 32768] = "IS_COMPONENTS_V2";
    })(InteractionResponseFlags || (exports.InteractionResponseFlags = InteractionResponseFlags = {}));
    function verifyKey2(rawBody, signature, timestamp, clientPublicKey) {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          const timestampData = (0, util_1.valueToUint8Array)(timestamp);
          const bodyData = (0, util_1.valueToUint8Array)(rawBody);
          const message = (0, util_1.concatUint8Arrays)(timestampData, bodyData);
          const publicKey = typeof clientPublicKey === "string" ? yield util_1.subtleCrypto.importKey("raw", (0, util_1.valueToUint8Array)(clientPublicKey, "hex"), {
            name: "ed25519",
            namedCurve: "ed25519"
          }, false, ["verify"]) : clientPublicKey;
          const isValid = yield util_1.subtleCrypto.verify({
            name: "ed25519"
          }, publicKey, (0, util_1.valueToUint8Array)(signature, "hex"), message);
          return isValid;
        } catch (_ex) {
          return false;
        }
      });
    }
    __name(verifyKey2, "verifyKey");
    exports.verifyKey = verifyKey2;
    function verifyKeyMiddleware(clientPublicKey) {
      if (!clientPublicKey) {
        throw new Error("You must specify a Discord client public key");
      }
      return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const timestamp = req.header("X-Signature-Timestamp") || "";
        const signature = req.header("X-Signature-Ed25519") || "";
        if (!timestamp || !signature) {
          res.statusCode = 401;
          res.end("[discord-interactions] Invalid signature");
          return;
        }
        function onBodyComplete(rawBody) {
          return __awaiter(this, void 0, void 0, function* () {
            const isValid = yield verifyKey2(rawBody, signature, timestamp, clientPublicKey);
            if (!isValid) {
              res.statusCode = 401;
              res.end("[discord-interactions] Invalid signature");
              return;
            }
            const body = JSON.parse(rawBody.toString("utf-8")) || {};
            if (body.type === InteractionType2.PING) {
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({
                type: InteractionResponseType2.PONG
              }));
              return;
            }
            req.body = body;
            next();
          });
        }
        __name(onBodyComplete, "onBodyComplete");
        if (req.body) {
          if (Buffer.isBuffer(req.body)) {
            yield onBodyComplete(req.body);
          } else if (typeof req.body === "string") {
            yield onBodyComplete(Buffer.from(req.body, "utf-8"));
          } else {
            console.warn("[discord-interactions]: req.body was tampered with, probably by some other middleware. We recommend disabling middleware for interaction routes so that req.body is a raw buffer.");
            yield onBodyComplete(Buffer.from(JSON.stringify(req.body), "utf-8"));
          }
        } else {
          const chunks = [];
          req.on("data", (chunk) => {
            chunks.push(chunk);
          });
          req.on("end", () => __awaiter(this, void 0, void 0, function* () {
            const rawBody = Buffer.concat(chunks);
            yield onBodyComplete(rawBody);
          }));
        }
      });
    }
    __name(verifyKeyMiddleware, "verifyKeyMiddleware");
    exports.verifyKeyMiddleware = verifyKeyMiddleware;
    function verifyWebhookEventMiddleware(clientPublicKey) {
      if (!clientPublicKey) {
        throw new Error("You must specify a Discord client public key");
      }
      return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const timestamp = req.header("X-Signature-Timestamp") || "";
        const signature = req.header("X-Signature-Ed25519") || "";
        if (!timestamp || !signature) {
          res.statusCode = 401;
          res.end("[discord-interactions] Invalid signature");
          return;
        }
        function onBodyComplete(rawBody) {
          return __awaiter(this, void 0, void 0, function* () {
            const isValid = yield verifyKey2(rawBody, signature, timestamp, clientPublicKey);
            if (!isValid) {
              res.statusCode = 401;
              res.end("[discord-interactions] Invalid signature");
              return;
            }
            const body = JSON.parse(rawBody.toString("utf-8")) || {};
            if (body.type === webhooks_1.WebhookType.PING) {
              res.statusCode = 204;
              res.end();
              return;
            }
            req.body = body;
            res.statusCode = 204;
            res.end();
            next();
          });
        }
        __name(onBodyComplete, "onBodyComplete");
        if (req.body) {
          if (Buffer.isBuffer(req.body)) {
            yield onBodyComplete(req.body);
          } else if (typeof req.body === "string") {
            yield onBodyComplete(Buffer.from(req.body, "utf-8"));
          } else {
            console.warn("[discord-interactions]: req.body was tampered with, probably by some other middleware. We recommend disabling middleware for webhook event routes so that req.body is a raw buffer.");
            yield onBodyComplete(Buffer.from(JSON.stringify(req.body), "utf-8"));
          }
        } else {
          const chunks = [];
          req.on("data", (chunk) => {
            chunks.push(chunk);
          });
          req.on("end", () => __awaiter(this, void 0, void 0, function* () {
            const rawBody = Buffer.concat(chunks);
            yield onBodyComplete(rawBody);
          }));
        }
      });
    }
    __name(verifyWebhookEventMiddleware, "verifyWebhookEventMiddleware");
    exports.verifyWebhookEventMiddleware = verifyWebhookEventMiddleware;
    __exportStar(require_components(), exports);
    __exportStar(require_webhooks(), exports);
  }
});

// src/services/Logger.ts
var Logger;
var init_Logger = __esm({
  "src/services/Logger.ts"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Logger = class _Logger {
      static {
        __name(this, "Logger");
      }
      context;
      constructor(options) {
        this.context = options?.context;
      }
      static formatTimestamp() {
        return (/* @__PURE__ */ new Date()).toISOString();
      }
      // Instance methods (with context)
      info(message, ...args) {
        const contextTag = this.context ? `[${this.context}]` : "[INFO]";
        console.log(`[${_Logger.formatTimestamp()}] ${contextTag} ${message}`, ...args);
      }
      warn(message, ...args) {
        const contextTag = this.context ? `[${this.context}]` : "[WARN]";
        console.warn(`[${_Logger.formatTimestamp()}] ${contextTag} ${message}`, ...args);
      }
      error(message, error3) {
        const contextTag = this.context ? `[${this.context}]` : "[ERROR]";
        console.error(`[${_Logger.formatTimestamp()}] ${contextTag} ${message}`);
        if (error3) {
          console.error(error3);
        }
      }
      debug(message, ...args) {
        if (true) {
          const contextTag = this.context ? `[${this.context}]` : "[DEBUG]";
          console.debug(`[${_Logger.formatTimestamp()}] ${contextTag} ${message}`, ...args);
        }
      }
      // Static methods (without context - for backwards compatibility)
      static info(message, ...args) {
        console.log(`[${this.formatTimestamp()}] [INFO] ${message}`, ...args);
      }
      static warn(message, ...args) {
        console.warn(`[${this.formatTimestamp()}] [WARN] ${message}`, ...args);
      }
      static error(message, error3) {
        console.error(`[${this.formatTimestamp()}] [ERROR] ${message}`);
        if (error3) {
          console.error(error3);
        }
      }
      static debug(message, ...args) {
        if (true) {
          console.debug(`[${this.formatTimestamp()}] [DEBUG] ${message}`, ...args);
        }
      }
    };
  }
});

// src/services/Environment.ts
var Environment;
var init_Environment = __esm({
  "src/services/Environment.ts"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_Logger();
    Environment = class {
      static {
        __name(this, "Environment");
      }
      static logger = new Logger({ context: "Environment" });
      /**
       * Required environment variables for the bot to function
       */
      static REQUIRED_VARS = ["DISCORD_TOKEN", "DISCORD_CLIENT_ID"];
      /**
       * Optional environment variables with default values
       */
      static OPTIONAL_VARS = {
        NODE_ENV: "production",
        DEVELOPER_IDS: ""
      };
      /**
       * Validate all required environment variables
       * Works with both Node.js (process.env) and Cloudflare Workers (env object)
       * @param env Optional environment object (for Cloudflare Workers)
       * @throws Error if any required variables are missing or invalid
       */
      static validate(env2) {
        this.logger.info("validate - Validating environment variables...");
        const envVars = env2 || process.env;
        const missing = [];
        const invalid = [];
        for (const varName of this.REQUIRED_VARS) {
          const value = envVars[varName];
          if (!value) {
            missing.push(varName);
            continue;
          }
          switch (varName) {
            case "DISCORD_TOKEN":
              if (!this.isValidDiscordToken(value)) {
                invalid.push(`${varName} (invalid format)`);
              }
              break;
            case "DISCORD_CLIENT_ID":
              if (!this.isValidDiscordId(value)) {
                invalid.push(`${varName} (invalid format)`);
              }
              break;
          }
        }
        for (const [varName, defaultValue] of Object.entries(this.OPTIONAL_VARS)) {
          if (!envVars[varName]) {
            if (env2) {
              this.logger.info(`validate - Using default for ${varName}: ${defaultValue}`);
            } else {
              process.env[varName] = defaultValue;
              this.logger.info(`validate - Set default for ${varName}: ${defaultValue}`);
            }
          }
        }
        if (envVars.DEVELOPER_IDS) {
          const devIds = envVars.DEVELOPER_IDS.split(",").map((id) => id.trim());
          for (const id of devIds) {
            if (id && !this.isValidDiscordId(id)) {
              invalid.push(`DEVELOPER_IDS contains invalid ID: ${id}`);
            }
          }
        }
        if (missing.length > 0) {
          this.logger.error(`validate - Missing required environment variables: ${missing.join(", ")}`);
          throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
        }
        if (invalid.length > 0) {
          this.logger.error(`validate - Invalid environment variables: ${invalid.join(", ")}`);
          throw new Error(`Invalid environment variables: ${invalid.join(", ")}`);
        }
        this.logger.info("validate - Environment validation passed \u2705");
        this.logEnvironmentInfo(envVars);
      }
      /**
       * Validate Discord token format
       */
      static isValidDiscordToken(token) {
        return token.length > 50 && (token.includes(".") || token.startsWith("Bot "));
      }
      /**
       * Validate Discord ID format (snowflake)
       */
      static isValidDiscordId(id) {
        return /^\d{17,20}$/.test(id);
      }
      /**
       * Log environment information (without sensitive data)
       */
      static logEnvironmentInfo(env2) {
        const envVars = env2 || process.env;
        const token = envVars.DISCORD_TOKEN;
        const clientId = envVars.DISCORD_CLIENT_ID;
        this.logger.info(`validate - Environment: ${envVars.NODE_ENV || "production"}`);
        this.logger.info(`validate - Discord Client ID: ${clientId || "not set"}`);
        if (token) {
          this.logger.info(`validate - Discord Token: ${this.maskToken(token)}`);
        }
        if (envVars.DEVELOPER_IDS) {
          const devCount = envVars.DEVELOPER_IDS.split(",").filter((id) => id.trim()).length;
          this.logger.info(`validate - Developer IDs configured: ${devCount}`);
        }
      }
      /**
       * Mask sensitive token for logging
       */
      static maskToken(token) {
        if (token.length < 10) return "***";
        return token.substring(0, 6) + "***" + token.substring(token.length - 4);
      }
      /**
       * Get environment configuration object
       * Works with both Node.js (process.env) and Cloudflare Workers (env object)
       * @param env Optional environment object (for Cloudflare Workers)
       */
      static getConfig(env2) {
        const envVars = env2 || process.env;
        const token = envVars.DISCORD_TOKEN;
        const clientId = envVars.DISCORD_CLIENT_ID;
        if (!token || !clientId) {
          throw new Error("Missing required environment variables: DISCORD_TOKEN or DISCORD_CLIENT_ID");
        }
        return {
          discordToken: token,
          discordClientId: clientId,
          nodeEnv: envVars.NODE_ENV || "production",
          developerIds: envVars.DEVELOPER_IDS?.split(",").map((id) => id.trim()).filter(Boolean) || [],
          isDevelopment: envVars.NODE_ENV === "development",
          isProduction: envVars.NODE_ENV === "production" || !envVars.NODE_ENV
        };
      }
    };
  }
});

// src/core/Command.ts
var Command;
var init_Command = __esm({
  "src/core/Command.ts"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_Environment();
    Command = class {
      static {
        __name(this, "Command");
      }
      /** Optional permissions required for the bot to execute this command */
      requiredPermissions = [];
      /** Whether this command can only be used in guilds (not DMs) */
      guildOnly = false;
      /** Whether this command can only be used by developers */
      developerOnly = false;
      /**
       * Get the command data for Discord registration
       */
      getRegistrationData() {
        return this.data;
      }
      /**
       * Get the command name
       */
      getName() {
        return this.data.name;
      }
      /**
       * Get the command description
       */
      getDescription() {
        return this.helpInfo.description;
      }
      /**
       * Get the help information
       */
      getHelpInfo() {
        return this.helpInfo;
      }
      /**
       * Validate if the command can be executed in the current context
       */
      async validate(interaction) {
        if (this.guildOnly && !interaction.guild_id) {
          return { valid: false, reason: "This command can only be used in servers." };
        }
        if (this.requiredPermissions.length > 0 && interaction.guild_id) {
        }
        if (this.developerOnly) {
          const config2 = Environment.getConfig();
          const userId = interaction.user?.id || interaction.member?.user?.id;
          if (!userId || !config2.developerIds.includes(userId)) {
            return { valid: false, reason: "This command is for developers only." };
          }
        }
        return { valid: true };
      }
    };
  }
});

// src/commands/ping/index.ts
var PingCommand;
var init_ping = __esm({
  "src/commands/ping/index.ts"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_Command();
    PingCommand = class extends Command {
      static {
        __name(this, "PingCommand");
      }
      data = {
        name: "ping",
        description: "Check if the bot is responding",
        type: 1
        // CHAT_INPUT
      };
      helpInfo = {
        name: "ping",
        description: "Check if the bot is responding and get latency information",
        usage: "/ping",
        examples: ["/ping"],
        category: "Utility"
      };
      async execute(interaction, env2, rest) {
        const startTime = Date.now();
        await rest.post(`/interactions/${interaction.id}/${interaction.token}/callback`, {
          body: {
            type: 4,
            // CHANNEL_MESSAGE_WITH_SOURCE
            data: {
              content: "Pinging..."
            }
          }
        });
        const latency = Date.now() - startTime;
        const token = env2.DISCORD_TOKEN;
        const applicationId = interaction.application_id;
        await fetch(
          `https://discord.com/api/v10/webhooks/${applicationId}/${interaction.token}/messages/@original`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bot ${token}`
            },
            body: JSON.stringify({
              content: `\u{1F3D3} **Pong!**
\u{1F4E1} **Latency:** ${latency}ms
\u{1F493} **API Latency:** ~${latency}ms`
            })
          }
        );
      }
    };
  }
});

// src/commands/help/index.ts
var HelpCommand;
var init_help = __esm({
  "src/commands/help/index.ts"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_Command();
    init_commands();
    HelpCommand = class extends Command {
      static {
        __name(this, "HelpCommand");
      }
      data = {
        name: "help",
        description: "Get help with bot commands",
        type: 1,
        // CHAT_INPUT
        options: [
          {
            name: "command",
            description: "Get detailed help for a specific command",
            type: 3,
            // STRING
            required: false,
            autocomplete: true
          }
        ]
      };
      helpInfo = {
        name: "help",
        description: "Get help with bot commands and see detailed usage instructions",
        usage: "/help [command]",
        examples: ["/help", "/help command:ping", "/help command:info"],
        category: "Utility"
      };
      async execute(interaction, env2, rest) {
        const commandOption = interaction.data?.options?.find((opt) => opt.name === "command");
        const specificCommand = commandOption?.value;
        if (specificCommand) {
          await this.showSpecificCommandHelp(interaction, specificCommand, rest);
        } else {
          await this.showAllCommandsHelp(interaction, rest);
        }
      }
      async showSpecificCommandHelp(interaction, commandName, rest) {
        const command = ALL_COMMANDS.find((cmd) => cmd.getName() === commandName);
        if (!command) {
          await rest.post(`/interactions/${interaction.id}/${interaction.token}/callback`, {
            body: {
              type: 4,
              // CHANNEL_MESSAGE_WITH_SOURCE
              data: {
                content: `\u274C Command "${commandName}" not found.`,
                flags: 64
                // Ephemeral
              }
            }
          });
          return;
        }
        const helpInfo = command.getHelpInfo();
        const embed = {
          title: `\u{1F4D6} Help: /${helpInfo.name}`,
          description: helpInfo.description,
          color: 44678,
          fields: [
            {
              name: "\u{1F4CB} Usage",
              value: `\`${helpInfo.usage}\``,
              inline: false
            },
            {
              name: "\u{1F3AF} Examples",
              value: helpInfo.examples.map((ex) => `\`${ex}\``).join("\n"),
              inline: false
            },
            {
              name: "\u{1F4C2} Category",
              value: helpInfo.category,
              inline: true
            }
          ],
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
        if (command.requiredPermissions.length > 0) {
          embed.fields.push({
            name: "\u{1F512} Required Permissions",
            value: command.requiredPermissions.join(", "),
            inline: true
          });
        }
        const restrictions = [];
        if (command.guildOnly) restrictions.push("Server only");
        if (command.developerOnly) restrictions.push("Developer only");
        if (restrictions.length > 0) {
          embed.fields.push({
            name: "\u26A0\uFE0F Restrictions",
            value: restrictions.join(", "),
            inline: true
          });
        }
        await rest.post(`/interactions/${interaction.id}/${interaction.token}/callback`, {
          body: {
            type: 4,
            data: {
              embeds: [embed]
            }
          }
        });
      }
      async showAllCommandsHelp(interaction, rest) {
        const categories = /* @__PURE__ */ new Map();
        for (const command of ALL_COMMANDS) {
          const category = command.getHelpInfo().category;
          if (!categories.has(category)) {
            categories.set(category, []);
          }
          const categoryCommands = categories.get(category);
          if (categoryCommands) {
            categoryCommands.push(command);
          }
        }
        const embed = {
          title: "\u{1F916} Bot Commands",
          description: "Here are all available commands, organized by category.",
          color: 5793266,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          footer: { text: "Use /help command:<name> for detailed help on a specific command" },
          fields: []
        };
        for (const [categoryName, commands] of categories) {
          const commandList = commands.map((cmd) => `\`/${cmd.getName()}\` - ${cmd.getDescription()}`).join("\n");
          embed.fields.push({
            name: `\u{1F4C2} ${categoryName}`,
            value: commandList,
            inline: false
          });
        }
        await rest.post(`/interactions/${interaction.id}/${interaction.token}/callback`, {
          body: {
            type: 4,
            data: {
              embeds: [embed]
            }
          }
        });
      }
      // Autocomplete for command names
      async autocomplete(interaction) {
        const focusedOption = interaction.data?.options?.find(
          (opt) => opt.focused === true
        );
        const focusedValue = focusedOption?.value || "";
        const choices = ALL_COMMANDS.filter(
          (cmd) => cmd.getName().startsWith(focusedValue.toLowerCase())
        ).slice(0, 25).map((cmd) => ({
          name: `${cmd.getName()} - ${cmd.getDescription()}`,
          value: cmd.getName()
        }));
        return choices;
      }
    };
  }
});

// src/commands/info/user.ts
var InfoUserSubcommand;
var init_user = __esm({
  "src/commands/info/user.ts"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    InfoUserSubcommand = class {
      static {
        __name(this, "InfoUserSubcommand");
      }
      async execute(interaction, env2, rest) {
        const userSubcommand = interaction.data?.options?.find((opt) => opt.name === "user");
        const targetOption = userSubcommand?.options?.find((opt) => opt.name === "target");
        const targetUserId = targetOption?.value || interaction.user?.id || "";
        const user = interaction.user || interaction.member?.user;
        if (!user) {
          await rest.post(`/interactions/${interaction.id}/${interaction.token}/callback`, {
            body: {
              type: 4,
              data: {
                content: "\u274C Unable to get user information.",
                flags: 64
              }
            }
          });
          return;
        }
        const username = user.username || "Unknown";
        const discriminator = user.discriminator || "0";
        const tag = `${username}${discriminator !== "0" ? `#${discriminator}` : ""}`;
        const displayName = user.global_name || username;
        const userId = user.id;
        const createdTimestamp = Number(BigInt(userId) >> 22n) + 14200704e5;
        let userDetails = {};
        if (targetUserId && targetUserId !== userId) {
          const token = env2.DISCORD_TOKEN;
          try {
            const userResponse = await fetch(`https://discord.com/api/v10/users/${targetUserId}`, {
              headers: {
                Authorization: `Bot ${token}`
              }
            });
            if (userResponse.ok) {
              userDetails = await userResponse.json();
            }
          } catch {
          }
        }
        const embed = {
          title: `\u{1F464} User Information`,
          description: `Information about ${tag}`,
          color: 44678,
          thumbnail: {
            url: `https://cdn.discordapp.com/avatars/${userId}/${userDetails.avatar || "default"}.png`
          },
          fields: [
            {
              name: "\u{1F4CA} Basic Info",
              value: [
                `**Username:** ${username}`,
                `**Display Name:** ${displayName}`,
                `**ID:** ${userId}`,
                `**Bot:** ${userDetails.bot ? "Yes" : "No"}`
              ].join("\n"),
              inline: true
            },
            {
              name: "\u{1F4C5} Dates",
              value: [
                `**Account Created:** <t:${Math.floor(createdTimestamp / 1e3)}:F>`,
                `**Joined Server:** ${interaction.member?.joined_at ? `<t:${Math.floor(Date.parse(interaction.member.joined_at) / 1e3)}:F>` : "Not in server"}`
              ].join("\n"),
              inline: true
            }
          ],
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
        await rest.post(`/interactions/${interaction.id}/${interaction.token}/callback`, {
          body: {
            type: 4,
            data: {
              embeds: [embed]
            }
          }
        });
      }
    };
  }
});

// src/commands/info/server.ts
var InfoServerSubcommand;
var init_server = __esm({
  "src/commands/info/server.ts"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    InfoServerSubcommand = class {
      static {
        __name(this, "InfoServerSubcommand");
      }
      async execute(interaction, env2, rest) {
        if (!interaction.guild_id) {
          await rest.post(`/interactions/${interaction.id}/${interaction.token}/callback`, {
            body: {
              type: 4,
              data: {
                content: "\u274C This command can only be used in a server.",
                flags: 64
                // Ephemeral
              }
            }
          });
          return;
        }
        const token = env2.DISCORD_TOKEN;
        const guildResponse = await fetch(
          `https://discord.com/api/v10/guilds/${interaction.guild_id}`,
          {
            headers: {
              Authorization: `Bot ${token}`
            }
          }
        );
        if (!guildResponse.ok) {
          await rest.post(`/interactions/${interaction.id}/${interaction.token}/callback`, {
            body: {
              type: 4,
              data: {
                content: "\u274C Unable to fetch server information.",
                flags: 64
              }
            }
          });
          return;
        }
        const guild = await guildResponse.json();
        const guildId = guild.id;
        const createdTimestamp = Number(BigInt(guildId) >> 22n) + 14200704e5;
        const embed = {
          title: `\u{1F3F0} Server Information`,
          description: `Information about ${guild.name}`,
          color: 5793266,
          thumbnail: guild.icon ? {
            url: `https://cdn.discordapp.com/icons/${guildId}/${guild.icon}.png`
          } : void 0,
          fields: [
            {
              name: "\u{1F4CA} Statistics",
              value: [`**Members:** ${guild.member_count || "Unknown"}`, `**ID:** ${guildId}`].join(
                "\n"
              ),
              inline: true
            },
            {
              name: "\u{1F451} Server Details",
              value: [
                `**Owner:** <@${guild.owner_id}>`,
                `**Created:** <t:${Math.floor(createdTimestamp / 1e3)}:F>`,
                `**Verification:** ${guild.verification_level || "Unknown"}`,
                `**Boost Level:** ${guild.premium_tier || 0}`
              ].join("\n"),
              inline: true
            }
          ],
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
        if (guild.description) {
          embed.fields.push({
            name: "\u{1F4DD} Description",
            value: guild.description,
            inline: false
          });
        }
        await rest.post(`/interactions/${interaction.id}/${interaction.token}/callback`, {
          body: {
            type: 4,
            data: {
              embeds: [embed]
            }
          }
        });
      }
    };
  }
});

// src/commands/info/index.ts
var InfoCommand;
var init_info = __esm({
  "src/commands/info/index.ts"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_Command();
    init_Logger();
    init_user();
    init_server();
    InfoCommand = class extends Command {
      static {
        __name(this, "InfoCommand");
      }
      userSubcommand = new InfoUserSubcommand();
      serverSubcommand = new InfoServerSubcommand();
      data = {
        name: "info",
        description: "Get information about users or servers",
        type: 1,
        // CHAT_INPUT
        options: [
          {
            name: "user",
            description: "Get information about a user",
            type: 1,
            // SUBCOMMAND
            options: [
              {
                name: "target",
                description: "The user to get info about",
                type: 6,
                // USER
                required: false
              }
            ]
          },
          {
            name: "server",
            description: "Get information about the server",
            type: 1
            // SUBCOMMAND
          }
        ]
      };
      helpInfo = {
        name: "info",
        description: "Get information about users or servers",
        usage: "/info <user|server> [target]",
        examples: ["/info user", "/info user target:@john", "/info server"],
        category: "Utility"
      };
      // Command configuration
      requiredPermissions = ["SendMessages"];
      guildOnly = true;
      async execute(interaction, env2, rest) {
        const subcommandOption = interaction.data?.options?.find(
          (opt) => opt.type === 1
          // SUBCOMMAND
        );
        const subcommand = subcommandOption?.name;
        try {
          switch (subcommand) {
            case "user":
              await this.userSubcommand.execute(interaction, env2, rest);
              break;
            case "server":
              await this.serverSubcommand.execute(interaction, env2, rest);
              break;
            default:
              await rest.post(`/interactions/${interaction.id}/${interaction.token}/callback`, {
                body: {
                  type: 4,
                  data: {
                    content: "\u274C Unknown subcommand.",
                    flags: 64
                    // Ephemeral
                  }
                }
              });
          }
        } catch (error3) {
          Logger.error(`Error in info command subcommand ${subcommand}:`, error3);
          throw error3;
        }
      }
    };
  }
});

// src/commands/index.ts
var commands_exports = {};
__export(commands_exports, {
  ALL_COMMANDS: () => ALL_COMMANDS,
  HelpCommand: () => HelpCommand,
  InfoCommand: () => InfoCommand,
  PingCommand: () => PingCommand
});
var ALL_COMMANDS;
var init_commands = __esm({
  "src/commands/index.ts"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ping();
    init_help();
    init_info();
    init_ping();
    init_help();
    init_info();
    ALL_COMMANDS = [
      new PingCommand(),
      new HelpCommand(),
      new InfoCommand()
      // Add new commands here - they'll automatically be registered and available
      // Commands will automatically appear in /help command
    ];
  }
});

// src/core/CommandManager.ts
var CommandManager_exports = {};
__export(CommandManager_exports, {
  CommandManager: () => CommandManager
});
var CommandManager;
var init_CommandManager = __esm({
  "src/core/CommandManager.ts"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_Logger();
    CommandManager = class {
      static {
        __name(this, "CommandManager");
      }
      logger = new Logger({ context: "CommandManager" });
      commands = [];
      commandMap = /* @__PURE__ */ new Map();
      constructor(commands) {
        this.commands = commands;
        this.loadCommands();
      }
      /**
       * Load all commands into the command map
       */
      loadCommands() {
        this.logger.info("loadCommands - Loading commands...");
        for (const command of this.commands) {
          this.commandMap.set(command.getName(), command);
          this.logger.info(`loadCommands - Loaded: ${command.getName()}`);
        }
        this.logger.info(`loadCommands - Loaded ${this.commands.length} commands total`);
      }
      /**
       * Get all commands
       */
      getAllCommands() {
        return this.commands;
      }
      /**
       * Get command by name
       */
      getCommand(name) {
        return this.commandMap.get(name);
      }
      /**
       * Get all command registration data for Discord
       */
      getRegistrationData() {
        this.logger.info("getRegistrationData - Preparing command registration data");
        return this.commands.map((command) => {
          this.logger.debug(`getRegistrationData - Processing: ${command.getName()}`);
          return command.getRegistrationData();
        });
      }
      /**
       * Get commands grouped by category for help system
       */
      getCommandsByCategory() {
        const categories = /* @__PURE__ */ new Map();
        for (const command of this.commands) {
          const category = command.getHelpInfo().category;
          if (!categories.has(category)) {
            categories.set(category, []);
          }
          const categoryCommands = categories.get(category);
          if (categoryCommands) {
            categoryCommands.push(command);
          }
        }
        return categories;
      }
      /**
       * Get command help information
       */
      getCommandHelp(commandName) {
        if (commandName) {
          const command = this.getCommand(commandName);
          return command ? command.getHelpInfo() : null;
        }
        const categories = this.getCommandsByCategory();
        const helpData = {};
        for (const [category, commands] of categories) {
          helpData[category] = commands.map((cmd) => ({
            name: cmd.getName(),
            description: cmd.getDescription(),
            usage: cmd.getHelpInfo().usage
          }));
        }
        return helpData;
      }
      /**
       * Get total command count
       */
      getCommandCount() {
        return this.commands.length;
      }
    };
  }
});

// .wrangler/tmp/bundle-Qg273D/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-Qg273D/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/worker.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/discord-api-types/v10.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_v10 = __toESM(require_v106(), 1);
var APIApplicationCommandPermissionsConstant = import_v10.default.APIApplicationCommandPermissionsConstant;
var APIVersion = import_v10.default.APIVersion;
var ActivityFlags = import_v10.default.ActivityFlags;
var ActivityPlatform = import_v10.default.ActivityPlatform;
var ActivityType = import_v10.default.ActivityType;
var AllowedMentionsTypes = import_v10.default.AllowedMentionsTypes;
var ApplicationCommandOptionType = import_v10.default.ApplicationCommandOptionType;
var ApplicationCommandPermissionType = import_v10.default.ApplicationCommandPermissionType;
var ApplicationCommandType = import_v10.default.ApplicationCommandType;
var ApplicationFlags = import_v10.default.ApplicationFlags;
var ApplicationIntegrationType = import_v10.default.ApplicationIntegrationType;
var ApplicationRoleConnectionMetadataType = import_v10.default.ApplicationRoleConnectionMetadataType;
var ApplicationWebhookEventStatus = import_v10.default.ApplicationWebhookEventStatus;
var ApplicationWebhookEventType = import_v10.default.ApplicationWebhookEventType;
var ApplicationWebhookType = import_v10.default.ApplicationWebhookType;
var AttachmentFlags = import_v10.default.AttachmentFlags;
var AuditLogEvent = import_v10.default.AuditLogEvent;
var AuditLogOptionsType = import_v10.default.AuditLogOptionsType;
var AutoModerationActionType = import_v10.default.AutoModerationActionType;
var AutoModerationRuleEventType = import_v10.default.AutoModerationRuleEventType;
var AutoModerationRuleKeywordPresetType = import_v10.default.AutoModerationRuleKeywordPresetType;
var AutoModerationRuleTriggerType = import_v10.default.AutoModerationRuleTriggerType;
var ButtonStyle = import_v10.default.ButtonStyle;
var CDNRoutes = import_v10.default.CDNRoutes;
var ChannelFlags = import_v10.default.ChannelFlags;
var ChannelType = import_v10.default.ChannelType;
var ComponentType = import_v10.default.ComponentType;
var ConnectionService = import_v10.default.ConnectionService;
var ConnectionVisibility = import_v10.default.ConnectionVisibility;
var EmbedType = import_v10.default.EmbedType;
var EntitlementOwnerType = import_v10.default.EntitlementOwnerType;
var EntitlementType = import_v10.default.EntitlementType;
var EntryPointCommandHandlerType = import_v10.default.EntryPointCommandHandlerType;
var FormattingPatterns = import_v10.default.FormattingPatterns;
var ForumLayoutType = import_v10.default.ForumLayoutType;
var GatewayCloseCodes = import_v10.default.GatewayCloseCodes;
var GatewayDispatchEvents = import_v10.default.GatewayDispatchEvents;
var GatewayIntentBits = import_v10.default.GatewayIntentBits;
var GatewayOpcodes = import_v10.default.GatewayOpcodes;
var GatewayVersion = import_v10.default.GatewayVersion;
var GuildDefaultMessageNotifications = import_v10.default.GuildDefaultMessageNotifications;
var GuildExplicitContentFilter = import_v10.default.GuildExplicitContentFilter;
var GuildFeature = import_v10.default.GuildFeature;
var GuildHubType = import_v10.default.GuildHubType;
var GuildMFALevel = import_v10.default.GuildMFALevel;
var GuildMemberFlags = import_v10.default.GuildMemberFlags;
var GuildNSFWLevel = import_v10.default.GuildNSFWLevel;
var GuildOnboardingMode = import_v10.default.GuildOnboardingMode;
var GuildOnboardingPromptType = import_v10.default.GuildOnboardingPromptType;
var GuildPremiumTier = import_v10.default.GuildPremiumTier;
var GuildScheduledEventEntityType = import_v10.default.GuildScheduledEventEntityType;
var GuildScheduledEventPrivacyLevel = import_v10.default.GuildScheduledEventPrivacyLevel;
var GuildScheduledEventRecurrenceRuleFrequency = import_v10.default.GuildScheduledEventRecurrenceRuleFrequency;
var GuildScheduledEventRecurrenceRuleMonth = import_v10.default.GuildScheduledEventRecurrenceRuleMonth;
var GuildScheduledEventRecurrenceRuleWeekday = import_v10.default.GuildScheduledEventRecurrenceRuleWeekday;
var GuildScheduledEventStatus = import_v10.default.GuildScheduledEventStatus;
var GuildSystemChannelFlags = import_v10.default.GuildSystemChannelFlags;
var GuildVerificationLevel = import_v10.default.GuildVerificationLevel;
var GuildWidgetStyle = import_v10.default.GuildWidgetStyle;
var ImageFormat = import_v10.default.ImageFormat;
var IntegrationExpireBehavior = import_v10.default.IntegrationExpireBehavior;
var InteractionContextType = import_v10.default.InteractionContextType;
var InteractionResponseType = import_v10.default.InteractionResponseType;
var InteractionType = import_v10.default.InteractionType;
var InviteTargetType = import_v10.default.InviteTargetType;
var InviteType = import_v10.default.InviteType;
var Locale = import_v10.default.Locale;
var MembershipScreeningFieldType = import_v10.default.MembershipScreeningFieldType;
var MessageActivityType = import_v10.default.MessageActivityType;
var MessageFlags = import_v10.default.MessageFlags;
var MessageReferenceType = import_v10.default.MessageReferenceType;
var MessageType = import_v10.default.MessageType;
var OAuth2Routes = import_v10.default.OAuth2Routes;
var OAuth2Scopes = import_v10.default.OAuth2Scopes;
var OverwriteType = import_v10.default.OverwriteType;
var PermissionFlagsBits = import_v10.default.PermissionFlagsBits;
var PollLayoutType = import_v10.default.PollLayoutType;
var PresenceUpdateStatus = import_v10.default.PresenceUpdateStatus;
var RESTJSONErrorCodes = import_v10.default.RESTJSONErrorCodes;
var RPCCloseEventCodes = import_v10.default.RPCCloseEventCodes;
var RPCCommands = import_v10.default.RPCCommands;
var RPCDeviceType = import_v10.default.RPCDeviceType;
var RPCErrorCodes = import_v10.default.RPCErrorCodes;
var RPCEvents = import_v10.default.RPCEvents;
var RPCVersion = import_v10.default.RPCVersion;
var RPCVoiceSettingsModeType = import_v10.default.RPCVoiceSettingsModeType;
var RPCVoiceShortcutKeyComboKeyType = import_v10.default.RPCVoiceShortcutKeyComboKeyType;
var ReactionType = import_v10.default.ReactionType;
var RelationshipType = import_v10.default.RelationshipType;
var RoleFlags = import_v10.default.RoleFlags;
var RouteBases = import_v10.default.RouteBases;
var Routes = import_v10.default.Routes;
var SKUFlags = import_v10.default.SKUFlags;
var SKUType = import_v10.default.SKUType;
var SelectMenuDefaultValueType = import_v10.default.SelectMenuDefaultValueType;
var SortOrderType = import_v10.default.SortOrderType;
var StageInstancePrivacyLevel = import_v10.default.StageInstancePrivacyLevel;
var StickerFormatType = import_v10.default.StickerFormatType;
var StickerPackApplicationId = import_v10.default.StickerPackApplicationId;
var StickerType = import_v10.default.StickerType;
var SubscriptionStatus = import_v10.default.SubscriptionStatus;
var TeamMemberMembershipState = import_v10.default.TeamMemberMembershipState;
var TeamMemberRole = import_v10.default.TeamMemberRole;
var TextInputStyle = import_v10.default.TextInputStyle;
var ThreadAutoArchiveDuration = import_v10.default.ThreadAutoArchiveDuration;
var ThreadMemberFlags = import_v10.default.ThreadMemberFlags;
var UserFlags = import_v10.default.UserFlags;
var UserPremiumType = import_v10.default.UserPremiumType;
var Utils = import_v10.default.Utils;
var VideoQualityMode = import_v10.default.VideoQualityMode;
var VoiceChannelEffectSendAnimationType = import_v10.default.VoiceChannelEffectSendAnimationType;
var VoiceConnectionStates = import_v10.default.VoiceConnectionStates;
var WebhookType = import_v10.default.WebhookType;
var urlSafeCharacters = import_v10.default.urlSafeCharacters;

// src/utils/verification.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_discord_interactions = __toESM(require_dist(), 1);
var Verification = class {
  static {
    __name(this, "Verification");
  }
  /**
   * Verify Discord interaction signature
   * @param body Raw request body (string)
   * @param signature Signature from X-Signature-Ed25519 header
   * @param timestamp Timestamp from X-Signature-Timestamp header
   * @param publicKey Discord public key (from env)
   * @returns true if signature is valid
   */
  static async verify(body, signature, timestamp, publicKey) {
    try {
      return await (0, import_discord_interactions.verifyKey)(body, signature, timestamp, publicKey);
    } catch (error3) {
      console.error("Verification error:", error3);
      return false;
    }
  }
};

// src/utils/interaction-response.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var InteractionResponse = class {
  static {
    __name(this, "InteractionResponse");
  }
  /**
   * Create a PONG response (for verification)
   */
  static pong() {
    return new Response(JSON.stringify({ type: 1 }), {
      headers: { "Content-Type": "application/json" }
    });
  }
  /**
   * Create an error response
   */
  static error(message, ephemeral = true) {
    return new Response(
      JSON.stringify({
        type: 4,
        data: {
          content: `\u274C ${message}`,
          flags: ephemeral ? 64 : 0
        }
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  /**
   * Create a deferred response (for long-running operations)
   */
  static deferred(ephemeral = false) {
    return new Response(
      JSON.stringify({
        type: 5,
        data: {
          flags: ephemeral ? 64 : 0
        }
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  /**
   * Create a channel message response
   */
  static message(content, ephemeral = false) {
    return new Response(
      JSON.stringify({
        type: 4,
        data: {
          content,
          flags: ephemeral ? 64 : 0
        }
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

// src/worker.ts
init_Logger();
async function getCommands() {
  const { ALL_COMMANDS: ALL_COMMANDS2 } = await Promise.resolve().then(() => (init_commands(), commands_exports));
  return ALL_COMMANDS2;
}
__name(getCommands, "getCommands");
async function getCommandManager() {
  const commands = await getCommands();
  const { CommandManager: CommandManager2 } = await Promise.resolve().then(() => (init_CommandManager(), CommandManager_exports));
  return new CommandManager2(commands);
}
__name(getCommandManager, "getCommandManager");
var worker_default = {
  /**
   * Handle HTTP requests (Discord interactions)
   */
  async fetch(request, env2) {
    const logger = new Logger({ context: "Worker" });
    if (request.method === "GET") {
      return new Response(
        JSON.stringify({
          status: "ok",
          message: "Discord Bot Worker is running",
          applicationId: env2.DISCORD_CLIENT_ID
        }),
        {
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }
    try {
      const body = await request.text();
      const signature = request.headers.get("X-Signature-Ed25519");
      const timestamp = request.headers.get("X-Signature-Timestamp");
      if (!signature || !timestamp) {
        logger.warn("fetch - Missing signature headers");
        return InteractionResponse.error("Missing signature", false);
      }
      const isValid = await Verification.verify(body, signature, timestamp, env2.DISCORD_PUBLIC_KEY);
      if (!isValid) {
        logger.warn("fetch - Invalid signature");
        return InteractionResponse.error("Invalid signature", false);
      }
      const interaction = JSON.parse(body);
      if (interaction.type === InteractionType.Ping) {
        logger.info("fetch - Received PING, responding with PONG");
        return InteractionResponse.pong();
      }
      if (interaction.type === InteractionType.ApplicationCommand) {
        return await handleApplicationCommand(interaction, env2, logger);
      }
      if (interaction.type === InteractionType.ApplicationCommandAutocomplete) {
        return await handleAutocomplete(interaction, env2, logger);
      }
      logger.warn(`fetch - Unhandled interaction type: ${interaction.type}`);
      return InteractionResponse.error("Unhandled interaction type", true);
    } catch (error3) {
      logger.error("fetch - Error handling request:", error3);
      return InteractionResponse.error("Internal server error", false);
    }
  },
  /**
   * Handle scheduled tasks (cron triggers)
   * This runs at intervals defined in wrangler.toml
   *
   * Example: Post scheduled messages, update data, etc.
   */
  async scheduled(event, env2, ctx) {
    const logger = new Logger({ context: "Scheduled" });
    logger.info(`scheduled - Cron triggered: ${event.cron}`);
    ctx.waitUntil(
      handleScheduledTask(event, env2, logger).catch((error3) => {
        logger.error("scheduled - Error in scheduled task:", error3);
      })
    );
  }
};
async function discordApiCall(endpoint, method, body, token) {
  const url = `https://discord.com/api/v10${endpoint}`;
  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bot ${token}`,
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : void 0
  });
  const responseText = await response.text();
  if (!response.ok) {
    throw new Error(`Discord API error: ${response.status} ${response.statusText}`);
  }
  if (!responseText) {
    return {};
  }
  return JSON.parse(responseText);
}
__name(discordApiCall, "discordApiCall");
async function handleApplicationCommand(interaction, env2, logger) {
  if (interaction.type !== InteractionType.ApplicationCommand) {
    return InteractionResponse.error("Invalid interaction type", true);
  }
  const commandManager = await getCommandManager();
  const commandName = interaction.data.name;
  const command = commandManager.getCommand(commandName);
  if (!command) {
    logger.warn(`handleApplicationCommand - Unknown command: ${commandName}`);
    return InteractionResponse.error(`Unknown command: ${commandName}`, true);
  }
  try {
    const apiUser = "user" in interaction ? interaction.user : void 0;
    const apiMember = "member" in interaction ? interaction.member : void 0;
    const rawInteraction = {
      id: interaction.id,
      type: interaction.type,
      data: {
        name: interaction.data.name,
        options: "options" in interaction.data ? interaction.data.options : void 0
      },
      guild_id: "guild_id" in interaction ? interaction.guild_id : void 0,
      channel_id: "channel_id" in interaction ? interaction.channel_id : void 0,
      user: apiUser ? {
        id: apiUser.id,
        username: apiUser.username,
        discriminator: apiUser.discriminator,
        global_name: apiUser.global_name ?? void 0,
        bot: apiUser.bot,
        avatar: apiUser.avatar ?? null
      } : void 0,
      member: apiMember ? {
        user: apiMember.user ? {
          id: apiMember.user.id,
          username: apiMember.user.username,
          discriminator: apiMember.user.discriminator,
          global_name: apiMember.user.global_name ?? void 0,
          bot: apiMember.user.bot,
          avatar: apiMember.user.avatar ?? null
        } : void 0,
        joined_at: "joined_at" in apiMember ? apiMember.joined_at : void 0
      } : void 0,
      token: interaction.token,
      application_id: interaction.application_id
    };
    const validation = await command.validate(rawInteraction);
    if (!validation.valid) {
      logger.warn(
        `handleApplicationCommand - Command validation failed for ${commandName}: ${validation.reason}`
      );
      return new Response(
        JSON.stringify({
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: `\u274C ${validation.reason}`,
            flags: 64
            // Ephemeral
          }
        }),
        {
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const rest = {
      post: /* @__PURE__ */ __name((url, options) => discordApiCall(url, "POST", options.body, env2.DISCORD_TOKEN), "post")
    };
    logger.info(`handleApplicationCommand - Executing command: ${commandName}`);
    await command.execute(rawInteraction, env2, rest);
    return new Response(null, { status: 200 });
  } catch (error3) {
    logger.error(`handleApplicationCommand - Error executing ${commandName}:`, error3);
    return InteractionResponse.error("An error occurred while executing this command.", true);
  }
}
__name(handleApplicationCommand, "handleApplicationCommand");
async function handleAutocomplete(interaction, env2, logger) {
  if (interaction.type !== InteractionType.ApplicationCommandAutocomplete) {
    return InteractionResponse.error("Invalid interaction type", true);
  }
  const commandManager = await getCommandManager();
  const commandName = interaction.data.name;
  const command = commandManager.getCommand(commandName);
  if (!command) {
    return new Response(
      JSON.stringify({
        type: InteractionResponseType.ApplicationCommandAutocompleteResult,
        data: { choices: [] }
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  if ("autocomplete" in command && typeof command.autocomplete === "function") {
    try {
      const apiUser = "user" in interaction ? interaction.user : void 0;
      const apiMember = "member" in interaction ? interaction.member : void 0;
      const rawInteraction = {
        id: interaction.id,
        type: interaction.type,
        data: {
          name: interaction.data.name,
          options: "options" in interaction.data ? interaction.data.options : void 0
        },
        guild_id: "guild_id" in interaction ? interaction.guild_id : void 0,
        channel_id: "channel_id" in interaction ? interaction.channel_id : void 0,
        user: apiUser ? {
          id: apiUser.id,
          username: apiUser.username,
          discriminator: apiUser.discriminator,
          global_name: apiUser.global_name ?? void 0,
          bot: apiUser.bot,
          avatar: apiUser.avatar ?? null
        } : void 0,
        member: apiMember ? {
          user: apiMember.user ? {
            id: apiMember.user.id,
            username: apiMember.user.username,
            discriminator: apiMember.user.discriminator,
            global_name: apiMember.user.global_name ?? void 0,
            bot: apiMember.user.bot,
            avatar: apiMember.user.avatar ?? null
          } : void 0,
          joined_at: "joined_at" in apiMember ? apiMember.joined_at : void 0
        } : void 0,
        token: interaction.token,
        application_id: interaction.application_id
      };
      const choices = await command.autocomplete(rawInteraction);
      return new Response(
        JSON.stringify({
          type: InteractionResponseType.ApplicationCommandAutocompleteResult,
          data: { choices }
        }),
        {
          headers: { "Content-Type": "application/json" }
        }
      );
    } catch (error3) {
      logger.error("handleAutocomplete - Error:", error3);
    }
  }
  return new Response(
    JSON.stringify({
      type: InteractionResponseType.ApplicationCommandAutocompleteResult,
      data: { choices: [] }
    }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}
__name(handleAutocomplete, "handleAutocomplete");
async function handleScheduledTask(event, env2, logger) {
  logger.info("handleScheduledTask - Scheduled task started");
  logger.info("handleScheduledTask - Scheduled task completed");
}
__name(handleScheduledTask, "handleScheduledTask");

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-Qg273D/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-Qg273D/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=worker.js.map
