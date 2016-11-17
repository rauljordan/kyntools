import curry from './curry';

export default curry(function reduce(f, initialVal, arr) {
  var acc = (initialVal === undefined) ? undefined : initialVal;
  for (var i = 0; i < arr.length; i++) {
    if (acc !== undefined) {
      acc = f.call(undefined, acc, arr[i], i, arr);
    }
    else {
      acc = arr[i];
    }
  }
  return acc;
});
