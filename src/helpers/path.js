import curry from './curry';

export default curry(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val === null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});
