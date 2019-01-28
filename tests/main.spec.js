/* global describe before after beforeEach afterEach context it */
/* eslint no-undef: "error" */

import { expect } from 'chai';
// eslint-disable-next-line import/named
import { calc, Calculator } from '../src/app';

const calculator = new Calculator();

describe('Calc', () => {
  before(() => calculator);
  after(() => null);
  beforeEach(() => null);
  afterEach(() => null);

  // smoke tests
  describe('Smoke tests', () => {
    context('Library', () => {
      it('shoud exist the calc lib', () => {
        expect(calc).to.exist;
      });
      it('should exist calc method', () => {
        expect(calc).to.be.a('function');
      });
      it('shoud exist the calculator lib', () => {
        expect(calculator).to.exist;
      });
      it('should exist div method calculator', () => {
        expect(calculator.div).to.be.a('function');
      });
    });

    context('Basic Operators', () => {
      it('should get 5 when plus 2 to 3', () => {
        expect(calc('sum', 2, 3)).to.equal(5);
      });
      it('should get 5 when make 10 minus 5', () => {
        expect(calc('sub', 10, 5)).to.equal(5);
      });
      it('should get 20 when make 5 times 4', () => {
        expect(calc('mult', 5, 4)).to.equal(20);
      });
      it('should get 4 when make 20 divided by 5', () => {
        expect(calc('div', 20, 5)).to.equal(4);
      });
      it('should get null when I dont pass an operator', () => {
        expect(calc(2, 3)).to.equal(null);
      });
      it('should get null when I pass an invalid operator', () => {
        expect(calc('exp', 2, 3)).to.equal(null);
      });
      it('should get -4 when make 5 minus 9', () => {
        expect(calc('sub', 5, 9)).to.equal(-4);
      });
      it('should get error Div/0 when make 10 divided by 0', () => {
        // https://tips.tutorialhorizon.com/2017/09/08/mochachai-assert-thrown-error/
        expect(() => calculator.div(10, 0)).to.throw(TypeError, 'by zero');
      });
      it('should get code error 69 when make 10 divided by 0', () => {
        // expect(calc('div', 10, 0)).to.throw(TypeError).with.property('code', 69);
        expect(() => calculator.div(10, 0)).to.throw(TypeError).with.property('code', 69);
      });
    });
  });
});
