import reserveCounter from '../modules/reserveCounter.js';

// eslint-disable-next-line import/no-extraneous-dependencies
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html><p id="reservation-counter">()</p>');
global.document = dom.window.document;

test('Should display the number of reservations made', () => {
  const mockList = [1, 2];
  const counter = document.getElementById('reservation-counter');
  reserveCounter(mockList);
  expect(counter.innerHTML).toBe('(2)');
});