// Import the necessary modules and functions
import reservationCounter from '../modules/reserveCounter.js';

describe('reservationCounter', () => {
  // Mock the document and its properties
  beforeEach(() => {
    document.body.innerHTML = '<div id="reservation-counter"></div>';
  });
  // Clean up the document after each test
  afterEach(() => {
    document.body.innerHTML = '';
  });
  it('should update the reservation counter with the correct length', () => {
    // Create a sample list of reservations
    const reservations = ['reservation1', 'reservation2', 'reservation3'];
    // Call the reservationCounter function
    reservationCounter(reservations);
    // Get the updated counter element
    const counter = document.getElementById('reservation-counter');
    // Assert that the counter has been updated with the correct length
    expect(counter.innerHTML).toBe('(3)');
  });
  it('should update the reservation counter with zero when the list is empty', () => {
    // Create an empty list of reservations
    const reservations = [];
    // Call the reservationCounter function
    reservationCounter(reservations);
    // Get the updated counter element
    const counter = document.getElementById('reservation-counter');
    // Assert that the counter has been updated with zero
    expect(counter.innerHTML).toBe('(0)');
  });
});