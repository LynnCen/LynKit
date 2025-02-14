'use strict';

const hook = require('..');
const assert = require('assert').strict;

assert.strictEqual(hook(), 'Hello from hook');
console.info('hook tests passed');
