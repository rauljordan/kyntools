/* @flow */

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
 * The Monad interface. Extends Functor and Applicative
 */
export interface Monad<T> extends Functor<T>, Applicative<T> {
  map<U>(f: (t: T) => U): Monad<U>,
  flatMap<U>(f: (t: T) => Monad<U>): Monad<U>
}

/**
 * The Maybe Monad. Implements Catamorphism from one algebra
 * to another
 */
export interface Maybe<T> extends Monad<T> {
  /**
   * Catamorphism
   */
  cata<Z>(none: () => Z, some: (val: T) => Z): Z;
}
