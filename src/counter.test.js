import countMeals from './counter.js';

document.body.innerHTML = '<p class="nav-seafood"></p>';

describe('count meals', () => {
  test('count meals', () => {
    expect(countMeals([1, 2, 3, 4])).toBe(4);
  });
  test('count meals 0', () => {
    expect(countMeals([])).toBe(0);
  });
});
