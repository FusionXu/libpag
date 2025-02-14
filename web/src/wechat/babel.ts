/* global globalThis */
import type { wx } from './interfaces';

declare const WXWebAssembly: typeof WebAssembly;
declare const wx: wx;
declare const globalThis: any;

globalThis.WebAssembly = WXWebAssembly;
globalThis.isWxWebAssembly = true;
window = globalThis;