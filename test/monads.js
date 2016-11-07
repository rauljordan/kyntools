import {
  describe,
  it
} from 'mocha';

import {
  expect
} from 'chai';

import Identity from '../src/identity';
import { Maybe, Some, None } from '../src/maybe';

describe('Identity Monad', function() {

  it('should flatMap properly', function() {
    const result = new Identity(5).flatMap(val => new Identity(val + 3));
    expect(result.get()).to.equal(8);
  });

  it('should map properly', function() {
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
    const result = Maybe.fromNull(5).flatMap(val => Some(val + 3));
    expect(result.getOrElse('Does Not Work')).to.equal(8);
  });

  it('should return else if map fails', function() {
    const result = Maybe.fromNull({ name: 'raul'})
      .map(o => o.email)
      .map(o => o.name);
    expect(result.getOrElse('Does Not Work')).to.equal('Does Not Work');
  });

  it('should chain maps properly', function() {
    const result = Maybe.fromNull(5)
      .map(val => val + 2)
      .map(val => val * 2)
      .map(val => [val, val])
      .map(valArray => valArray[0]);

    expect(result.getOrElse('Does Not Work')).to.equal(14);
  });

});
