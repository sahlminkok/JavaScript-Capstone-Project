import countDisplayedShows from '../modules/showCounter.js';

describe('countDisplayedShows', () => {
  beforeEach(() => {
    // Reset the DOM before each test
    document.body.innerHTML = '';
  });

  test('should count displayed shows correctly when no shows are present', () => {
    const count = countDisplayedShows();
    expect(count).toBe(0);
  });

  test('should count displayed shows correctly when dynamically loaded', () => {
    document.body.innerHTML = `
      <div class="shows-list">
        <div class="show-item"></div>
      </div>
    `;
    let count = countDisplayedShows();
    expect(count).toBe(1);

    // Simulate dynamically loading more show items
    document.body.innerHTML += `
      <div class="show-item"></div>
      <div class="show-item"></div>
    `;
    count = countDisplayedShows();
    expect(count).toBe(3);
  });
});