import countMeals, { updateCounter } from './counter.js';

document.body.innerHTML =
  '<p class="nav-seafood"></p> <h2 class="comments-heading"></h2>';

describe('count meals', () => {
  test('count meals', () => {
    expect(countMeals([1, 2, 3, 4])).toBe(4);
  });
  test('count meals 0', () => {
    expect(countMeals([])).toBe(0);
  });
});

describe('count meals', () => {
  test('count comments', () => {
    expect(updateCounter([1, 2, 3, 4])).toBe(4);
  });
  test('count comments 0', () => {
    expect(updateCounter([])).toBe(0);
  });
});
