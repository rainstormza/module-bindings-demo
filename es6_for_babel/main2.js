//------ main2.js ------
import * as lib from './lib';

// The imported value is live
console.log(lib.mutableValue); // 3
lib.incMutableValue();
console.log(lib.mutableValue); // 4
