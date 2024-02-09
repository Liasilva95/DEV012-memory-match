import { createWeb, duplicateCards } from './App.js';

describe('createWeb', () => {
  it('should render without crashing', () => {
    const webDiv = createWeb();
    expect(webDiv instanceof HTMLElement).toBe(true);
  });
});
describe('duplicateCards', () => {
  it('should render without crashing', () => {
    const duplicateCard = duplicateCards();
    expect(duplicateCard instanceof HTMLElement).toBe(true);
  });
});
