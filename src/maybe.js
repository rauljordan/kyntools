/* @flow */

import type {
  Monad
} from './types';

class Maybe<T> {
  val: T
  constructor(val: T) {
    this.val = val;
  }
  flatMap<Maybe>(f: (t: T) => Monad<Maybe>): Monad<Maybe> {
    return f(this.val);
  }
  map<U>(f: (t: T) => U): Maybe<U> {
    return new Maybe(f(this.val));
  }
  ap<U>(f: Maybe<(val: T) => U>): Maybe<U> {
    return new Maybe(f.get()(this.val));
  }
  getOrElse(other: T): T {
    return this.val ? this.val : other;
  }
  orElse(other: Maybe<T>): Maybe<T> {
    return this.val ? new Maybe(this.val) : other;
  }
  get(): T {
    return this.val;
  }
}

export const Some = <T>(val: T): Maybe<T> => {
  return new Maybe(val);
};

export const None = <T>(val: T): Maybe<?T> => {
  return new Maybe(null);
};
