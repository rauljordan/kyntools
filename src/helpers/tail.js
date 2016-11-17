import slice from './slice';

export default function tail(arr) {
  return Array.prototype.slice.call(arr, 1, Infinity);
};
