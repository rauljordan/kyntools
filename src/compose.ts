export default function compose<X>(...funcs: Array<Function>) {
  if (funcs.length === 0) {
    return (arg: any) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  const last = funcs[funcs.length - 1];
  const rest = funcs.slice(0, -1);
  return (...args: Array<X>) => {
    return rest.reduceRight((composed, f) => f(composed), last(...args));
  };
}
