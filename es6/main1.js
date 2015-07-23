//------ main1.js ------
import { mutableValue, incMutableValue } from './lib';

// The imported value is live
console.log(mutableValue); // 3
incMutableValue();
console.log(mutableValue); // 4

// The imported value can’t be changed
mutableValue++; // TypeError
