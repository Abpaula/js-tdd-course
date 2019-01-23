// const a = 0;
// const b = 1;
// const c = 2;

// function add(d) {
//   let e = d;
//   e += 1;
//   return e;
// }

// function sum() {
//   return a + b;
// }

// add(c);
// sum();

import * as R from 'ramda';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];
const arr3 = R.union(arr1, arr2);
// eslint-disable-next-line no-console
console.log(arr3);
