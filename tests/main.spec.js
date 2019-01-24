/* global describe before after beforeEach afterEach context it */
/* eslint no-undef: "error" */

import { expect } from 'chai';
import { calc } from '../src/app';

describe('Calc', () => {
  before(() => null);
  after(() => null);
  beforeEach(() => null);
  afterEach(() => null);

  // smoke tests
  describe('Smoke tests', () => {
    context('Basic Operators', () => {
      it('shoud exist the calc lib', () => {
        expect(calc).to.exist;
      });
    });

    context.skip('Case 2', () => {
      it('should be an array', () => {

      });
      it('should have a size of 4 when push another value to the array', () => {

      });
      it('should remove the value 3 when use pop in the array', () => {

      });
      it('should return true when pop 3 from the array', () => {

      });
      it('should have a size of 2 when pop value from the array', () => {

      });
    });
  });
});
