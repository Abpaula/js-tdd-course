/* global describe before after beforeEach afterEach context it */
/* eslint no-undef: "error" */

import { expect } from 'chai';

describe('Main', () => {
  let arr;
  before(() => console.log('Before 1'));
  after(() => console.log('After 1'));
  beforeEach(() => arr = [1, 2, 3]);
  afterEach(() => console.log('Inner after'));
  describe('Method A', () => {
    context('Case 1', () => {
      it.skip('shoud happen ...', () => {
        throw new Error('just fail here!');
      });
    });

    context('Case 2', () => {
      it('should be an array', () => {
        expect(arr).to.be.a('array');
      });
      it('should have a size of 4 when push another value to the array', () => {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
      });
      it('should remove the value 3 when use pop in the array', () => {
        arr.pop();
        expect(arr).to.have.not.include(3);
      });
      it('should return true when pop 3 from the array', () => {
        expect(arr.pop() === 3).to.be.true;
      });
      it('should have a size of 2 when pop value from the array', () => {
        arr.pop();
        expect(arr).to.have.lengthOf(2);
      });
    });
  });

  describe('Method B', () => {
    context.skip('Case 1', () => {
      it('shoud happen ...', () => true);
      it.skip('shoud happen ...', () => {
        throw new Error('broken here!');
      });
    });

    context('Case 2', () => {
      it.skip('shoud happen ...', () => {
        throw new Error('just fail here!');
      });
      it.skip('shoud happen ...', () => {
        throw new Error('broken again here!');
      });
    });
  });
});
