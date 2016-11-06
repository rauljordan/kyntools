export interface Functor<T> {
    map<U>(f: (t: T) => U): Functor<U>;
}
export interface Applicative<T> {
    ap<U>(af: Applicative<(t: T) => U>): Applicative<T>;
}
export interface Monad<T> extends Functor<T>, Applicative<T> {
    map<U>(f: (t: T) => U): Monad<U>;
    flatMap<U>(f: (t: T) => Monad<U>): Monad<U>;
    bind<U>(f: (t: T) => Monad<U>): Monad<U>;
}
export declare class Identity<T> {
    val: T;
    constructor(val: any);
    bind<Identity>(f: (t: T) => Monad<Identity>): Monad<Identity>;
}
