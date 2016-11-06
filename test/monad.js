import {
  describe,
  it
} from 'mocha';

import {
  expect
} from 'chai';

import Monad from '../src/monad';

describe('Monadic Constructor', function() {

  it('should bind value', function() {
    const result = Monad.is({ bound: 5 });
    expect(result).to.equal(true);
  });


});
