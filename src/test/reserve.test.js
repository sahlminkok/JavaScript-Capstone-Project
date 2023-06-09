import reserveCounter from '../modules/reserveCounter.js';

describe('Reserves Functionality', () => {
  test('Count number of reservations', () => {
    const myObject = [{
      0: 'First',
      1: 'Second',
      2: 'Third',
      3: 'Fourth',
    }];
    const newCount = reserveCounter(myObject);
    expect(newCount).toBe(1);
  });

  test('Count number of comments', () => {
    const myObject = [5, 8, 25, 3];
    const newCount = reserveCounter(myObject);
    expect(newCount).toBe(4);
  });
});