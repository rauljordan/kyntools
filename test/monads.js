import {
  describe,
  it
} from 'mocha';

import {
  expect
} from 'chai';

import Identity from '../src/identity';
import { Maybe, Some, None } from '../src/maybe';
import { curry, path } from '../src';

describe('Identity Monad', function() {

  it('should flatMap properly', function() {
    const result = new Identity(5).map(val => val + 3);
    expect(result.get()).to.equal(8);
  });

  it('should chain maps properly', function() {
    const result = new Identity(5)
      .map(val => val + 2)
      .map(val => val * 2)
      .map(val => [val, val])
      .map(valArray => valArray[0]);

    expect(result.get()).to.equal(14);
  });

});

describe('Maybe Monad', function() {

  it('should flatMap properly', function() {
    const result = Maybe.fromNull(5).flatMap(val => val + 3);
    expect(result.getOrElse('Does Not Work')).to.equal(8);
  });

  it('should return else if flatMap fails', function() {
    const result = Maybe.fromNull({ name: 'raul'})
      .flatMap(o => o.email)
      .flatMap(o => o.name);
    expect(result.getOrElse('Does Not Work')).to.equal('Does Not Work');
  });

  it('should chain maps properly', function() {
    const result = Maybe.fromNull(5)
      .flatMap(val => val + 2)
      .flatMap(val => val * 2)
      .flatMap(val => [val, val])
      .flatMap(valArray => valArray[0]);

    expect(result.getOrElse('Does Not Work')).to.equal(14);
  });

});

describe('Currying', function() {
  it('should curry functions properly', function() {
    const add = curry((x, y) => x + y);
    expect(add(2)(3)).to.equal(5);
  });
});

describe('Path and flatMap', function() {
  it('get properly from path', function() {
    const obj = { user: { profile: { photo: 'cool url' } } };
    const res = Maybe.fromNull(obj).flatMap(path(['user', 'profile', 'name']));
    expect(res.getOrElse('Not Working')).to.equal('Not Working');
  });
});
