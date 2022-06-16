"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = void 0;
/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version, name } = require('../../package.json');
exports.VERSION = `${name}:${version}`;
