import arity from './arity';
import tail from './tail';

function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
}

export default function () {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return arity(arguments[0].length,
                tail(arguments).reduce(_pipe, arguments[0]));
};
