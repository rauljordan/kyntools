/* @flow */

import type {
  Monad
} from './types';

export class Maybe<T> {
  val: T
  constructor(val: T) {
    this.val = val;
  }
  static fromNull(val: T): Maybe<?T> {
    return val ? new Maybe(val) : new Maybe(null);
  }
  flatMap(f: (t: T) => T): Maybe<?T> {
    return this.val ? new Maybe(f(this.val)) : new Maybe(null);
  }
  ap<U>(f: Maybe<(val: T) => U>): ?Maybe<U> {
    if (this.isSome()) {
      return new Maybe(f.getOrElse((arg: any) => arg)(this.val));
    }
    return null;
  }
  catamorphism<Z>(none: () => Z, some: (val: T) => Z): Z {
    return this.isSome() ? some(this.val) : none();
  }
  filter(f: (t: T) => boolean): Maybe<?T> {
    if (!this.val) {
      return new Maybe(null);
    }
    return f(this.val) ? new Maybe(this.val) : new Maybe(null);
  }
  isSome(): boolean {
    return this.val ? true : false;
  }
  isNone(): boolean {
    return !this.val ? true : false;
  }
  getOrElse(other: T): T {
    return this.val ? this.val : other;
  }
  orElse(other: Maybe<T>): Maybe<T> {
    return this.val ? new Maybe(this.val) : other;
  }
}

export const Some = <T>(val: T): Maybe<T> => {
  return new Maybe(val);
};

export const None = <T>(val: T): Maybe<?T> => {
  return new Maybe(null);
};
