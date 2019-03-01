const sillyname = require('sillyname');
const packageA = require('@devablo/package-a');
const packageB = require('@devablo/package-b');

console.log(`This is the app example and ${sillyname()}`);
console.log(packageA);
console.log(packageB);