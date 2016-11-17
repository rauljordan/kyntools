import curry from './curry';

export default curry(function filter(f, arr) {
  var acc = [];
  for (var i = 0; i < arr.length; i++) {
    if (f.call(this, arr[i], i, arr)) {
      acc.push(arr[i]);
    }
  }
  return acc;
});
