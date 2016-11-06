/* @flow */
import type {
  Monad
} from './types';

/**
 * The Identity Monad Class
 */
export default class Identity<T> {
  val: T;
  constructor(val: T) {
    this.val = val;
  }
  flatMap<Identity>(f: (t: T) => Monad<Identity>): Monad<Identity> {
    return f(this.val);
  }
  map<U>(f: (t: T) => U): Identity<U> {
    return new Identity(f(this.val));
  }
  get(): T {
    return this.val;
  }
}
