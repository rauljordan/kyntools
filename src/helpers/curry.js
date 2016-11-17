export default function curry(f) {
  const arity = f.length;

  return function f1() {
    const args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return f.apply(null, args);
    }
    return function f2() {
      const args2 = Array.prototype.slice.call(arguments, 0);
      return f1.apply(null, args.concat(args2));
    };
  };
}
