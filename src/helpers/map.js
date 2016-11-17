import curry from './curry';

export default curry(function map(f, arr) {
  var acc = [];
  for (var i = 0; i < arr.length; i++) {
    acc.push(f(arr[i], i, arr));
  }
  return acc;
});
