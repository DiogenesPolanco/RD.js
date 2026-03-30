const assert = require('assert');
const rdjs = require('../dist/RDJs.js');

assert(rdjs !== undefined, 'Module should be exported');
assert(rdjs.RDJs !== undefined, 'RDJs instance should be exported');
assert(typeof rdjs.RDJs.get === 'function', 'get method should be a function');
assert(typeof rdjs.RDJs.post === 'function', 'post method should be a function');
assert(typeof rdjs.RDJs.put === 'function', 'put method should be a function');
assert(typeof rdjs.RDJs.delete === 'function', 'delete method should be a function');

console.log('All tests passed!');
