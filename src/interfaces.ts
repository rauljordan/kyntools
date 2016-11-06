/**
 * Covariant Functor Typeclass.
 * Simply a container that can be mapped over uniformly.
 * Implements the map function.
 */
export interface Functor<T> {
  map<U>(f: (t: T) => U): Functor<U>
}

/**
 * Applies a wrapped function to a wrapped value
 */
export interface Applicative<T> {
  ap<U>(af: Applicative<(t: T) => U>): Applicative<T>
}

/**
 * The Monad interface. Extends a Functor and Applicative
 */
export interface Monad<T> extends Functor<T>, Applicative<T> {
  map<U>(f: (t: T) => U): Monad<U>,
  flatMap<U>(f: (t: T) => Monad<U>): Monad<U>,
  bind<U>(f: (t: T) => Monad<U>): Monad<U>
}

export class Identity<T> {
  val: T;
  constructor(val) {
    this.val = val;
  }
  bind<Identity>(f: (t: T) => Monad<Identity>): Monad<Identity> {
    return f(this.val);
  }
}
